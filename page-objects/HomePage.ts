import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly header = this.page.locator('header');
  readonly navLinks = this.page.locator('nav a');
  readonly searchInput = this.page.locator('input[type="search"], [data-test="search"]');

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/');
  }

  async search(term: string) {
    if (await this.searchInput.count()) {
      await this.searchInput.fill(term);
      await this.searchInput.press('Enter');
    }
  }

  async expectHeaderVisible() {
    await expect(this.header).toBeVisible();
  }
}
