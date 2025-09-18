export type Environment = 'dev' | 'qa' | 'stg' | 'prod';

export interface EnvConfig {
  name: Environment;
  uiBaseUrl: string;
  apiBaseUrl: string;
  apiToken?: string;
}

export const loadEnv = (): EnvConfig => {
  const uiBaseUrl = process.env.UI_BASE_URL || 'http://uitestingplayground.com';
  const apiBaseUrl = process.env.API_BASE_URL || 'https://httpbin.org';
  const apiToken = process.env.API_TOKEN || '';
  const name = (process.env.ENV as Environment) || 'dev';
  return { name, uiBaseUrl, apiBaseUrl, apiToken };
};
