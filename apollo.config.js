// eslint-disable-next-line
require('dotenv').config({ path: '.env.development.local' });

module.exports = {
  client: {
    service: 'tutorial-zeukkari',
    url: process.env.REACT_APP_API_URI,
    excludes: ["**/__tests__/**"],
    includes: ["./src/apollo/resolvers.ts", "./schema.json"]
  },
};
