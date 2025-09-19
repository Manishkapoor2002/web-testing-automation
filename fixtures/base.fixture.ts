import { test as base, expect, APIRequestContext } from '@playwright/test';
import { getConfig } from '@config/env';

export type TestFixtures = {
  api: APIRequestContext;
};

export const test = base.extend<TestFixtures>({
  api: async ({ request }, use) => {
    // Use Playwright's built-in request context with headers from config
    await use(request);
  }
});

export { expect };
export const runtime = getConfig();
