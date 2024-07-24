import { test, expect } from "@playwright/test";

test("Test Case 2: Add product to cart, change quantity, and verify total price updates", async ({
  page,
}) => {
  // Navigate to the product page
  await page.goto("https://www.amazon.com/OtterBox-COMMUTER-iPhone-14-13/dp/B0B7C9SPSF");

  // Add the product to the cart
  await page.locator("#add-to-cart-button").click();

  // Navigate to the cart page
  await page.locator("#sw-gtc").getByRole("link", { name: "Go to Cart" }).click();

  // Verify the initial price in the cart
  const initialPriceLocator = page
    .locator("#activeCartViewForm")
    .getByRole("list")
    .getByText("$35.29");
  await initialPriceLocator.click();
  await expect(initialPriceLocator).toBeVisible();

  const initialSubtotalLocator = page.locator("#sc-subtotal-amount-activecart").getByText("$35.29");
  await expect(initialSubtotalLocator).toBeVisible();

  // Change the quantity of the product
  await page.getByText("Qty:1").click();
  await page.getByLabel("2", { exact: true }).getByText("2").click();

  // Verify the updated price in the cart
  const updatedSubtotalLocator = page.locator("#sc-subtotal-amount-activecart").getByText("$70.58");
  await expect(updatedSubtotalLocator).toBeVisible();
});
