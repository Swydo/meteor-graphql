# Meteor GraphQL
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

`.graphql`, `.graphqls` and `.gql` files are supported.
