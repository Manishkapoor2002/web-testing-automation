import { Page } from 'playwright';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/accounts/login/');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async getErrorMessage() {
    return await this.page.locator('.error-message').innerText();
  }
}
