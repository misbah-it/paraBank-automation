// pages/OpenAccountPage.js
import { expect } from '@playwright/test';
import testData from '../testData.js';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
    this.accountTypeSelect = page.locator('#type');          
    this.fromAccountSelect = page.locator('#fromAccountId'); 
    this.submitButton = page.locator('//*[@id="openAccountForm"]/form/div/input');
    this.accountNumberText = page.locator('#newAccountId'); 
  }

  async navigateToOpenAccount() {
    await this.openNewAccountLink.click();
  }

  async selectAccountType(typeValue) {
    await expect(this.accountTypeSelect).toBeVisible();
    await expect(this.accountTypeSelect).toBeEnabled();
    await this.accountTypeSelect.selectOption(typeValue);
  }

  async selectFromAccount() {
    await expect(this.fromAccountSelect).toBeVisible();
    await expect(this.fromAccountSelect).toBeEnabled();

    const firstOptionValue = await this.fromAccountSelect.locator('option').first().getAttribute('value');
    if (!firstOptionValue) throw new Error('No options available in From Account dropdown');

    await this.fromAccountSelect.selectOption(firstOptionValue);
    testData.fromAccount = firstOptionValue; // Save for later
    console.log('Selected From Account:', firstOptionValue);
  }

  async submitAccount() {
    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }

  async captureAccountNumber() {
    await expect(this.accountNumberText).toBeVisible();

    const accountNumber = await this.accountNumberText.innerText();
    if (!accountNumber || accountNumber.trim() === '') {
      throw new Error('Account number was not generated!');
    }

    testData.accountNumber = accountNumber; // Save for later use
    console.log('New account number:', accountNumber);
    return accountNumber;
  }
}
