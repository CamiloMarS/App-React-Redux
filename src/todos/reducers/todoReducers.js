/** Importar TodoAction Creators y TodoActionTypes **/
import * as TodoActions from "../actions/todoActions";

/**
 * Los reductores se dividieron usando la tecnica: Composición Reductora
 * Con esto se separa el reductor para la colección y el Elemento Individual
 */

//La coleccion Reducer maneja solo la colección.
export function TodoListReducer(state = [], action) {
  switch (action.type) {
    //Los casos son ordenados de acuerdo al CRUD.

    //CREATE
    case TodoActions.CREATE_TODO_SUCCESS: {
      return [...state, action.todo];
    }

    //READ
    case TodoActions.GET_TODOS_SUCCESS: {
      return action.todos.data.data.docs;
    }

    //UPDATE
    case TodoActions.START_EDITING: {
      return state.map(s => todo(s, action));
    }
    case TodoActions.CANCEL_EDITING: {
      return state.map(s => todo(s, action));
    }

    case TodoActions.UPDATE_TODO: {
      return state.map(s => todo(s, action));
    }

    case TodoActions.UPDATE_TODO_SUCCESS: {
      return state.map(s => todo(s, action));
    }

    //DELETE
    case TodoActions.DELETE_TODO: {
      return state.map(s => todo(s, action));
    }
    case TodoActions.DELETE_TODO_SUCCESS: {
      return state.filter(s => todo(s, action));
    }

    default:
      return state;
  } //end Switch
}

//El reductor individual maneja solo un Objeto ToDo.
const todo = (state, action) => {
  /**
   * Sí el todo cartografiado del estado anterior coincide con el ID de la accion
   * solo entonces procede al caso del Reducer Switch
   */
  if (state._id !== (action._id || action.todo._id)) {
    return state;
  }
  /**
   * Etitar / Eliminar el Todo individual utilizando el operado de disperción ES6.
   * Los casos son auto explicativos.
   **/
  switch (action.type) {
    case TodoActions.START_EDITING: {
      return {
        ...state,
        editing: true
      };
    }

    case TodoActions.CANCEL_EDITING: {
      return {
        ...state,
        editing: false
      };
    }

    case TodoActions.UPDATE_TODO: {
      return {
        ...state,
        editing: false,
        updating: true
      };
    }

    case TodoActions.UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        ...action.todo,
        updating: false
      };
    }
    case TodoActions.DELETE_TODO: {
      return {
        ...state,
        deleting: true
      };
    }
    case TodoActions.DELETE_TODO_SUCCESS: {
      return false;
    }
    default: {
      return true;
    }
  } //end switch
};
