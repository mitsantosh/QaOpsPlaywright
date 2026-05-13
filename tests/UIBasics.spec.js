const {test, expect} = require('@playwright/test')
test('Login Test Swag Labs', async ({page}) => {
    const userName=page.locator("#user-name")
    const passWord=page.locator("#password")
    const loginButton=page.locator("#login-button")
    const CardTitles=page.locator(".inventory_item_name ")
    await page.goto("https://www.saucedemo.com/");
  //  await page.locator("#user-name").fill("Sa");
    await userName.fill("Sa");
  //  await page.locator("#password").fill("123"); 
    await passWord.fill("123");
  //  await page.locator("#login-button").click();
    await loginButton.click();
    console.log(await page.locator("h3[data-test='error']").textContent());
    await expect(page.locator("h3[data-test='error']")).toContainText("do not match");
    await userName.fill("")
    await userName.fill("standard_user");
    await passWord.fill("");
    await passWord.fill("secret_sauce");
 //   await page.locator("#login-button").click();
    await loginButton.click();
    await expect(page.locator(".title")).toHaveText("Products");
  // console.log(await page.locator(".inventory_item_name ").first().textContent());
   console.log(await CardTitles.first().textContent());
 // console.log(await page.locator(".inventory_item_name ").nth(1).textContent());
  console.log(await CardTitles.nth(1).textContent());
    const allTitle=await CardTitles.allTextContents();
    console.log(allTitle);

});

test('Browser Context Playwright Test', async ({browser}) => {
   const context = await browser.newContext();
   const page = await context.newPage();
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    console.log (await page.title());
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    await page.locator("a[href*='register.htm']").click();
    await expect(page.locator("h1[class='title']")).toHaveText('Signing up is easy!');
    await page.locator("input[id='customer.firstName']").fill("Santosh");
    await page.locator("input[id='customer.lastName']").fill("Mitkari");
    await page.locator("input[id='customer.address.street']").fill("123 Main St");
    await page.locator("input[id='customer.address.city']").fill("Pune");
    await page.locator("input[id='customer.address.state']").fill("Maharashtra");
    await page.locator("input[id='customer.address.zipCode']").fill("443304");
    await page.locator("input[id='customer.phoneNumber']").fill("555-123-4567");
    await page.locator("input[id='customer.ssn']").fill("123-45-6789");
    await page.locator("input[id='customer.username']").fill("santosh124");
    await page.locator("input[id='customer.password']").fill("password123");
    await page.locator("input[id='repeatedPassword']").fill("password123");
    await page.locator("input[value='Register']").click();
    await expect(page.locator(".title")).toContainText("Welcome");
    


});

test('Page Playwright Test', async ({page}) => {

    await page.goto('https://google.com');
    //get title and add assertion
    console.log (await page.title());
        

});

test('@Web Login Test Practicetest Automation', async ({page}) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#submit").click();
    console.log(await page.locator("#error").textContent())
    await expect(page.locator("#error")).toHaveText("Your username is invalid!");
    await expect(page.locator("#error")).toContainText("invalid");

});

