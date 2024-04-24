import {expect,test} from "@playwright/test";
import * as fs from "fs";

test("Создание задачи", async ({request}) => {
    const todoTitle: string = "Изучить ApiRequestContext"
    const todo = {
        "title": todoTitle
    }
  
    const response = await request.post("https://todo-app-sky.herokuapp.com", {data: todo});
    
    const body = await response.json();
  
    expect(response.ok()).toBeTruthy();
    expect(body['title']).toEqual(todoTitle);
    expect(response.status()).toEqual(201);

  });

test("Отправка запроса", async ({request}) => {
    // отправлем GET-запрос
  const response = await request.get("https://google.com/search?q=playwright");
  
  // достаем из ответа статус-код
  const status = await response.status()
  // достаем из ответа тело
  const body = await response.body();
  
  fs.writeFileSync("index.html", body);
});