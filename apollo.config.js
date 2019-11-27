// eslint-disable-next-line
require('dotenv').config({ path: '.env.development.local' });

module.exports = {
  client: {
    service: 'Venepaikka Admin Interface',
    url: process.env.REACT_APP_API_URI,
    excludes: ["**/__tests__/**"],
    includes: ["./src/**/*.tsx?", "./schema.json"]
  },
};
