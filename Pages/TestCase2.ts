import { Page, expect } from "@playwright/test";

class CartPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProductPage() {
    await this.page.goto("https://www.amazon.com/OtterBox-COMMUTER-iPhone-14-13/dp/B0B7C9SPSF");
  }

  async addToCart() {
    await this.page.locator("#add-to-cart-button").click();
  }

  async goToCart() {
    await this.page.locator("text=Cart").click();
  }

  async verifyCartHeader(expectedHeader: string) {
    await expect(this.page.locator("h1")).toHaveText(expectedHeader);
  }

  async verifySubtotal(expectedPrice: string) {
    await expect(this.page.locator("#sc-active-cart #subtotal-text")).toHaveText(expectedPrice);
  }

  async removeFirstItemFromCart() {
    await this.page.locator("text=Delete").first().click();
  }

  async verifyCartIsEmpty() {
    await this.page.waitForSelector("h1"); // Ensure cart updates are reflected
    await expect(this.page.locator("h1")).toHaveText("Your Amazon Cart is empty");
    await expect(this.page.locator("#sc-subtotal-amount-activecart")).toHaveText("$0.00");
  }
}

export default CartPage;
