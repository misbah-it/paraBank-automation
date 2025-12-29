// pages/AccountsOverviewPage.js
import { expect } from '@playwright/test';

export class AccountsOverviewPage {
  constructor(page) {
    this.page = page;
    this.accountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
    this.firstAccountLink = page.locator('#accountTable a').first();
    this.transactionRows = page.locator('#transactionTable tbody tr');
  }

  async navigateToAccountsOverview() {
    await this.accountsOverviewLink.click();
  }

  async openFirstAccount() {
    await this.firstAccountLink.click();
  }

  async checkTransaction33() {
    await expect(this.transactionRows.first()).toBeVisible();

    const rowCount = await this.transactionRows.count();
    let found = false;

    for (let i = 0; i < rowCount; i++) {
      const rowText = await this.transactionRows.nth(i).innerText();

      console.log(`Row ${i + 1}: ${rowText}`);

      // ✅ SIMPLE + ROBUST CHECK
      if (rowText.includes('33')) {
        console.log(`✅ Transaction 33 found in row ${i + 1}`);
        found = true;
        break;
      }
    }

    expect(found).toBe(true);
  }
}
