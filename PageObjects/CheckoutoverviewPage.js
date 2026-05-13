const { expect } = require("@playwright/test");

class CheckoutoverviewPage
{
    constructor(page)   

    {
this.page=page;
this.checkoutOverviewPageTitle=page.locator(".title");
this.finishBtn=page.locator("#finish");
    }

    async verifyCheckoutOverviewPageTitle(checkoutOverviewPageTitle)
    {
          await expect(this.checkoutOverviewPageTitle).toHaveText(checkoutOverviewPageTitle);

    }

    async clickOnFinishBtn()
    {   
        await this.finishBtn.click();

    }
    }

    module.exports={CheckoutoverviewPage};