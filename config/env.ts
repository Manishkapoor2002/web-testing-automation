export type TestEnv = 'local' | 'dev' | 'qa' | 'stage' | 'prod';

export interface RuntimeConfig {
  env: TestEnv;
  baseURL: string;
  apiBaseURL: string;
  perfThresholdMs: { desktop: number; mobile: number };
}

export const getConfig = (): RuntimeConfig => {
  const env = (process.env.ENV as TestEnv) || 'local';
  const baseURL = process.env.BASE_URL || 'https://automationexercise.com';
  const apiBaseURL = process.env.API_BASE_URL || baseURL;
  const perfThresholdMs = {
    desktop: Number(process.env.PERF_THRESHOLD_DESKTOP_MS || 2000),
    mobile: Number(process.env.PERF_THRESHOLD_MOBILE_MS || 4000)
  };

  return { env, baseURL, apiBaseURL, perfThresholdMs };
};
