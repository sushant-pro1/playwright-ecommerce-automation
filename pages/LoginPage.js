// pages are used to store the page objects and we can use them in our test cases
// we can create a class for each page and define the locators and methods for that page in that class
// we can then import that class in our test cases and use the methods of that class to interact with the page
// we can also create a base page class and extend that class in our page classes to avoid code duplication

class LoginPage{
    constructor(page){ 
        this.page = page;
        this.baseURL = process.env.BASE_URL;

        // locators
        this.usernameInput =page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button',{name : 'Login'});
        this.errorMessage = page.locator('[data-test="error"]');
}
async open() {
    console.log(`Opening base URL: ${this.baseURL}`);
    await this.page.goto(this.baseURL);
    console.log('Landing page successfully opened');
}
async login(username,password)
{
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

}

async getErrorMessage() {
  return await this.errorMessage.textContent();
}

}

module.exports = {LoginPage}