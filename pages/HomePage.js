// pages/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to ParaBank homepage
  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }
}

module.exports = { HomePage };
