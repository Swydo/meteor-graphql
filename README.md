# Meteor GraphQL

[![Greenkeeper badge](https://badges.greenkeeper.io/Swydo/meteor-graphql.svg)](https://greenkeeper.io/)
Compiler plugin that supports GraphQL files in Meteor

[![Build Status](https://travis-ci.org/Swydo/meteor-graphql.svg?branch=master)](https://travis-ci.org/Swydo/meteor-graphql)

## Installation
```
meteor add swydo:graphql
```

## Usage
```js
import query from './query.graphql';

// See https://github.com/apollographql/apollo-client for setup
const client = new ApolloClient();

// The query is parsed and can be directly passed to the Apollo Client
client.query({ query }).then(console.log);
```

You can also import your main schema and pass it directly to `makeExecutableSchema`:

```js
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema.graphql'; // No need to parse it!
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

`.graphql`, `.graphqls` and `.gql` files are supported.

## Benefits
There are some good reasons to use `.graphql` files instead of the inline syntax:

- Good highlighting by GitHub and your IDE
- No need to manually parse strings with [graphql-tag](https://github.com/apollographql/graphql-tag)
- The [GraphQL Configuration Protocol](https://github.com/graphcool/graphql-config/issues/20) will support `.graphql` files out of the box
