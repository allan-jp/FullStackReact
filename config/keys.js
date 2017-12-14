// keys.js - determine which set of credentials to use
if (process.env.NODE_ENV === 'production') {
  //we are in prod - return prod set of keys
  module.exports = require('./prod');
} else {
  //we are in dev - return dev
  module.exports = require('./dev');
}