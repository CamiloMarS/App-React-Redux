import { createStore, applyMiddleware } from "redux";

//Redux  Thunk necesita ser configurado como un middleware
import thunkMiddleware from "redux-thunk";
//Middleware de registro de Redux
import { createLogger } from "redux-logger";
//importar el reductor de raiz
import rootReducer from "../reducers/rootReducer";

/**
 * Crear el middleware de registro de Redux
 */

const loggerMiddleware = createLogger();

//Configurando la tienda. PreloadState es el estado Inicial
export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
