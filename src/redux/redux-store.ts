import { createStore, combineReducers, applyMiddleware } from "redux"
import TodosReducer from "./todos-reducer"


let rootReducers = combineReducers({
   todos: TodosReducer
})

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers())
// @ts-ignore
window.__store__ = store

export default store;

