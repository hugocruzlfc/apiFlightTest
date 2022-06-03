const app = require('./package.json');

// environment variables
// each object represents
// a execution environment
module.exports = Promise.resolve({
  // default variables for all environments.
  default: {
    PORT: 3000,
    VERSION: app.version,
    TITLE: app.title,
    DESCRIPTION: app.description,
    DB_URI: 'mongodb://localhost/testFlight',
  },

  // used on tests running.
  test: {
    ENV: 'test',
  },

  // used on project building.
  build: {
    PORT: 80,
  },

  debug: {
    ENV: 'debug',
  },
  development: {
    ENV: 'development',
  },
  qa: {
    ENV: 'qa',
  },
  production: {
    ENV: 'production',
  },
});
