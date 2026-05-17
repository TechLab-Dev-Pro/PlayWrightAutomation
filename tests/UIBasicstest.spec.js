const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser})=>
{
    //chrome - plugins/ cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.youtube.com/watch?v=ncZ8SnPHYYA");
    console.log(await page.title());



});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    //get titrle - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
    //


});