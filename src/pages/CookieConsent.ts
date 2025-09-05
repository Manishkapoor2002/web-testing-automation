import { Page } from '@playwright/test';

export class CookieConsent {
  constructor(private page: Page) {}

  async acceptCookies() {
    const acceptButton = await this.page.$('button >> text=Accept');
    if (acceptButton) {
      await acceptButton.click();
    }
  }
}
