const {LoginPage}=require('../PageObjects/LoginPage');
const {ProductPage}=require('../PageObjects/ProductPage');
const {YourcartPage}=require('../PageObjects/YourcartPage');
const {CheckoutYourInfoPage}=require('../PageObjects/CheckoutYourInfoPage');
const {CheckoutoverviewPage}=require('../PageObjects/CheckoutoverviewPage');
const {CheckoutCompletePage}=require('../PageObjects/CheckoutcompletePage');

class POManager
{
constructor(page)
{   
  this.page=page;
  this.LoginPage = new LoginPage(this.page);
  this.productPage = new ProductPage(this.page);
  this.yourcartPage = new YourcartPage(this.page);
  this.checkoutYourInfoPage = new CheckoutYourInfoPage(this.page);
  this.checkoutOverviewPage = new CheckoutoverviewPage(this.page);
  this.checkoutCompletePage = new CheckoutCompletePage(this.page);
}

getLoginPage()
{ return this.LoginPage;}

getProductPage()
{    return this.productPage;}

getYourCartPage()
{    return this.yourcartPage;}

getCheckoutYourInfoPage()
{    return this.checkoutYourInfoPage;}

getCheckoutOverviewPage()
{    return this.checkoutOverviewPage;}

getCheckoutCompletePage()
{    return this.checkoutCompletePage;}

}
module.exports={POManager};
