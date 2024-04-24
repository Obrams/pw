const { test, expect } = require('@playwright/test');

test('Проверяем появление зеленой плашки, через 15 секунд', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');
      
  
  await page.locator(".btn-primary").click({timeout: 150000});
  await expect(page.locator(".bg-success")).toHaveText("Data loaded with AJAX get request.", {timeout:150000});
});


const { test, expect } = require('@playwright/test');

test('load habr', async ({ page }) => {
  await page.goto("https://habr.com/ru/feed/", {timeout: 10000, waitUntil: 'domcontentloaded'});
  
  await expect(page.locator("h1")).toHaveText("Моя лента") 
});