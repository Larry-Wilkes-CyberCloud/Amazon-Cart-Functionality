// amazonPage.ts
import { Page, expect } from "@playwright/test";

class AmazonPage {
  private readonly page: Page;
  private readonly addToCartButton: string = "#add-to-cart-button";
  private readonly goToCartLink: string = "text=Cart";
  private readonly cartHeader: string = "h1";
  private readonly subtotalText: string = "#sc-active-cart #subtotal-text";
  private readonly deleteItemButton: string = "text=Delete";
  private readonly emptyCartMessage: string = "#sc-subtotal-amount-activecart";

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProductPage(url: string) {
    await this.page.goto(url);
  }

  async addToCart() {
    await this.page.locator(this.addToCartButton).click();
  }

  async navigateToCart() {
    await this.page.locator(this.goToCartLink).click();
  }

  async confirmCartHeader(expectedHeader: string) {
    await expect(this.page.locator(this.cartHeader)).toHaveText(expectedHeader);
  }

  async verifyItemInCart(expectedPrice: string) {
    await expect(this.page.locator(this.subtotalText)).toHaveText(expectedPrice);
  }

  async removeItemFromCart() {
    await this.page.locator(this.deleteItemButton).first().click();
  }

  async verifyCartIsEmpty() {
    await expect(this.page.locator(this.cartHeader)).toHaveText("Your Amazon Cart is empty");
    await expect(this.page.locator(this.emptyCartMessage)).toHaveText("$0.00");
  }
}

export default AmazonPage;
