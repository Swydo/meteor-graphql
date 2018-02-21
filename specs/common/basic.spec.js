/* eslint-disable prefer-arrow-callback, func-names, global-require */
/* eslint-env mocha */
import chai from 'chai';

describe('graphql import', function () {
  it('should import .graphql', function () {
    const { kind, definitions } = require('../examples/example.graphql');
    chai.expect(kind).to.be.ok;
    chai.expect(definitions).to.be.ok;
  });

  it('should import .graphqls', function () {
    const { kind, definitions } = require('../examples/schema.graphqls');
    chai.expect(kind).to.be.ok;
    chai.expect(definitions).to.be.ok;
  });

  it('should import .gql', function () {
    const { kind, definitions } = require('../examples/example2.gql');
    chai.expect(kind).to.be.ok;
    chai.expect(definitions).to.be.ok;
  });

  it('should handle imports', function () {
    const { kind, definitions } = require('../examples/imports.graphql');

    chai.expect(kind).to.be.ok;
    chai.expect(definitions.length).to.equal(2);
  });

  it('should handle comments as descriptors', function () {
    const { definitions } = require('../examples/comments.graphql');

    chai.expect(definitions[0].description.kind).to.equal('StringValue');
    chai.expect(definitions[0].description.value).to.equal('This is a type descriptor');
    chai.expect(definitions[0].fields[0].description.value).to.equal('This is a field descriptor');
    chai.expect(definitions[0].fields[1].description).to.equal(undefined);
  });

  it('loads multiple queries', function () {
    const { foo, bar } = require('../examples/multiple.graphql');

    chai.expect(foo.kind).to.be.ok;
    chai.expect(bar.kind).to.be.ok;
  });
});
