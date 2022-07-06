const mongoose = require('mongoose');

const URI = process.env.MONGO_DB;

const MONGOOSE_ARGS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

exports.connect = () => {
  mongoose.connect(URI, MONGOOSE_ARGS, (error) => {
    if (error) console.log(error);
    else {
      console.log(`> 🚀 Ready on ${process.env.LOCALHOST_PORT}`);
    }
  });
};
