const { allTypeDefs } = require('./allTypeDefs');
const { PersonType } = require('./schema/personTypes');

const typedef = [PersonType, allTypeDefs];

module.exports = typedef;
