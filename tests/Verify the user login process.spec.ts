import { test, expect, Page } from '@playwright/test';

//Url
const URL = "https://onlinelibrary.wiley.com/action/doLogin?societyURLCode=";

test.only('Verify the user login process on onlinelibrary.wiley.com ', async ({ page }: { page: Page }) => {
  //navigate to the login page
  await page.goto(URL, { waitUntil: 'domcontentloaded' );

  //fill in the login credentials
  await page.fill('input[name="login"]', 'wijesooriyamoshadi@gmail.com');
  await page.fill('input[name="password"]', 'Moshadi@12');

  //wait for the page to load abd button to be available
  await page.waitForLoadState('load');
  await page.waitForSelector('button[type="Log In"]');
 
  //click the login button
  await page.click('button[type="Log In"]', {timeout:5000});

  //wait for the navigatr to complete
  await page.waitForNavigation();

  //verify that the url after login is as expected
  expect(page.url()).toBe(302);

  
  
});

