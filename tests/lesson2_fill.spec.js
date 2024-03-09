const { test, expect } = require('@playwright/test');

test('auth test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
    
// >>>>> дополнить код здесь
  const login = "user" 
  // в это поле нужно вписать ваше имя
  await page.getByPlaceholder("User Name").fill(login);
  // в это поле нужно ввести пароль pwd
  await page.getByPlaceholder("********").fill('pwd');
  // на эту кнопку нужно будет кликнуть
  await page.locator("#login").click();

  await page.locator("body").screenshot({path: "body.png"});
  await page.locator(".container").first().screenshot({path: "container.png"});


// <<<<<
    
  await expect(page.locator("#loginstatus")).toHaveText(`Welcome, ${login}!`)
});