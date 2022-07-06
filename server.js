const express = require('express');
const http = require('http');

const { ApolloServer, AuthenticationError } = require('apollo-server-express');

const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const typeDefs = require('./src/graphql/typedefs');
const resolvers = require('./src/graphql/resolvers');
const authRoutes = require('./src/api/routes/auth');

const app = express();

// Connecting the server to MongoDB Atlas
require('./db/config').connect();

// Configure Cors to be able to use the server for a front-end application
const CORS_OPTIONS = {
  origin: process.env.REACT_APP_API_URL,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(CORS_OPTIONS));

app.use(bodyParser.json({ limit: '8mb' })); // ability to upload files less than 8mb
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_APP_API_URL);
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();

  return 0;
});

// Authentification Routes
app.use('/auth', authRoutes);

// Apollo Server Initialization
const APOLLO_SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    const AUTH_HEADER = req.get('Authorization');

    // Authorization token is required to use the API
    if (!AUTH_HEADER) {
      throw new AuthenticationError('Invalid, missing or expired token');
    }

    return { res, req };
  },
  introspection: true,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
});

// Apply Middleware to be able to upload files
APOLLO_SERVER.applyMiddleware({ app, cors: CORS_OPTIONS });

// Run Server
const HTTP_SERVER = http.createServer(app);
HTTP_SERVER.listen(process.env.PORT);

APOLLO_SERVER.installSubscriptionHandlers(HTTP_SERVER);
