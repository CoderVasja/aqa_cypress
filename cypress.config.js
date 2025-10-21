const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

require('dotenv').config({ path: envFile });

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env:{
      USER_EMAIL: process.env.USER_EMAIL,
      USER_PASSWORD: process.env.USER_PASSWORD,
    }, 
  }
});