import { Page } from '@playwright/test';

export class ClientWorkPage {
  constructor(private page: Page) {}

  async isClientWorkHeadingVisible() {
    return this.page.isVisible('h1 >> text=Client Work');
  }
}
