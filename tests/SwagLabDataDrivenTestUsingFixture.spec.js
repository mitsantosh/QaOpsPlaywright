const {test, expect} = require('@playwright/test')
const {customtest}= require('../utils/test-base')

const {POManager}=require('../PageObjects/POManager');

{

customtest('Swag Lab Login Test' , async ({page,testDataForLogin}) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const productPage = poManager.getProductPage();

    // Navigate to the login page
    await loginPage.goToLoginPage();
    
    // Perform login
   await loginPage.validLogin(testDataForLogin.username,testDataForLogin.password);
    
    // Verify title on the products page
    await productPage.verifyProductsPageTitle(testDataForLogin.productPageTitle);
       })

    }