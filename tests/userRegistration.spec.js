
const { test } = require('@playwright/test');
const { RegistrationPage } = require('../pages/RegistrationPage');
const testData = require('../testData');
test('User Registration', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  const registration = new RegistrationPage(page);  
  await registration.navigateToRegister();

  const data = {
    firstName: 'misbah',
    lastName: 'waseem',
    address: '224 c block millitary account',
    city: 'lahore',
    state: 'lahore',
    zipCode: '123',
    phone: '03020438520',
    ssn: '1122',
    username: 'misbaa',
    password: '1234'
  };

  await registration.fillRegistrationForm(data);
  await registration.submitForm();
  testData.username = data.username;

  await registration.verifyRegistrationSuccess(data.username);
});
