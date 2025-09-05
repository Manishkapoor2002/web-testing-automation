import { Page } from '@playwright/test';

export class ClientWorkPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyClientWorkText() {
    await expect(this.page.locator('text=Client Work')).toBeVisible();
  }
}