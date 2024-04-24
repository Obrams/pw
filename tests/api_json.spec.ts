import {expect,test} from "@playwright/test";

test("Создание задачи", async ({request}) => {
    const todoTitle: string = "Изучить ApiRequestContext"
    const todo = {
        "title": todoTitle
    }
  
    const response = await request.post("https://todo-app-sky.herokuapp.com", {data: todo});
    
    const body = await response.json();
    const taskId = body['id']
    const statusCompleted = body['completed']

    expect(response.ok()).toBeTruthy();
    expect(body['title']).toEqual(todoTitle);
    expect(response.status()).toStrictEqual(201);
    expect(statusCompleted).toEqual(false);
    expect(taskId).toBeGreaterThan(0)
  });