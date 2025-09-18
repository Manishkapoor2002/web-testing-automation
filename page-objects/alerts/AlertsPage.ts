import { Page, Locator, expect } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;
  readonly triggerAlertBtn: Locator;
  readonly triggerConfirmBtn: Locator;
  readonly triggerPromptBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.triggerAlertBtn = page.locator('text=Click for JS Alert, Click Me or try the button!');
    this.triggerConfirmBtn = page.locator('text=Click for JS Confirm');
    this.triggerPromptBtn = page.locator('text=Click for JS Prompt');
  }

  async goto(baseURL: string) {
    await this.page.goto(`${baseURL}/alerts`);
    await expect(this.page).toHaveTitle(/Alerts/i);
  }

  async triggerAlertAndAccept() {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('alert');
      await dialog.accept();
    });
    await this.page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await this.page.getByText('OK').isVisible().catch(() => {});
  }

  async triggerConfirmAndAccept() {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('confirm');
      await dialog.accept();
    });
    await this.page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  }

  async triggerConfirmAndDismiss() {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('confirm');
      await dialog.dismiss();
    });
    await this.page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  }

  async triggerPromptAndType(text: string) {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept(text);
    });
    await this.page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  }
}
