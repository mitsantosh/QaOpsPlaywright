const { expect } = require("@playwright/test");

class LoginPage {

    constructor (page)
    
    {
        this.page=page;
        this.UserName=page.locator("#user-name");
        this.Password=page.locator("#password");
        this.LoginBtn=page.locator(".submit-button")

    }

    async goToLoginPage()

    {
        await this.page.goto("https://www.saucedemo.com/");
    }


    async validLogin(username,password)
    {
    await this.UserName.fill(username);
    await this.Password.fill(password);
    await this.LoginBtn.click();
    
        }

    async LoginBtnIsVisible()
    {
        await expect(this.LoginBtn).toBeVisible();
    }

}

module.exports={LoginPage};