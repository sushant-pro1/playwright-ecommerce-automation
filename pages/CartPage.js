
class Cart{
    constructor(page){

        this.cartLink   = page.locator('[data-test ="shopping-cart-badge"]'),
        this.itemNames = page.locator('.inventory_item_name');
        this.cartitem   = page.locator('[data-test="inventory-item"]');
        this.cartRemove = page.getByRole('button',{name : 'Remove'});
        this.checkOut   = page.getByRole('button',{name:'checkout'});
        this.firstName  = page.locator('[data-test="firstName"]');
        this.lastName   = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continoue  = page.locator('[data-test="continue"]');
        this.finishButton     = page.getByRole('button',{name:'Finish'});
        this.subtotal   = page.locator('[data-test="subtotal-label"]');
        this.tax        = page.locator('[data-test="tax-label"]');
        this.total      = page.locator('[data-test="total-label"]');
        this.getcompleteHedarMessage = page.locator('[data-test="complete-header"]');
        this.errorMessage = page.locator('[data-test="error"]');

        

} 
async goTocart(){
    await this.cartLink.click();

}
async getAllCardName(){
    return await this.itemNames.allTextContents();

} 


getCartItem(productName) {
    return this.cartitem.filter({ hasText: productName });
}

async removeProduct(productName) {
    const item = this.getCartItem(productName);
    await item.getByRole('button', { name: 'Remove' }).click();
}


async getcartItemCount(){
    return this.cartitem.count();
}

async checkout(){
    await this.checkOut.click();
}

async fillInfoCheckOut(firstName, lastName ,postalCode){
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continoue.click();
}


async getSubtotal() {
    const text = await this.subtotal.textContent();
    return parseFloat(text.replace('Item total: $', '').trim());
}

async getTax() {
    const text = await this.tax.textContent();
    return parseFloat(text.replace('Tax: $', '').trim());
}

async getTotal() {
    const text = await this.total.textContent();
    return parseFloat(text.replace('Total: $', '').trim());
}

async finish() {
    await this.finishButton.click();
}

}
module.exports = {Cart}

