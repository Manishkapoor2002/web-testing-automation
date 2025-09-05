import { test, expect } from '@playwright/test';
import { EpamHomePage } from './pages/EpamHomePage';

test.describe('EPAM Services Navigation', () => {
  let epamHomePage: EpamHomePage;

  test.beforeEach(async ({ page }) => {
    epamHomePage = new EpamHomePage(page);
  });

  test('Navigate to Client Work page', async () => {
    // Navigate to EPAM homepage
    await epamHomePage.navigateTo();

    // Click on Services menu
    await epamHomePage.clickServicesMenu();

    // Click on Explore Our Client Work link
    await epamHomePage.clickExploreClientWork();

    // Verify that the "Client Work" text is visible on the page
    const isClientWorkVisible = await epamHomePage.isClientWorkTextVisible();
    expect(isClientWorkVisible).toBe(true, 'Client Work text should be visible on the page');
  });
});