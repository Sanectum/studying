import { BaseClient } from "./base_client";

export class TodoClient extends BaseClient {
  GetAllTodos() {
    return this.get("/todos");
  }

  GetTodoById(id: number) {
    return this.get(`/todos/${id}`);
  }

  CreateTodo(data: any) {
    return this.post("/todos", data);
  }
}
