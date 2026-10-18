// @ts-check

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { Inventory } = require('../pages/inventory');
const constants = require('../data/constants');
const users = require('../data/users');

/** @type {LoginPage} */
let loginPage;

/** @type {Inventory} */
let inventoryPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new Inventory(page);
    await loginPage.open();
    await loginPage.login(users.standard_Users.username,
        users.standard_Users.password);
});

test('Cart badge update when added to cart', async ({ page }) => {

   await  inventoryPage.addProductToCart(constants.text.sauceLabsBackpacktext);
   await inventoryPage.addProductToCart(constants.text.saucelabsBikeLighttext);
   const cartCount = await inventoryPage.getCartCount();
   expect(cartCount).toBe(2);

});

test('products can be sorted by price low to high', async({page})=>{

    const price = await inventoryPage.sortBy(constants.sortOptions.priceLowToHigh);  
    // it will click on sort option by low to high

    const peices = await inventoryPage.getAllProducrtPrices();
    // it will get all the prices of products and return as array of numbers

    const sortedprices = [...peices].sort((a,b)=> a-b);
    // it will sort the prices in ascending order and return as array of numbers

    expect(peices).toEqual(sortedprices);
    // it will compare the original prices with sorted prices and if they are equal then test case will pass otherwise fail

});

