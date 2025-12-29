import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage.js';
import testData from '../testData.js';

test('Check transaction of 33 in account overview', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);

  const accountsOverviewPage = new AccountsOverviewPage(page);
  await accountsOverviewPage.navigateToAccountsOverview();
  await accountsOverviewPage.openFirstAccount();

  await accountsOverviewPage.checkTransaction33();
});
