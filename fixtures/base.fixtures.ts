import { test as base, APIRequestContext, request } from '@playwright/test';
import { loadEnv } from '../config/env';

export type Fixtures = {
  apiContext: APIRequestContext;
};

export const test = base.extend<Fixtures>({
  apiContext: async ({}, use) => {
    const env = loadEnv();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (env.apiToken) headers['Authorization'] = `Bearer ${env.apiToken}`;

    const ctx = await request.newContext({
      baseURL: env.apiBaseUrl,
      extraHTTPHeaders: headers,
    });
    await use(ctx);
    await ctx.dispose();
  },
});

export const expect = test.expect;
