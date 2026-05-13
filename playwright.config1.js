// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries : 1,
  workers: 1,
  timeout: 40 * 1000,
  expect: {
    timeout: 10000,
  },
  reporter: 'html',

  projects : [
    {name : 'safari',
    use: {
  browserName: 'webkit',
  headless: false, 
  screenshot: 'retain-on-failure',
  trace: 'retain-on-failure',
...devices['iPhone 11']
  }
  },

{name : 'chrome',
    use: {
  browserName: 'chromium',
  headless: false, 
  screenshot: 'retain-on-failure',
  video:"retain-on-failure",
  trace: 'retain-on-failure',
  ignoreHttpsErrors:true,
  permissions:['geolocation']
 // viewport: {width:720,height:720}
    }
  }
  ]
})

module.exports = config;

