import { expect } from '@playwright/test';
import { test } from '../../fixtures/base.fixtures';
import { loadEnv } from '../../config/env';

// Tags: @api
// TC-API-001: Verify GET /get returns 200 and echoes query params
// TC-API-002: Verify POST /post returns 200 and echoes body

const env = loadEnv();

 test.describe('Sample API tests', () => {
  test('TC-API-001 | GET returns 200 and query @api', async ({ apiContext }) => {
    const res = await apiContext.get('/get', { params: { hello: 'world' } });
    expect(res.ok()).toBeTruthy();
    const json = await res.json();
    expect(json.args.hello).toBe('world');
  });

  test('TC-API-002 | POST returns 200 and echoes body @api', async ({ apiContext }) => {
    const payload = { foo: 'bar' };
    const res = await apiContext.post('/post', { data: payload });
    expect(res.ok()).toBeTruthy();
    const json = await res.json();
    expect(json.json).toEqual(payload);
  });
});
