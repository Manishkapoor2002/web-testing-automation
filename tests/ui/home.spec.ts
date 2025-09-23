import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';

// @testCaseId:UI-001
// Validate homepage loads and header is visible

test.describe('@ui @smoke Home page', () => {
  test('UI-001: should load homepage and show header', async ({ page, baseURL }) => {
    const home = new HomePage(page);
    await home.open();
    await home.expectHeaderVisible();
    await expect(page).toHaveURL(new RegExp(`^${baseURL?.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') || ''}`));
  });
});
