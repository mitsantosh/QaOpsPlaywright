const {test, expect} = require('@playwright/test')

test('Swag Lab Login Test', async ({page}) => {
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
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator(".submit-button").click();

    // Verify landing on the products page
    await expect(page.locator(".title")).toHaveText("Products");

    // Add the desired product to the cart
        const count = await products.count();
    console.log("Total products: " + count);
    for (let i = 0; i < count; i++) {
        if (await products.nth(i).locator(".inventory_item_name").textContent() === productName) {
            await products.nth(i).locator("text=Add to cart").click();
            break;
        }
    }



    // Open the shopping cart
    await page.locator(".shopping_cart_badge").click();

    // Verify the selected product is in the cart
    const bool = await page.locator(".inventory_item_name:has-text('Sauce Labs Bolt T-Shirt')").isVisible();
    expect(bool).toBeTruthy();

    // Proceed through checkout
    await page.locator("#checkout").click();
    await expect(page.locator(".title")).toHaveText("Checkout: Your Information");
    await page.locator("#first-name").fill("Santosh");
    await page.locator("#last-name").fill("Mitkari");
    await page.locator("#postal-code").fill("443304");
    await page.locator("#continue").click();
    await expect(page.locator(".title")).toHaveText("Checkout: Overview");
    await page.locator("#finish").click();

    // Verify order completion
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");

    // Log out and confirm return to the login page
    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();
    await expect(page.locator("#login-button")).toBeVisible();

})