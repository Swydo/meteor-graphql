/* eslint-disable prefer-arrow-callback, func-names, class-methods-use-this */
import loader from 'graphql-tag/loader';

export default class GraphQLCompiler {
  processFilesForTarget(files) {
    // Fake webpack context
    // @see https://github.com/apollographql/graphql-tag/blob/57a258713acecde5ebef0c5771a975d6446703c7/loader.js#L43
    const context = {
      cacheable() {},
    };

    files
      .forEach((file) => {
        const path = `${file.getPathInPackage()}.js`;
        const content = file.getContentsAsString().trim();

        try {
          const data = loader.call(context, content);

          file.addJavaScript({
            data,
            path,
          });
        } catch (e) {
          if (e.locations) {
            file.error({
              message: e.message,
              line: e.locations[0].line,
              column: e.locations[0].column,
            });
          } else {
            throw e;
          }
        }
      });
  }
}
