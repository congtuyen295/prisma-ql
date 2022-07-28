const User = require("./User");
const Post = require("./Post");
const PostCreateInput = require("./PostCreateInput");
const PostOrderByUpdatedAtInput = require("./PostOrderByUpdatedAtInput");
const { SortOrder, DateTime } = require("./SortOrder");
const UserCreateInput = require("./UserCreateInput");

const Type = [
  User,
  Post,
  PostCreateInput,
  PostOrderByUpdatedAtInput,
  SortOrder,
  DateTime,
  UserCreateInput,
];

module.exports = Type;
