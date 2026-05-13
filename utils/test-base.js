const base = require('@playwright/test');

 exports.customtest=base.test.extend
 
 (
    {
        testDataForLogin : { 
            username:"standard_user",
            password : "secret_sauce",
            productPageTitle : "Products"
        }
    }
)