// productPage.ts
import { Page } from "@playwright/test";

class ProductPage {
  readonly page: Page;
  readonly addToCartButton: string;
  readonly goToCartLink: string;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = "#add-to-cart-button";
    this.goToCartLink = "#sw-gtc a"; // Updated selector to be more specific if needed
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async addToCart() {
    await this.page.locator(this.addToCartButton).click();
  }

  async goToCart() {
    await this.page.locator(this.goToCartLink).click();
  }
}
export default ProductPage;
``;
