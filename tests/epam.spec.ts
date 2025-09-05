import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('EPAM Website Navigation', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('Navigate to Client Work page', async () => {
    // Navigate to EPAM homepage
    await homePage.navigateTo();

    // Click on Services menu
    await homePage.clickServicesMenu();

    // Click on Explore Our Client Work link
    await homePage.clickExploreClientWork();

    // Verify that Client Work text is visible
    const isClientWorkVisible = await homePage.isClientWorkTextVisible();
    expect(isClientWorkVisible).toBe(true, 'Client Work text should be visible on the page');
  });
});