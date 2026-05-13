const { expect } = require("@playwright/test");


class CheckoutCompletePage

{
    constructor(page)

    {
        this.page=page;
        this.orderCompleteHeader=page.locator(".complete-header");
        this.burgerMenuBtn=page.locator("#react-burger-menu-btn");
        this.logoutBtn=page.locator("#logout_sidebar_link");
    }

    async verifyCheckoutCompletePageHeader(orderCompleteHeader)
    {
        await expect(this.orderCompleteHeader).toHaveText(orderCompleteHeader);
    }


    async logout()
    {
        await this.burgerMenuBtn.click();
        await this.logoutBtn.click();
    }

}

module.exports={CheckoutCompletePage};