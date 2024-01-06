import { test, expect, Page } from '@playwright/test';

const RegistrationURL = "https://onlinelibrary.wiley.com/action/registration?acdl-redirect=true";

test ('Verify the user registration process on onlinelibrary.wiley.com', async ({ page }: { page: Page }) => {
  
  await page.goto(RegistrationURL);

  
  await page.fill('input[name="email"]', 'example@email.com');
  await page.fill('input[name="password"]', 'StrongPassword@123');

  await page.fill('input[name="firstName"]', 'Moshadi');
  await page.fill('input[name="lastName"]', 'Hansamali');

  await page.check('input[name="terms"]');

  await page.click('button[type="Register"]');

  await page.waitForNavigation();

  expect(page.url()).toContain(200);

  
});
