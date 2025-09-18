import { test, expect } from '@playwright/test';
import { AlertsPage } from '../../page-objects/alerts/AlertsPage';
import { loadEnv } from '../../config/env';

// Tags: @ui @alerts
// Test Cases mapping:
// TC-ALERT-001: Verify JS Alert opens and can be accepted
// TC-ALERT-002: Verify JS Confirm accepted path
// TC-ALERT-003: Verify JS Confirm dismissed path
// TC-ALERT-004: Verify JS Prompt accepts text input

const env = loadEnv();

test.describe('Alert Functionality', () => {
  test.beforeEach(async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.goto(env.uiBaseUrl);
  });

  test('TC-ALERT-001 | JS Alert opens and accept @ui @alerts @smoke', async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.triggerAlertAndAccept();
    // No direct UI result on page for this demo site; ensure no error/exception occurred.
    await expect(page).toHaveURL(/.*alerts/);
  });

  test('TC-ALERT-002 | JS Confirm accept @ui @alerts', async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.triggerConfirmAndAccept();
    await expect(page).toHaveURL(/.*alerts/);
  });

  test('TC-ALERT-003 | JS Confirm dismiss @ui @alerts', async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.triggerConfirmAndDismiss();
    await expect(page).toHaveURL(/.*alerts/);
  });

  test('TC-ALERT-004 | JS Prompt enter text @ui @alerts', async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.triggerPromptAndType('Playwright');
    await expect(page).toHaveURL(/.*alerts/);
  });
});
