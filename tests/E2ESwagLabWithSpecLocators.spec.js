const {test, expect} = require('@playwright/test')

test('Swag Lab Login Test with Special Locators', async ({page}) => {
    // Test flow:
    // 1. Open the Swag Labs login page
    // 2. Log in as standard_user
    // 3. Verify products page is displayed
    // 4. Find and add the target product to the cart
    // 5. Open the cart and verify the product is present
    // 6. Checkout with user information
    // 7. Complete the order and verify success message
    // 8. Log out and verify the login button is visible again

    const productName = "Sauce Labs Bolt T-Shirt";
    const products = page.locator(".inventory_item_description")

    // Navigate to the login page
    await page.goto("https://www.saucedemo.com/");

    // Perform login
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:"Login"}).click();
    

    // Verify landing on the products page
    await expect(page.locator(".title")).toHaveText("Products");

    // Add the desired product to the cart
    await page.locator(".inventory_item_description").filter({hasText: productName}).getByRole("button", {name: "Add to cart"}).click();

    // Open the shopping cart
    await page.locator(".shopping_cart_badge").click();

    // Verify the selected product is in the cart
    const bool = await page.locator(".inventory_item_name:has-text('Sauce Labs Bolt T-Shirt')").isVisible();
    expect(bool).toBeTruthy();
    
    // Proceed through checkout
    await page.getByRole("button", {name:"Checkout"}).click();

    await expect(page.locator(".title")).toHaveText("Checkout: Your Information");
    await page.getByPlaceholder("First Name").fill("Santosh");
    await page.getByPlaceholder("Last Name").fill("Mitkari");
    await page.getByPlaceholder("Zip/Postal Code").fill("443304");
    await page.getByRole("button", {name:"Continue"}).click();
    await expect(page.locator(".title")).toHaveText("Checkout: Overview");
    await page.getByRole("button", {name:"Finish"}).click();
    await expect(page.locator(".title")).toHaveText("Checkout: Complete!");

    // Verify order completion
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");

    // Log out and confirm return to the login page
    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();
    await expect(page.locator("#login-button")).toBeVisible();


})