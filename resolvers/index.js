const Mutation = require("./Mutation");
const Query = require("./Query");
const Type = require("./Type");

const resolvers = [...Mutation, ...Type, ...Query];

module.exports = resolvers
