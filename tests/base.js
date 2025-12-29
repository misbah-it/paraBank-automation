// fixtures/base.js
const { test: base } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

exports.test = base.extend({
  homePage: async ({ page }, use) => {
    // Create HomePage instance
    const homePage = new HomePage(page);

    // Provide it to the test
    await use(homePage);
  },
});

exports.expect = base.expect;
