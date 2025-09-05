import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto('https://www.epam.com/');
  }

  async clickServicesMenu() {
    await this.page.click('text=Services');
  }

  async clickExploreClientWork() {
    await this.page.click('text=Explore Our Client Work');
  }

  async isClientWorkTextVisible() {
    return await this.page.isVisible('text=Client Work');
  }
}