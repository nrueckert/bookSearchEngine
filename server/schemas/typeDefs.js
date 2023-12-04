const typeDefs = `
  type User {
    _id: ID!
    email: String
    username: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }
  type Auth {
    user: User
    token: ID!
  }
  input BookInput {
    bookId: String!
    title: String!
    authors: [String]
    description: String!
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;
module.exports = typeDefs;