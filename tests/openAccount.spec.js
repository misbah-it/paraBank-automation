// tests/openAccount.spec.js
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { OpenAccountPage } from '../pages/OpenAccountPage.js';
import testData from '../testData.js';

test('Open New Account', async ({ page }) => {
  // Login using LoginPage POM
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);

  //  Open Account workflow
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.navigateToOpenAccount();

  //  Select account type and From Account dynamically
  await openAccountPage.selectAccountType('1');  
  await openAccountPage.selectFromAccount();

  //  Submit and capture new account number
  await openAccountPage.submitAccount();
  await openAccountPage.captureAccountNumber();
});
