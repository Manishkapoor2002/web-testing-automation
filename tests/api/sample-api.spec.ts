import { test, expect } from '@fixtures/base.fixture';
import { runtime } from '@fixtures/base.fixture';

// Example API test using env-driven baseURL; replace endpoints accordingly

test.describe('API smoke', () => {
  test('GET homepage returns HTML @api', async ({ request }) => {
    const res = await request.get(runtime.baseURL);
    expect(res.ok()).toBeTruthy();
    const ctype = res.headers()['content-type'] || '';
    expect(ctype).toContain('text/html');
  });
});
