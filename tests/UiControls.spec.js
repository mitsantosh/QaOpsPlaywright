const {test, expect} = require('@playwright/test')

//test.describe.configure({mode:'parallel'})
//test.describe.configure({mode:'serial'})

test('@Web Dropdown Test', async ({page}) => {
    const fruitsDropdown = page.locator("#fruits");
    await page.goto("https://letcode.in/dropdowns");

    await fruitsDropdown.selectOption("Banana");

    
});

test('Auto Suggestive Dropdown Test', async ({page}) => {
    await page.goto("https://weboverhauls.github.io/demos/autosuggest/");
    await page.locator("#search").pressSequentially('New', { delay: 100 })
    const dropdown=page.locator("li[role*='option']")
    await dropdown.first().waitFor()
    const optionsCount=await dropdown.count();
    console.log("Total options: " + optionsCount);

   for (let i=0; i<optionsCount; i++)

      {
      const text= await dropdown.nth(i).textContent();
        if (text==="New York") {
            await dropdown.nth(i).click();
            break;
        }
      }  
   
});

test('Radiobutton and checkbox Test', async ({page}) => {
    const radioBtn = page.locator("#yes");
    const checkBox=page.locator("input[type='checkbox']")
    await page.goto("https://letcode.in/radio");

    await radioBtn.check();

    //Assertion to verify that the radio button is checked
    await expect(radioBtn).toBeChecked();
    console.log (await radioBtn.isChecked());

    //Checkbox 
    await checkBox.last().check();
    await expect(checkBox.last()).toBeChecked();
    console.log (await checkBox.last().isChecked());

    await checkBox.last().uncheck();
    await expect(checkBox.last()).not.toBeChecked();
    console.log (await checkBox.last().isChecked());
    expect (await checkBox.last().isChecked()).toBeFalsy();

});

test('Child Window Handling', async ({browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const homePageBtn=page.locator("#home");

  await page.goto("https://letcode.in/window");

  const [newPage]= await Promise.all(
    [
      context.waitForEvent('page'), //Listen for any new page that opens in the browser context
      homePageBtn.click(),
  ]) // new page will open when we click on the homePageBtn, and the waitForEvent will capture that new page and assign it to the newPage variable.
 
  console.log(await newPage.locator("h1").textContent());
 
  await expect(newPage.locator("h1")).toContainText("Pro Engineer");
  

    
});