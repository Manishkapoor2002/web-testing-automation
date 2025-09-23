import base from '../playwright.config';

export default {
  ...base,
  use: {
    ...base.use,
    baseURL: process.env.BASE_URL || 'https://staging.example.com'
  }
};
