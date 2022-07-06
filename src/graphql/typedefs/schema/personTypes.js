const { gql } = require('apollo-server-express');

module.exports.PersonType = gql`
  type PhotoType {
    url: String
    public_id: String
  }

  type Person {
    id: ID
    name: String
    email: String
    bio: String
    phone: String
    is_verified: Boolean
    photo: PhotoType
  }

  input PersonInput {
    name: String
    email: String
    bio: String
    phone: String
    password: String
    is_verified: Boolean
  }
`;
