import { test, expect } from "../fixtures/api_fixtures";

test("get all todos", async ({ todoApi }) => {
  const todos = await todoApi.GetAllTodos();
  console.log(todos);
  expect(todos.status()).toBe(200);
});

test("get todo by id", async ({ todoApi }) => {
  const id = 1;
  const todos = await todoApi.GetTodoById(id);
  const body = await todos.json();

  expect(todos.status()).toBe(200);
  expect(body).toHaveProperty("id", id);
  expect(body.id).toBe(id);
});

test("create nad check todo", async ({ todoApi }) => {
  const request_body = {
    userId: 10,
    id: 201,
    title: "ipsam aperiam voluptates qui",
    completed: false,
  };
  const todos = await todoApi.CreateTodo(request_body);
  const body = await todos.json();

  expect(todos.status()).toBe(201);
  expect(body.id).toBe(request_body.id);
});
