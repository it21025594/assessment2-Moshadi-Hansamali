import { test, expect, Page } from '@playwright/test';

const URL = "https://onlinelibrary.wiley.com/action/doLogin?societyURLCode=";

test.only('Verify the user login process on onlinelibrary.wiley.com ', async ({ page }: { page: Page }) => {
  
  await page.goto(URL);

  
  await page.fill('input[name="login"]', 'wijesooriyamoshadi@gmail.com');
  await page.fill('input[name="password"]', 'Moshadi@12');
  
  await page.waitForLoadState('load');
  await page.waitForSelector('button[type="Log In"]');
  await page.click('button[type="Log In"]', {timeout:5000});

  
  await page.waitForNavigation();

  
  expect(page.url()).toBe(302);

  
  
});

