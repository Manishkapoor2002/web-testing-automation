import { Page, Locator } from '@playwright/test';

export class EpamPage {
  readonly page: Page;
  readonly servicesMenuItem: Locator;
  readonly exploreClientWorkLink: Locator;
  readonly clientWorkText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.servicesMenuItem = page.locator('header a:text("Services")');
    this.exploreClientWorkLink = page.locator('a:text("Explore Our Client Work")');
    this.clientWorkText = page.locator('text="Client Work"');
  }

  async navigateTo() {
    await this.page.goto('https://www.epam.com/');
  }

  async clickServicesMenuItem() {
    await this.servicesMenuItem.click();
  }

  async clickExploreClientWorkLink() {
    await this.exploreClientWorkLink.click();
  }

  async isClientWorkTextVisible() {
    return await this.clientWorkText.isVisible();
  }
}