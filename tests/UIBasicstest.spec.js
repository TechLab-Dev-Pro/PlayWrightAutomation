const {test} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser})=>
{
    //chrome - plugins/ cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.youtube.com/watch?v=ncZ8SnPHYYA");


});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://www.youtube.com/watch?v=ncZ8SnPHYYA");
    //


});