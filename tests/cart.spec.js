
const {test,expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');
const {Inventory} = require('../pages/InventoryPage');
const constant = require('../data/constants');
const {Cart} = require('../pages/CartPage');
const users = require('../data/users');

/** @type {cartPage} */
let cart;

/** @type {LoginPage} */
let loginPage;

/** @type {InventoryPage} */
let inventoryPage;



test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    inventoryPage = new Inventory(page);
    cart = new Cart(page);

    await loginPage.open();
    await loginPage.login(users.standard_Users.username, users.standard_Users.password);


})

test('added products appear correclty in cart', async({page})=> {

    await inventoryPage.addProductToCart(constant.text.sauceLabsBackpacktext);
    await inventoryPage.addProductToCart(constant.text.saucelabsBikeLighttext);

    await cart.goTocart();
    await expect(page).toHaveURL(constant.urls.cart)
    const itemNames = await cart.getAllCardName()
    expect(itemNames).toEqual([constant.text.sauceLabsBackpacktext,constant.text.saucelabsBikeLighttext])

})

test('product can be removed from the cart',async({page})=>
{
    await inventoryPage.addProductToCart(constant.text.sauceLabsBackpacktext);
    await inventoryPage.addProductToCart(constant.text.saucelabsBikeLighttext);

    await cart.goTocart();
    await cart.removeProduct(constant.text.sauceLabsBackpacktext);

    const count = await cart.getcartItemCount();
    expect(count).toBe(1);

    const remainingNames = await cart.getAllCardName();
    expect(remainingNames).toEqual([constant.text.saucelabsBikeLighttext])
})

test('Add a product to cart and head to checkout and  user can proceed with right info @smoke',async({page})=>
{

    await inventoryPage.addProductToCart(constant.text.sauceLabsBackpacktext);
    await inventoryPage.addProductToCart(constant.text.saucelabsBikeLighttext);


    await cart.goTocart();
    await expect(page).toHaveURL(constant.urls.cart)

    cart.checkout();
    await cart.fillInfoCheckOut(constant.checkOutInfo.firstname,constant.checkOutInfo.lastname,
    constant.checkOutInfo.postalcode);
    await expect(page).toHaveURL(constant.urls.checkouturl);

    const subtotal = await cart.getSubtotal();
    const tax = await cart.getTax();
    const total = await cart.getTotal();

    expect(total).toBeCloseTo(subtotal + tax, 2);
    

    await cart.finish();
    await expect(page).toHaveURL(constant.urls.thankyouPage);

    await expect(cart.getcompleteHedarMessage).toHaveText('Thank you for your order!');
    
})