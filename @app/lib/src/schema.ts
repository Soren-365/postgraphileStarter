// import { makeExecutableSchema } from 'graphql-tools';
// import typeDefs from './type-defs.graphqls';
// import resolvers from './resolvers';

// import serverSchema from './schema.json';
import serverSchema from './schema.graphqls';

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });
// import { printSchema } from 'graphql';

// const jsonSchema = {
//   $id: '#/person',
//   type: 'object',
//   properties: {
//     name: {
//       type: 'string',
//     },
//     age: {
//       type: 'integer',
//     },
//   },
// };


// console.log(printSchema(schema));

export default serverSchema;
