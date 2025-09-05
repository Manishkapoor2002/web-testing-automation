import { Page } from '@playwright/test';

export class EpamHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.epam.com/');
  }

  async selectServices() {
    await this.page.locator('text=Services').click();
  }

  async clickExploreClientWork() {
    await this.page.locator('text=Learn More').click();
  }
}