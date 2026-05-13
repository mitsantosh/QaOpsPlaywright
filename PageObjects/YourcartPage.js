const {expect} = require('@playwright/test')

class YourcartPage

{
    constructor(page)

    {
      this.yourcartpageTitle = page.locator(".title");
      this.itemName= page.locator(".inventory_item_name");
      this.checkoutBtn = page.locator("#checkout");
    }

    async verifyYourCartPageTitle(yourcartpagetitle)
    {
          await expect(this.yourcartpageTitle).toHaveText(yourcartpagetitle);
           
    }

    async verifyProductInCart(productName)
    {
        const bool = await this.itemName.filter({hasText: productName}).isVisible();
        expect(bool).toBeTruthy();
 
    }

    async clickOnCheckoutBtn()
    {
        await this.checkoutBtn.click();
    }

}

module.exports={YourcartPage};