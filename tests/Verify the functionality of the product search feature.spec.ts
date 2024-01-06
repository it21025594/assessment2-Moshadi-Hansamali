import { test, expect } from '@playwright/test';

const SEARCH_BOX = '//input[@id=\"searchField1\"]';
const SEARCH_RESULTS_TEXT = '//h1[@data-testid="sr-only"]';
//ISBN for searching
const ISBN : " john smith "= " john smith ";

test('Verify the functionality of the product search feature on onlinelibrary.wiley.com' , async ({ page }) => {
  //navigate to the WILEY online library
  await page.goto('https://onlinelibrary.wiley.com/');
  
  //verify that the page title matches the expected title
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works",{timeout: 10000} );

  //enter the keywords in the searchbox and enter it
  await page.locator(SEARCH_BOX).pressSequentially(ISBN);
  await page.keyboard.press('Enter');

  //verify the search results contains teh expected output
  await expect (page.locator(SEARCH_RESULTS_TEXT)).toHaveText('results for"${ISBN}"', {timeout: 30000});


});

