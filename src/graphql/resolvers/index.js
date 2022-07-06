const { CurrentPersonQueries } = require('./currentPerson/queries');
const { CurrentPersonMutations } = require('./currentPerson/mutations');

const resolvers = {
  Query: {
    ...CurrentPersonQueries,
  },
  Mutation: {
    ...CurrentPersonMutations,
  },
};

module.exports = resolvers;
