/* eslint-disable prefer-arrow-callback, func-names, class-methods-use-this */
import loader from 'graphql-tag/loader';

export default class GraphQLCompiler {
  processFilesForTarget(files) {
        // Fake webpack context
        // See https://github.com/apollographql/graphql-tag/blob/master/loader.js#L26
    const context = {
      cacheable() {},
    };

    files.forEach(function (file) {
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
