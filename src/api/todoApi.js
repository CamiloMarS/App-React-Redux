import { httpClient } from "./httpClient";

//Esta es la API, la URL raíz del backend puede ser llamada desde aquí.
const API = "http://localhost:3000/api";

//Setting the todos API
const TODO_API = `${API}/todos`;

//Las operaciones del CRUD

/**=== createTodo ===**/
const createTodo = todo => {
  return httpClient.post(TODO_API, todo);
};

/**=== getTodo ===**/
const getTodo = () => {
  return httpClient.get(TODO_API);
};

/**=== updateTodo ===**/
const updateTodo = todo => {
  return httpClient.put(TODO_API, todo);
};

/**=== Delete ===**/
const removeTodo = todo => {
  return httpClient.del(`${TODO_API}/${todo._id}`);
};

/**
 * Encapsulando en un objeto JSON
 */
const TodoApi = { createTodo, getTodo, updateTodo, removeTodo };
export { TodoApi };
