import { test, expect } from "@playwright/test";

test("Test Case 3: Verify Cart Retention", async ({ page, browserName }) => {
  // Navigate to the product page
  await page.goto("https://www.amazon.com/OtterBox-COMMUTER-iPhone-14-13/dp/B0B7C9SPSF");

  // Click on the 'Add to Cart' button
  await page.locator("#add-to-cart-button").click();

  // Navigate to the cart by clicking the 'Go to Cart' link
  await page.locator("#sw-gtc").getByRole("link", { name: "Go to Cart" }).click();

  // Ensure the cart page is loaded by checking for the 'Shopping Cart' heading
  await page.getByRole("heading", { name: "Shopping Cart" }).click();

  // Verify the price of the item in the cart
  await page.locator("#sc-subtotal-amount-activecart").getByText("$35.37").click();

  // Reload the cart page to simulate a user refreshing the page
  await page.goto("https://www.amazon.com/cart?ref_=sw_gtc");

  // Confirm the 'Shopping Cart' heading is still visible after the reload
  await page.getByRole("heading", { name: "Shopping Cart" }).click();

  // Check the price again to ensure it remains the same after the page reload
  await page.locator("#sc-subtotal-amount-activecart").getByText("$35.37").click();
});
