const Mutation = require("./Mutation");
const Type = require("./Type");

const resolvers = [...Mutation, ...Type];

module.exports = resolvers
