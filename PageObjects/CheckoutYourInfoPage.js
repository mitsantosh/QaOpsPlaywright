const { expect } = require("@playwright/test");
class CheckoutYourInfoPage {

    constructor(page)

    {
        this.page = page;
        this.checkoutYourInfoPageTitle = page.locator(".title");
        this.firstNameInput = page.locator("#first-name");
        this.lastNameInput = page.locator("#last-name");
        this.postalCodeInput = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");
       
    }

    async verifyCheckoutYourInfoPageTitle(checkoutYourInfoPageTitle)
    {
          await expect(this.checkoutYourInfoPageTitle).toHaveText(checkoutYourInfoPageTitle);   

    }

    async fillCheckoutYourInfoForm(firstName, lastName, postalCode)
    {
         await this.firstNameInput.fill(firstName);
         await this.lastNameInput.fill(lastName);
         await this.postalCodeInput.fill(postalCode);
         await this.continueBtn.click();
    }


    }

    module.exports={CheckoutYourInfoPage};
