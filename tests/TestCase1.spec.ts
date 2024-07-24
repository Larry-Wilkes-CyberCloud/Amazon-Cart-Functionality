import { test, expect } from "@playwright/test";

test("Test Case 1: Verify Cart is Empty", async ({ page }) => {
  // Navigate to the product page
  await page.goto("https://www.amazon.com/OtterBox-COMMUTER-iPhone-14-13/dp/B0B7C9SPSF");

  // Click on the 'Add to Cart' button
  await page.locator("#add-to-cart-button").click();

  // Navigate to the cart page by clicking on the 'Go to Cart' link
  await page.locator("#sw-gtc").getByRole("link", { name: "Go to Cart" }).click();

  // Verify if the cart page is active
  await page.locator("#sc-active-cart").click();

  // Confirm the total price in the cart
  await page.locator("#activeCartViewForm").getByRole("list").getByText("$").click(); // Specify the expected total price

  // Check the subtotal amount in the cart
  await page.locator("#sc-subtotal-amount-activecart").getByText("$").click(); // Specify the expected subtotal price

  // Click on 'Delete' to remove the item from the cart
  await page.getByLabel("Delete OtterBox COMMUTER").click();

  // Verify the heading to confirm the cart is empty
  await page.getByRole("heading", { name: "Your Amazon Cart is empty." }).click();

  // Confirm that the total price is now $0.00
  await page.getByText("$0.00").click();
});
