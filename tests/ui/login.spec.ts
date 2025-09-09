import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('User Authentication', () => {
  test('Successful Login with Valid Credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('valid_user', 'valid_pass');
    await expect(page).toHaveURL(/.*feed/);
  });

  test('Login Failure with Invalid Credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user', 'invalid_pass');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBe('The username or password you entered is incorrect.');
  });
});
