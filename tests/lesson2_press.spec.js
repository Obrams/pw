const { test, expect } = require('@playwright/test');

test('zoom page', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/textinput');
    await page.locator("#newButtonName").fill("Abc")

// >>>>> дополнить код здесь
    await page.locator("#newButtonName").press('Meta+A');
    await page.locator("#newButtonName").press('Meta+X');
    await page.locator("#newButtonName").press('Meta+V');
    await page.locator("#newButtonName").press('Meta+V');
    await page.locator("#newButtonName").press('Meta+V');




// <<<<<
  
    await page.locator("#updatingButton").click()
    await expect(page.locator("#updatingButton")).toHaveText("AbcAbcAbc")
  
});