import { Page } from '@playwright/test';

export class AlertsPage {
  constructor(private page: Page) {}

  async clickSimpleAlert() {
    await this.page.click('#simpleAlertButton');
  }

  async clickConfirmAlert() {
    await this.page.click('#confirmAlertButton');
  }

  async clickPromptAlert() {
    await this.page.click('#promptAlertButton');
  }
}