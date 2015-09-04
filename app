#!/usr/bin/env node

var hinoki = require('hinoki');
var fragments = require('fragments');
var fragmentsPostgres = require('fragments-postgres');
var fragmentsUser = require('fragments-user');
var umgebung = require('umgebung');

var source = hinoki.source([
  __dirname + '/src/server',
  __dirname + '/src/shared',
  fragmentsUser,
  fragmentsPostgres,
  fragments.source,
  umgebung
]);

source = hinoki.decorateSourceToAlsoLookupWithPrefix(source, 'fragments_');

module.exports = fragments(source);

if (require.main === module) {
  module.exports.runCommand();
}
