# Meteor GraphQL

Compiler plugin that supports GraphQL files in Meteor

[![Build Status](https://travis-ci.org/Swydo/meteor-graphql.svg?branch=master)](https://travis-ci.org/Swydo/meteor-graphql)
[![Greenkeeper badge](https://badges.greenkeeper.io/Swydo/meteor-graphql.svg)](https://greenkeeper.io/)

## Installation
```
meteor add swydo:graphql
```

## Usage

### Queries
```graphql
# query.grahql
query getPerson ($id: ID!) {
  person(id: $id) {
    name
    email
  }
}
```

```js
import query from './query.graphql';

// See https://github.com/apollographql/apollo-client for setup
const client = new ApolloClient();

// The query is parsed and can be directly passed to the Apollo Client
client.query({ query }).then(console.log);
```

#### Multiple queries in one file
It's also possible to define multiple queries in one file:

```graphql
# queries.grahql

query foo {
    baz
}

query bar {
    baz
}
```

```js
import { foo, bar } from './queries.graphql';

const client = new ApolloClient();

client.query({ query: foo }).then(console.log);
```

### Schemas
You can also import your main schema and pass it directly to `makeExecutableSchema`.

```graphql
# schema.graphql

"""
This is a description of a Person
This will show up in GraphiQL
"""
type Person {
  id: ID!
  name: String
  email: String
}

type Query {
  person(id!): Person
}
```

```js
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema.graphql'; // No need to parse it!
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

### Importing .graphql files in other .graphql files
The cool thing is that you can use import comments, that will import all definitions from another file:

```graphql
#import "./personSchema.graphql"

type Query {
  # It will recognize the Person type from the personSchema.graphql file
  person(id): Person
}
```

## Extensions
We recommend to always use `.graphql`, but also `.graphqls` and `.gql` files are supported.

## Benefits
There are some good reasons to use `.graphql` files instead of the inline syntax:

- Good highlighting by GitHub and your IDE
- No need to manually parse strings with [graphql-tag](https://github.com/apollographql/graphql-tag)
- Small performance gain because queries and schemas are parsed ahead of time
- The [GraphQL Configuration Protocol](https://github.com/graphcool/graphql-config/issues/20) will support `.graphql` files out of the box
- Works with [babel-plugin-inline-import](https://www.npmjs.com/package/babel-plugin-inline-import)

## Sponsor
[![Swydo](http://assets.swydo.com/img/s-wydo-logo.228x100.png)](https://swy.do)

Want to work with Meteor and GraphQL? [Join the team!](https://swy.do/jobs)
