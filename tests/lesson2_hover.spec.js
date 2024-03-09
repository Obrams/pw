const { test, expect } = require('@playwright/test');

test('check hover', async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/hovers');
    const image = await page.locator(".figure").nth(1)
  
  // >>>>> дополнить код здесь
    await image.hover();
  // <<<<<
    
  await expect(image.locator(".figcaption h5")).toBeVisible()
  
});