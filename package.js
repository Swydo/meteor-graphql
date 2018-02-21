/* eslint-disable no-var, prefer-arrow-callback */
var packages = [
  'ecmascript',
  'isobuild:compiler-plugin@1.0.0',
];

Package.describe({
  name: 'swydo:graphql',
  version: '0.4.0',
  summary: 'Compiler plugin that supports GraphQL files in Meteor',
  git: 'https://github.com/swydo/meteor-graphql',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: 'compile-graphql',
  use: [
    'ecmascript',
  ],
  sources: [
    'compiler.js',
    'plugin.js',
  ],
  npmDependencies: {
    graphql: '0.12.3',
    'graphql-tag': '2.6.1',
  },
});

Package.onUse(function use(api) {
  api.versionsFrom('1.3.2.4');

  api.use(packages, ['server', 'client']);
});

Package.onTest(function test(api) {
  api.use(packages, ['server', 'client']);
  api.use('swydo:graphql');

  api.use([
    'meteortesting:mocha',
  ]);

  api.mainModule('specs/server.spec.js', 'server');
  api.mainModule('specs/client.spec.js', 'client');
});
