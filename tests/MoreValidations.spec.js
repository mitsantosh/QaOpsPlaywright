const {test, expect} = require('@playwright/test')

test('Hidden element validation Test', async ({page}) => {

    await page.goto("https://www.automationtesting.co.uk/hiddenElements.html");
   // await page.goto("https://www.google.com/");
   // await page.goBack();

   expect (await page.locator("#myDIV")).toBeHidden();

   await page.getByRole('button', { name: 'Toggle' }).click();

  await page.locator('#myDIV').waitFor({state:"visible"});
  expect (await page.locator("#myDIV")).toBeVisible();

   
})

test('Alert and hover Test', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog", dialog => dialog.accept());
    await page.locator("#confirmBtn").click();

    await page.pause();
    await page.locator(".dropbtn").hover();
     
})

test('Iframe Test', async ({page}) => {

    await page.goto("https://www.automationtesting.co.uk/iframes.html");

    const framesPage=page.frameLocator("iframe[src='index.html']");
    await framesPage.locator("a[href='https://webdriveruniversity.com/']").click();
    
       
})

test("Screenshot and visual validation test", async ({page})=> {

  await page.goto("https://www.automationtesting.co.uk/hiddenElements.html");
  expect (await page.locator("#myDIV")).toBeHidden();
  await page.screenshot({path:"beforeClickFullPageScreeenshot.png"});
  await page.getByRole('button', { name: 'Toggle' }).click();
  await page.locator('#myDIV').waitFor({state:"visible"});
  expect (await page.locator("#myDIV")).toBeVisible();
await page.screenshot({path:"afterClickFullPageScreenshot.png"});
  await page.locator("#myDIV").screenshot({path:"afterClickPartialScreenshot.png"});

})

test("Visual validation test", async ({page})=> {
await page.goto("https://www.saucedemo.com/");
expect (await page.screenshot()).toMatchSnapshot("saucedemo.png");

})