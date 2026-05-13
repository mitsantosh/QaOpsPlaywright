const {test, expect} = require('@playwright/test')
const {POManager}=require('../PageObjects/POManager');
//JSON > string > js object
const dataset=JSON.parse(JSON.stringify(require('../utils/SwagLabLoginDataDrivenTestData.spec.json')));

for (const data of dataset)
{

test(`Swag Lab Login Test for ${data.username}`, async ({page}) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const productPage = poManager.getProductPage();

    // Navigate to the login page
    await loginPage.goToLoginPage();
    
    // Perform login
   await loginPage.validLogin(data.username,data.password);
    
    // Verify title on the products page
    await productPage.verifyProductsPageTitle(data.productPageTitle);
       })

    }