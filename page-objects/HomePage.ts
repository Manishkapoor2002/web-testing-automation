import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly resultsHeader: Locator;
  readonly productCards: Locator;
  readonly productImages: Locator;
  readonly productNames: Locator;
  readonly addToCartButtons: Locator;
  readonly viewProductLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder="Search Products"], #search_product');
    this.searchButton = page.locator('#submit_search');
    this.resultsHeader = page.locator('h2.title');
    this.productCards = page.locator('.features_items .product-image-wrapper');
    this.productImages = page.locator('.features_items .product-image-wrapper img');
    this.productNames = page.locator('.features_items .product-image-wrapper .productinfo p, .features_items .product-image-wrapper .productinfo h2');
    this.addToCartButtons = page.locator('.features_items .product-image-wrapper .productinfo a[data-product-id], .features_items .product-image-wrapper .product-overlay a[data-product-id]');
    this.viewProductLinks = page.locator('.features_items .product-image-wrapper .choose a');
  }

  async goto(baseURL?: string) {
    await this.page.goto(baseURL ?? '/');
  }

  async search(query: string) {
    await this.searchInput.click();
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async searchWithEnter(query: string) {
    await this.searchInput.click();
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }

  async expectSearchedProductsHeader() {
    await expect(this.resultsHeader).toBeVisible();
    await expect(this.resultsHeader).toHaveText(/SEARCHED PRODUCTS/i);
  }
}
