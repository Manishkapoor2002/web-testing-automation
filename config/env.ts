export function getBaseUrl(env: string): string {
  const map: Record<string, string> = {
    local: process.env.BASE_URL || 'http://localhost:3000',
    dev: process.env.BASE_URL || 'https://dev.example.com',
    qa: process.env.BASE_URL || 'https://qa.example.com',
    staging: process.env.BASE_URL || 'https://staging.example.com',
    prod: process.env.BASE_URL || 'https://example.com'
  };
  return map[env] || map.local;
}

export function getApiBaseUrl(env: string): string {
  const map: Record<string, string> = {
    local: process.env.API_BASE_URL || 'http://localhost:3001',
    dev: process.env.API_BASE_URL || 'https://api.dev.example.com',
    qa: process.env.API_BASE_URL || 'https://api.qa.example.com',
    staging: process.env.API_BASE_URL || 'https://api.staging.example.com',
    prod: process.env.API_BASE_URL || 'https://api.example.com'
  };
  return map[env] || map.local;
}
