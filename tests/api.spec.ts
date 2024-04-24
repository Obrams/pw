import {expect,test} from "@playwright/test";

test("Отправка запроса", async ({request}) => {
    // отправлем GET-запрос
  const response = await request.get("https://todo-app-sky.herokuapp.com");
  
  // достаем из ответа статус-код
  const status = await response.status()
  // достаем из ответа тело
  const body = await response.json();
  
  console.log(status)
  console.log(body)
});


test("Создание задачи", async ({request}) => {
  const todoTitle: string = "Изучить ApiRequestContext"
  const todo = {
      "title": todoTitle
  }

  const response = await request.post("https://todo-app-sky.herokuapp.com", {data: todo});
  
  const body = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(body['title']).toEqual(todoTitle);
  console.log(body);
});


test("Переименование задачи", async ({request}) => {
  // создаем задачу, которую будем редактировать
  let createBody = {
      "title": "Изучить ApiRequestContext"
  }

  let response = await request.post( "https://todo-app-sky.herokuapp.com", {data: createBody});
  let body = await response.json();
  const todoId = body.id // узнаем ее id

  // формируем и отправляем patch-запрос на редактирование
  const todoNewName: string = "Обновленное имя";
  let editBody = {
      "title": todoNewName
  }
  response = await request.patch( `https://todo-app-sky.herokuapp.com/${todoId}`, {data: editBody} )
  body = await response.json();

  // проверяем, что в ответе на запрос пришла обновленная задача
  expect(response.ok()).toBeTruthy();
  expect(body['title']).toEqual(todoNewName);
});

test("Отметить задачу выполненной", async ({request}) => {
  // создаем задачу, которую будем редактировать
  let createBody = {
      "title": "Изучить ApiRequestContext"
  }

  let response = await request.post( "https://todo-app-sky.herokuapp.com", {data: createBody});
  let body = await response.json();
  const todoId = body.id // узнаем ее id

  // формируем и отправляем patch-запрос на редактирование 
  let editBody = {
      "completed": true
  }
  response = await request.patch( `https://todo-app-sky.herokuapp.com/${todoId}`, {data: editBody} )
  body = await response.json();

  // проверяем, что в ответе на запрос пришла обновленная задача
  expect(response.ok()).toBeTruthy();
  expect(body['completed']).toBeTruthy();
});

  