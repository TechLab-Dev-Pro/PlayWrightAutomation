import {test, expect} from '@playwright/test';

test("Playwright Special locators", async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/angularpractise/");
    await page.getByLabel("Check me out of you Love Icecream!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");


});