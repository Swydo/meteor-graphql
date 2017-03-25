/* eslint-disable prefer-arrow-callback */
import GraphQLCompiler from './compiler';

Plugin.registerCompiler({
  extensions: ['gql', 'graphql', 'graphqls'],
}, function compiler() {
  return new GraphQLCompiler();
});
