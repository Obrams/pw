const { test, expect } = require('@playwright/test');

test('check getByTestId', async({ page }) => {
    const text = "javascript"

    await page.goto('https://www.litres.ru');
    
    await page.getByTestId("header__search-input--desktop").fill(text);
    await page.getByText("Найти").click();

    await expect(page.getByTestId("search-title__wrapper")).toHaveText(`Результаты поиска «${text}»`);

});