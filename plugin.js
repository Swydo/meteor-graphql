/* eslint-disable prefer-arrow-callback */
import GraphQLCompiler from './compiler';

Plugin.registerCompiler({
  extensions: ['gql', 'graphql'],
}, function compiler() {
  return new GraphQLCompiler();
});
