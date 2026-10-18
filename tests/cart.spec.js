
const {test,expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');
const {inventory} = require('../pages/InventoryPage');
const constant = require('../data/constants');
const cart = require('../page/CartPage');

/** @type {Cart} */
let cart;
/** @type {LoginPage} */
let loginPage;

/** @type {inventory} */
let inventoryPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    inventoryPage = new inventory(page);
    cart = new Cart(page);

    await loginPage.open();
    await loginPage.login(users.standard_Users.username, users.standard_Users.password);


})

test('added products appear correclty in cart', async([page])=> {

    await inventoryPage.addProductToCart(constant.text.sauceLabsBackpacktext);
    await inventoryPage.addProductToCart(constant.text.saucelabsBikeLighttext);

    await this.cart.goTocart();
    await expect(page).toHaveURL(constant.urls.cart)
    const itemNames = await cart.getAllCardName()
    expect(itemNames).toEqual([constant.text.sauceLabsBackpacktext,constant.text.saucelabsBikeLighttext])

})

test('product can be removed from the cart',async({page})=>
{
    await inventoryPage.addProductToCart(constant.text.sauceLabsBackpacktext);
    await inventoryPage.addProductToCart(constant.text.saucelabsBikeLighttext);

    await this.cartPage.goTocart();
    await cart.removeProduct(sauceLabsBackpacktext);

    const count = await cartPage.getcartItemCount();
    expect(count).toBe(1);

    const remainingNames = await cartPage.getAllCardName();
    epect(remainingNames).toEqual(sauceLabsBackpacktext)
})

test('Add a product to. cart and head to cehckout ns user can proceed with right info',async({page})=>
{

    await inventoryPage.addProductToCart(constant.text.sauceLabsBackpacktext);
    await inventoryPage.addProductToCart(constant.text.saucelabsBikeLighttext);


    await this.cart.goTocart();
    await expect(page).toHaveURL(constant.urls.cart)

    cart.checkoit();
    cart.fillInfoCheckOut(constant.checkOutInfo.firstname,constant.checkOutInfo.lastname,
    constant.checkOutInfo.postalcode);
    await expect(page).toHaveURL(constant.urls.checkouturl);

    const subtotal = await cart.getSubtotal();
    const tax = await cart.getTax();
    const total = await cart.getTotal();

    expect(total).toBecloseTo(subtotal + tax,2);

    await cart.finish();
    await expect(page).toHaveURL(constant.urls.thankyouPage);

    await expect(cart.getcompleteHedarMessage).toHaveText('Thank you for your order!');
    
})