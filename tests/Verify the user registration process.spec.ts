import { test, expect, Page } from '@playwright/test';
//url for the registration page
const RegistrationURL = "https://onlinelibrary.wiley.com/action/registration?acdl-redirect=true";

test ('Verify the user registration process on onlinelibrary.wiley.com', async ({ page }: { page: Page }) => {
  //navigate to the registration page
  await page.goto(RegistrationURL);

  //fill in the user details
  await page.fill('input[name="email"]', 'example@email.com');
  await page.fill('input[name="password"]', 'StrongPassword@123');

  await page.fill('input[name="firstName"]', 'Moshadi');
  await page.fill('input[name="lastName"]', 'Hansamali');

  //accept the terms and conditions
  await page.check('input[name="terms"]');

  //click the register button
  await page.click('button[type="Register"]');

  //wait for the navigation to complete after successful registration 
  await page.waitForNavigation();

  expect(page.url()).toContain(200);

  
});
