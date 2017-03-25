/* eslint-disable prefer-arrow-callback, func-names */
import loader from 'graphql-tag/loader';

function GraphQLCompiler() {}
GraphQLCompiler.prototype.processFilesForTarget = function (files) {
  files.forEach(function (file) {
    // Fake webpack context
    // See https://github.com/apollographql/graphql-tag/blob/master/loader.js#L26
    const context = {
      cacheable() {},
    };

    const output = loader.call(context, file.getContentsAsString());
    file.addJavaScript({ data: output, path: `${file.getPathInPackage()}.js` });
  });
};

export default GraphQLCompiler;
