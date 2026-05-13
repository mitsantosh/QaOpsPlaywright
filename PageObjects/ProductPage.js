const {expect} = require('@playwright/test')

class ProductPage {
constructor (page)

{
    this.pageTitle = page.locator(".title");
    this.Products = page.locator(".inventory_item_description")
    this.CardBadgeBtn = page.locator(".shopping_cart_badge")
}

async verifyProductsPageTitle(productpagetitle)
{
      await expect(this.pageTitle).toHaveText(productpagetitle);
}

async searchAndAddProductToCart(productName)
{
       const count = await this.Products.count();
       console.log("Total products: " + count);
    for (let i = 0; i < count; i++) {
        if (await this.Products.nth(i).locator(".inventory_item_name").textContent() === productName) {
            await this.Products.nth(i).locator("text=Add to cart").click();
            break;
        }
    }
}

async clickOnCartBadgeBtn(){

      await this.CardBadgeBtn.click();
}

}

module.exports={ProductPage};