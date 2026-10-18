
class Cart{
    constructor(page){

        this.cartLink   = page.locator('[data-test ="shopping-cart-badge"]'),
        this.itemNames  = page.locator('[data-test= "cart-item-name"]');
        this.cartitem   = page.locaotr('[data-test="inventory-item"]')
        this.cartRemove = page.getByRole('button',{name : 'Remove'});
        this.checkOut   = page.getByRole('button',{name:'checkout'});
        this.firstName  = page.locator('[data-test="firstName"]');
        this.lastName   = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continoue  = pqge.locator('[data-test="continue"]');
        this.finishButton     = page.getByRole('button',{name:'Finish'});
        this.subtotal   = page.locaotr('[data-test="subtotal-label"]');
        this.tax        = page.locaotr('[data-test="tax-label"]');
        this.total      = page.locaotr('[data-test="total-label"]');
        this.getcompleteHedarMessage = page.loc('[data-test="complete-header"]')

        

} 
async goTocart(){
    await this.cartLink.click();

}
async getAllCardName(){
    return await this.itemNames.getTextContents();

} 
async removeProduct(ProductNme){
    const item = this.getCartItem(ProductNme)
    await item.cartRemove.click();

}

async getCartItem(PeoductName){
    return this.cartitem.filter({hasText: productName})
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
async getSubtotal(){

    const text = await this.subtotal.getTextContent();
    return parseFloat(text.replace('Item total: $',''));

}

async getTax(){

    const test = await this.tax();
    return parseFloat(text.replace('Tax: $',''));
}

async getTotal(){

    const test = await this.total();
    return parseFloat(text.replace('Total: $',''));
}

async finish(){
    this.finishButton.click();
}
}
module.exports = {Cart}

