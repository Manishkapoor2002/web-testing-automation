import base from '../playwright.config';

export default {
  ...base,
  use: {
    ...base.use,
    baseURL: process.env.BASE_URL || 'https://qa.example.com'
  }
};
