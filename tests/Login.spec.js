// @ts-check
//import { test, expect } from '@playwright/test';

const {test, expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');
const users = require('../data/users');
const constants = require('../data/constants');

/** @type {LoginPage} */
let loginPage;

test.beforeEach(async({page}) =>{
 loginPage = new LoginPage(page);
 await loginPage.open();
})


// test case-1 login 

test('Valid user can log in @smoke', async({page}) =>
{
  await loginPage.login(users.standard_Users.username, users.standard_Users.password);

  // for verify 
  await expect(page).toHaveURL(constants.urls.inventory);
  await expect(page.locator('.title')).toHaveText(constants.text.productTitle);
});

test('Invalid password displays an error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(users.standard_Users.username, users.Invalid_Credenital.password);

  await expect(loginPage.errorMessage).toBeVisible();

  await expect(loginPage.errorMessage).toContainText(
    'Username and password do not match any user in this service'
  );
});

