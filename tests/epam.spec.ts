import { test, expect } from '@playwright/test';
import { EpamPage } from './pages/EpamPage';

test.describe('EPAM Website Tests', () => {
  let epamPage: EpamPage;

  test.beforeEach(async ({ page }) => {
    epamPage = new EpamPage(page);
  });

  test('Navigate to Client Work page', async () => {
    // Navigate to the EPAM homepage
    await epamPage.navigateToHomepage();

    // Click on the Services menu
    await epamPage.clickServicesMenu();

    // Click on the "Explore Our Client Work" link
    await epamPage.clickExploreClientWork();

    // Verify that the "Client Work" text is visible on the page
    const isClientWorkVisible = await epamPage.isClientWorkTextVisible();
    expect(isClientWorkVisible).toBe(true, 'Client Work text should be visible on the page');
  });
});