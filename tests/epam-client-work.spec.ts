import { test, expect } from '@playwright/test';
import { EpamPage } from './pages/EpamPage';

test.describe('EPAM Client Work Test', () => {
  let epamPage: EpamPage;

  test.beforeEach(async ({ page }) => {
    epamPage = new EpamPage(page);
  });

  test('Navigate to Client Work page and verify content', async () => {
    // Navigate to EPAM website
    await epamPage.navigateTo();

    // Select "Services" from the header menu
    await epamPage.clickServicesMenuItem();

    // Click the "Explore Our Client Work" link
    await epamPage.clickExploreClientWorkLink();

    // Verify that the "Client Work" text is visible on the page
    const isClientWorkTextVisible = await epamPage.isClientWorkTextVisible();
    expect(isClientWorkTextVisible).toBe(true, 'Client Work text should be visible on the page');
  });

  test('Verify navigation to Client Work page from homepage', async () => {
    // Navigate to EPAM website
    await epamPage.navigateTo();

    // Verify that the "Explore Our Client Work" link is visible on the homepage
    const isExploreClientWorkLinkVisible = await epamPage.exploreClientWorkLink.isVisible();
    expect(isExploreClientWorkLinkVisible).toBe(true, 'Explore Our Client Work link should be visible on the homepage');

    // Click the "Explore Our Client Work" link
    await epamPage.clickExploreClientWorkLink();

    // Verify that the "Client Work" text is visible on the page
    const isClientWorkTextVisible = await epamPage.isClientWorkTextVisible();
    expect(isClientWorkTextVisible).toBe(true, 'Client Work text should be visible on the page');
  });
});