// tests/transferFunds.spec.js
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { TransferFundsPage } from '../pages/TransferFundsPage.js';
import testData from '../testData.js';

test('Transfer Funds', async ({ page }) => {
  // Login using LoginPage POM
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);

  //  Transfer Funds workflow
  const transferFundsPage = new TransferFundsPage(page);
  await transferFundsPage.navigateToTransferFunds();
  await transferFundsPage.enterAmount('33');
  await transferFundsPage.selectFromAccount();
  await transferFundsPage.selectToAccount();
  await transferFundsPage.submitTransfer();

  //  Verify success message
  await transferFundsPage.verifySuccess();
});
