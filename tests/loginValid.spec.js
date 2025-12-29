// tests/loginValid.spec.js
const { test } = require('../tests/base'); // use the base.js fixture
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../testData');

test('Valid login shows welcome message', async ({ page, homePage }) => {
  // Use fixture to navigate to homepage
  await homePage.goto();

  // Use LoginPage for login and verification
  const loginPage = new LoginPage(page);
  await loginPage.login(testData.username, testData.password);
  await loginPage.verifyWelcomeMessage(testData.firstName, testData.lastName);
});
