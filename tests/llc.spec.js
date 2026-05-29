import {test, expect} from '@playwright/test';
// npx playwright test --ui
test("Playwright Special locators", async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/angularpractise/");
    await page.getByLabel("Check me out of you Love Icecream!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!").isVisible();
    await page.getByRole("link", {name: "Shop"}).click();
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();


});