exports.user = `
  type user {
    id: Int
    fullname: String
    username: String
    email: String
    phone: String
    role: String
    provider: String
    createdAt: String
    updatedAt: String
  }
`;

exports.auth = `
  type auth {
    token:String
    user: user
  }
`;
