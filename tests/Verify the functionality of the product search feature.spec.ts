import { test, expect } from '@playwright/test';

const SEARCH_BOX = '//input[@id=\"searchField1\"]';
const SEARCH_RESULTS_TEXT = '//h1[@data-testid="sr-only"]';

const ISBN : " john smith "= " john smith ";

test('Verify the functionality of the product search feature on onlinelibrary.wiley.com' , async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works",{timeout: 10000} );

  await page.locator(SEARCH_BOX).pressSequentially(ISBN);

  await page.keyboard.press('Enter');

  await expect (page.locator(SEARCH_RESULTS_TEXT)).toHaveText('results for"${ISBN}"', {timeout: 30000});


});

