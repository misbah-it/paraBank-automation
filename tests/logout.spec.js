// tests/logout.spec.js
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { LogoutPage } from '../pages/LogoutPage.js';
import testData from '../testData.js';

test('Logout test', async ({ page }) => {
  // Login first
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);

  //  Logout
  const logoutPage = new LogoutPage(page);
  await logoutPage.clickLogout();

  // Verify user is logged out
  await logoutPage.verifyLoggedOut();
});
