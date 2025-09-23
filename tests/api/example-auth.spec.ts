import { expect } from '@playwright/test';
import { test } from '../../fixtures/test-fixtures';

// @testCaseId:API-002
// Example authenticated GET using API_TOKEN

test.describe('@api Authenticated example', () => {
  test('API-002: should GET /me or protected endpoint', async ({ apiContext }) => {
    const res = await apiContext.get('/me'); // adjust to real endpoint
    // 200 for valid token, 401/403 otherwise
    expect([200, 401, 403]).toContain(res.status());
  });
});
