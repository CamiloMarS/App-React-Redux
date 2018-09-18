import { combineReducers } from "redux";
import { TodoListReducer } from "../todos/reducers/todoReducers";

/**
 * Reductr raíz para toda la  aplicación, para que la aplicación tenga un unico reductor
 * La comunicación entre reductores sera más facil de mantener.
 * **/
const rootReducer = combineReducers({
  todos: TodoListReducer
});

export default rootReducer;
