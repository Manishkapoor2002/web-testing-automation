import { test, expect } from '@playwright/test';
import { EpamHomePage } from './pageObjects/EpamHomePage';
import { ClientWorkPage } from './pageObjects/ClientWorkPage';

test('Navigate to Client Work page and verify content', async ({ page }) => {
  const epamHomePage = new EpamHomePage(page);
  const clientWorkPage = new ClientWorkPage(page);

  // Navigate to EPAM homepage
  await epamHomePage.goto();

  // Select "Services" from the header menu
  await epamHomePage.selectServices();

  // Click the "Explore Our Client Work" link
  await epamHomePage.clickExploreClientWork();

  // Verify that the "Client Work" text is visible on the page
  await clientWorkPage.verifyClientWorkText();
});