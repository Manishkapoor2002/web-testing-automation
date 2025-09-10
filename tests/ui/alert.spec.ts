import { test, expect } from '@playwright/test';
import { AlertsPage } from '../src/pages/AlertsPage';

let alertsPage: AlertsPage;

test.beforeEach(async ({ page }) => {
  alertsPage = new AlertsPage(page);
  await page.goto('/alerts');
});

test('Verify Simple Alert Pop-up Functionality', async () => {
  await alertsPage.clickSimpleAlert();
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('This is a simple alert.');
    await dialog.accept();
  });
});

test('Confirm Alert Accept Action', async () => {
  await alertsPage.clickConfirmAlert();
  page.on('dialog', async dialog => {
    await dialog.accept();
  });
  const successMessage = await page.locator('text=You selected OK.');
  await expect(successMessage).toBeVisible();
});

test('Confirm Alert Dismiss Action', async () => {
  await alertsPage.clickConfirmAlert();
  page.on('dialog', async dialog => {
    await dialog.dismiss();
  });
  const cancelMessage = await page.locator('text=You selected Cancel.');
  await expect(cancelMessage).toBeVisible();
});

test('Validate Prompt Alert with User Input', async () => {
  await alertsPage.clickPromptAlert();
  page.on('dialog', async dialog => {
    await dialog.accept('Test Input');
  });
  const inputMessage = await page.locator('text=You entered Test Input.');
  await expect(inputMessage).toBeVisible();
});

test('Validate Prompt Alert without Input', async () => {
  await alertsPage.clickPromptAlert();
  page.on('dialog', async dialog => {
    await dialog.dismiss();
  });
  const nullMessage = await page.locator('text=You entered null.');
  await expect(nullMessage).toBeVisible();
});