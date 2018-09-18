/**  Importar la API de ToDO **/
import { TodoApi } from "../../api/todoApi";
/**
 * Constantes de Tipo Acción, pedido por el ORDEN CRUD.
 * Patron de accion: Actions_Success y Action_Error, tipos de accion para acciones Async
 **/

/** CREATE **/
export const CREATE_TODO = "[Todo] CREATE_TODO";
export const CREATE_TODO_SUCCESS = "[Todo] CREATE_TODO_SUCCESS";
export const CREATE_TODO_ERROR = "[Todo] CREATE_TODO_ERROR";

/** READ **/
export const GET_TODOS = "[Todo] GET_TODOS";
export const GET_TODOS_SUCCESS = "[Todo] GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "[Todo] GET_TODOS_ERROR";

/** UPDATE **/
export const START_EDITING = "[Todo] START_EDITING";
export const CANCEL_EDITING = "[Todo] CANCEL_EDITING";
export const UPDATE_TODO = "[Todo] UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "[Todo] UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_ERROR = "[Todo] UPDATE_TODO_ERROR";
export const COMPLETE_TODO = "[Todo] COMPLETE_TODO";

/** DELETE **/
export const DELETE_TODO = "[Todo] DELETE_TODO";
export const DELETE_TODO_SUCCESS = "[Todo] DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "[Todo] DELETE_TODO_ERROR";

//Todas los tipos de acciones se ordenar segun el orden del crud

//CREATE
/**
 * The dispatch and getstate function is provided by the Redux-Thunk middleware,
 * we can dispatch actions with it.
 */

export function CreateTodo(todo) {
  return (dispatch, getState) => {
    return TodoApi.createTodo(todo).then(res => {
      dispatch(CreateTodoSuccess(res.data.data));
    });
  };
}

export function CreateTodoSuccess(todo) {
  return {
    type: CREATE_TODO_SUCCESS,
    todo
  };
}

//READ
export function GetTodos() {
  return (dispatch, getState) => {
    return TodoApi.getTodo().then(res => {
      dispatch(GetTodoSuccess(res));
    });
  };
}

export function GetTodoSuccess(todos) {
  return {
    type: GET_TODOS_SUCCESS,
    todos
  };
}

//UPDATE
export function StartEditing(_id) {
  return {
    type: START_EDITING,
    _id
  };
}

export function CancelEditing(_id) {
  return {
    type: CANCEL_EDITING,
    _id
  };
}

export function UpdateTodo(todo) {
  return (dispatch, getState) => {
    //Multiple actions can be sent usign the Redux-Thunk middleware
    dispatch({
      type: UPDATE_TODO,
      todo
    });
    TodoApi.updateTodo(todo).then(res => {
      dispatch(UpdateTodoSuccess(res.data.data));
    });
  };
}

export function UpdateTodoSuccess(todo) {
  return {
    type: UPDATE_TODO_SUCCESS,
    todo,
    _id: todo._id
  };
}

//DELETE
export function DeleteTodo(todo) {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_TODO, todo });
    TodoApi.removeTodo(todo).then(res => {
      if (res.status == 204) {
        dispatch(DeleteTodoSuccess(todo));
      }
    });
  };
}

export function DeleteTodoSuccess(todo) {
  return {
    type: DELETE_TODO_SUCCESS,
    todo,
    _id: todo._id
  };
}
