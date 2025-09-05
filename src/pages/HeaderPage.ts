import { Page } from '@playwright/test';

export class HeaderPage {
  constructor(private page: Page) {}

  async selectServices() {
    await this.page.hover('header >> text=Services');
  }

  async clickExploreOurClientWork() {
    await this.page.click('header >> text=Explore Our Client Work');
  }
}
