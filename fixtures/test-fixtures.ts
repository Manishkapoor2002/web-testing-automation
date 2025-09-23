import { test as base, APIRequestContext, expect } from '@playwright/test';
import { getApiBaseUrl } from '../config/env';

const ENV = process.env.ENV || process.env.NODE_ENV || 'local';

export type Fixtures = {
  apiContext: APIRequestContext;
};

export const test = base.extend<Fixtures>({
  apiContext: async ({ playwright }, use) => {
    const apiBaseURL = process.env.API_BASE_URL || getApiBaseUrl(ENV);
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    const token = process.env.API_TOKEN;
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const request = await playwright.request.newContext({ baseURL: apiBaseURL, extraHTTPHeaders: headers });
    await use(request);
    await request.dispose();
  }
});

export { expect };
