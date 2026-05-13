const {test, expect} = require('@playwright/test')
const {POManager}=require('../PageObjects/POManager');
//JSON > string > js object
const dataset=JSON.parse(JSON.stringify(require('../utils/E2ESwagLab.POMImplementationTestData.spec.json')));

test('Swag Lab Login Test', async ({page}) => {
    const poManager = new POManager(page);
      
    const loginPage = poManager.getLoginPage();
    const productPage = poManager.getProductPage();
    const yourcartPage = poManager.getYourCartPage();
    const checkoutYourInfoPage = poManager.getCheckoutYourInfoPage();
    const checkoutOverviewPage = poManager.getCheckoutOverviewPage();
    const checkoutCompletePage = poManager.getCheckoutCompletePage();

    // Navigate to the login page
    await loginPage.goToLoginPage();
    
    // Perform login
   await loginPage.validLogin(dataset.username,dataset.password);
    
    // Verify title on the products page
    await productPage.verifyProductsPageTitle(dataset.productPageTitle);
    
    // Add the desired product to the cart
    await productPage.searchAndAddProductToCart(dataset.productName);

    // Open the shopping cart
    await productPage.clickOnCartBadgeBtn();

    //Verify Your Cart page title
    await yourcartPage.verifyYourCartPageTitle(dataset.yourcartPageTitle);

    // Verify the selected product is in the cart
    await yourcartPage.verifyProductInCart(dataset.productName);

    // Proceed through checkout
    await yourcartPage.clickOnCheckoutBtn();

    //Verify Checkout Your Information page title
    await checkoutYourInfoPage.verifyCheckoutYourInfoPageTitle(dataset.checkoutYourInfoPageTitle);

    //Fill the checkout information and continue
    await checkoutYourInfoPage.fillCheckoutYourInfoForm(dataset.firstName, dataset.lastName, dataset.postalCode);

   //Verify Checkout Overview page title
   await checkoutOverviewPage.verifyCheckoutOverviewPageTitle(dataset.checkoutOverviewPageTitle);

   //Finish the checkout process
    await checkoutOverviewPage.clickOnFinishBtn();
    
    // Verify order completion page header text
    await checkoutCompletePage.verifyCheckoutCompletePageHeader(dataset.orderCompleteHeader);
    
    // Log out and confirm return to the login page
    await checkoutCompletePage.logout();

    // Verify login button visibility on login page 
    await loginPage.LoginBtnIsVisible();

})