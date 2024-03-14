const {test, expect} = require("@playwright/test");

const url = (c) => `https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=${c}`;

test("check elements count 120", async ({page})=> {
    await page.goto(url(120));

    await expect(page.locator("li.s-item[data-gr4]")).toHaveCount(120);
});

test('check elements count 240', async ({ page }) => {
    await page.goto(url(240));

    await expect(page.locator("li.s-item[data-gr4]")).toHaveCount(240);  
  });