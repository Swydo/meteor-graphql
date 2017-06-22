/* eslint-disable prefer-arrow-callback, func-names, class-methods-use-this */
import loader from 'graphql-tag/loader';

export default class GraphQLCompiler {
  processFilesForTarget(files) {
    // Fake webpack context
    // @see https://github.com/apollographql/graphql-tag/blob/master/loader.js#L43
    const context = {
      cacheable() {},
    };

    files
    // Do not load files in the node_modules directory
    // This should not happen by default, but it is: https://github.com/Swydo/meteor-graphql/issues/5
    .filter(file => !file.getPathInPackage().includes('node_modules'))
    .forEach(file => {
      const path = `${file.getPathInPackage()}.js`;
      const content = file.getContentsAsString().trim();
      let data = '';

      if (content) {
        data = loader.call(context, content);
      }

      file.addJavaScript({
        data,
        path,
      });
    });
  }
}
