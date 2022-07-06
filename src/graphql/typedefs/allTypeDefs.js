const { gql } = require('apollo-server-express');

module.exports.allTypeDefs = gql`
  type Query {
    # related to currentPerson
    currentPerson: Person
  }

  type Mutation {
    # related to currentPerson
    currentPersonUpdate(person: PersonInput): Person
    changePhoto(file: Upload): Person
  }
`;
