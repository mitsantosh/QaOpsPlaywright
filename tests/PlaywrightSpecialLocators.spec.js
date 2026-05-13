const {test, expect} = require('@playwright/test')

test('Playwright Special Locators Test', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByLabel("Monday").check();
    await expect(page.getByLabel("Monday")).toBeChecked();
    await page.getByLabel("Country:").selectOption("India");
    await expect(page.getByLabel("Country:")).toHaveValue("india");

    await page.getByPlaceholder("Enter Name").fill("Santosh");
    await expect(page.getByPlaceholder("Enter Name")).toHaveValue("Santosh");

    await page.getByRole("button", {name: "Upload Single File"}).click();
    await expect(page.getByRole("button", {name: "Upload Single File"})).toBeFocused();   

    await expect(page.getByText("Static Web Table")).toBeVisible();

    await page.getByRole("link", {name: "Apple"}).click();
   

})