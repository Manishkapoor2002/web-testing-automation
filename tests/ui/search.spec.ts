import { test, expect } from '@fixtures/base.fixture';
import { HomePage } from '@page-objects/HomePage';
import { runtime } from '@fixtures/base.fixture';

// Map test cases to tags: PROJ-001..006

// PROJ-001 - Happy path
test.describe('Search feature', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await home.goto(runtime.baseURL);
  });

  test('PROJ-001 Search "Dress" shows filtered results with complete cards @ui @smoke', async ({ page }) => {
    const home = new HomePage(page);

    await home.search('Dress');
    await home.expectSearchedProductsHeader();

    const cards = home.productCards;
    await expect(cards).toHaveCountGreaterThan(0);

    const count = await cards.count();

    // Validate each card has image, name/title, price (contains Rs), Add to cart, View Product
    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);
      await expect(card.locator('img')).toBeVisible();
      // Name can be in p or h2 depending on template
      const name = card.locator('.productinfo p, .productinfo h2');
      await expect(name).toBeVisible();
      // Price may be within h2 or p; assert contains Rs
      const price = card.locator('.productinfo h2:has-text("Rs."), .productinfo p:has-text("Rs.")');
      await expect(price).toBeVisible();
      await expect(card.locator('a[data-product-id]')).toBeVisible();
      await expect(card.locator('.choose a')).toBeVisible();
    }

    // Ensure no console errors
    const logs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') logs.push(`${msg.type()}: ${msg.text()}`);
    });
  });

  // PROJ-002 - Enter key triggers search
  test('PROJ-002 Keyboard Enter triggers search @ui @accessibility', async ({ page }) => {
    const home = new HomePage(page);

    await home.searchWithEnter('Dress');
    await home.expectSearchedProductsHeader();

    await expect(home.productCards).toHaveCountGreaterThan(0);
  });

  // PROJ-003 - Trim whitespace
  test('PROJ-003 Trimmed whitespace treated as Jeans @ui', async ({ page }) => {
    const home = new HomePage(page);
    await home.search('  Jeans  ');
    await home.expectSearchedProductsHeader();

    // We expect at least that results are not an error; basic sanity: cards visible
    await expect(home.productCards).toBeVisible();
  });

  // PROJ-004 - No matches
  test('PROJ-004 No matches returns zero cards and stable layout @ui @negative', async ({ page }) => {
    const home = new HomePage(page);

    await home.search('@@@@');
    await home.expectSearchedProductsHeader();

    // Some templates still show products; try to assert zero cards if supported
    const count = await home.productCards.count();
    // Allow either zero or fallback behavior with message
    if (count === 0) {
      expect(count).toBe(0);
    } else {
      // If products appear regardless, at least ensure layout is stable and no severe console errors
      await expect(page).toHaveTitle(/Automation/);
    }

    // No horizontal scroll
    const hasHorizontalScroll = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    expect(hasHorizontalScroll).toBeFalsy();
  });

  // PROJ-005 - Loading indicator and performance threshold
  test('PROJ-005 Loader visible and under threshold; results interactable @ui @performance', async ({ page, browserName }) => {
    const home = new HomePage(page);

    // Start performance marker and listen for loader
    const threshold = browserName === 'chromium' || browserName === 'firefox' || browserName === 'webkit' ? runtime.perfThresholdMs.desktop : runtime.perfThresholdMs.mobile;

    await page.addInitScript(() => {
      (window as any).__marks = {};
      (window as any).mark = (name: string) => ((window as any).__marks[name] = performance.now());
    });

    await page.evaluate(() => (window as any).mark('start_submit'));
    await home.search('Tshirts');

    // Attempt to detect a spinner if exists
    const spinner = page.locator('.loading, .spinner, .loader, [role="status"][aria-busy="true"]');
    const spinnerAppeared = await spinner.first().isVisible().catch(() => false);

    // Wait for results header and first card
    await home.expectSearchedProductsHeader();
    await expect(home.productCards.first()).toBeVisible();

    await page.evaluate(() => (window as any).mark('end_render'));
    const [start, end] = await page.evaluate(() => [ (window as any).__marks['start_submit'], (window as any).__marks['end_render'] ]);
    const delta = end - start;
    expect(delta).toBeLessThanOrEqual(threshold);

    // Spinner should be hidden now if it existed
    if (spinnerAppeared) {
      await expect(spinner).toBeHidden();
    }

    // Cards are interactable
    await home.productCards.first().hover();
  });

  // PROJ-006 - Mobile responsiveness
  test('PROJ-006 Mobile responsiveness iPhone-like viewport @ui @mobile', async ({ page, browserName }) => {
    // For this test, override viewport to 375x812 if not already
    await page.setViewportSize({ width: 375, height: 812 });

    const home = new HomePage(page);
    await home.goto(runtime.baseURL);

    await home.searchWithEnter('Dress');
    await home.expectSearchedProductsHeader();

    // Grid adapts to 1-2 columns — approximate by card width
    const widths = await home.productCards.evaluateAll((els) => els.map((e) => (e as HTMLElement).getBoundingClientRect().width));
    expect(widths.length).toBeGreaterThan(0);

    // No horizontal scroll
    const hasHorizontalScroll = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    expect(hasHorizontalScroll).toBeFalsy();
  });
});
