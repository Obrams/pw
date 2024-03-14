const { test, expect } = require('@playwright/test');

test('url and title', async({ page }) => {
    await page.goto('http://habr.com');

    await expect(page).toHaveTitle('Publications / My feed / Habr');
    await expect(page).toHaveURL('https://habr.com/en/feed/');

});