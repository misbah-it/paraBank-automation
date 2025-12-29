import { test } from '../tests/base.js'; // uses HomePage fixture
import { InvalidLoginPage } from '../pages/InvalidLoginPage.js';

test('Login with invalid credentials should not show welcome message', async ({ homePage, page }) => {
  // Navigate to homepage using fixture
  await homePage.goto();

  // Initialize InvalidLoginPage
  const invalidLoginPage = new InvalidLoginPage(page);

  // Perform login with invalid credentials
  await invalidLoginPage.loginWithInvalidCredentials('misbahh', 'wrongpassword');

  // Verify welcome message is not visible
  await invalidLoginPage.verifyUserIsNotLoggedIn();
});
