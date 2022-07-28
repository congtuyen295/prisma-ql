const { asNexusMethod, enumType } = require('nexus');

const { DateTimeResolver } = require('graphql-scalars');
const DateTime = asNexusMethod(DateTimeResolver, 'date');

const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
});

module.exports = { SortOrder, DateTime };
