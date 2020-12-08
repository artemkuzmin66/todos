import { ITodo } from './../interfaces';

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const DELETE_ALL_TODO = 'DELETE_ALL_TODO'
const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
const DELETE_TODO_BY_ID = 'DELETE_TODO_BY_ID'

let initialState = {
   todos: [] as Array<ITodo>
}

export type InitialStateType = typeof initialState

export const TodosReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case ADD_TODO: {
         return { ...state, todos: state.todos.concat(action.newTodo) }
      }
      case DELETE_TODO: {
         return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
      }
      case DELETE_ALL_TODO: {
         return { ...state, todos: state.todos.slice(0, action.newTodo) }
      }
      case DELETE_TODO_BY_ID: {
         return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed).slice(0, action.id)
         }
      }
      case TOGGLE_CHECKBOX: {
         return {
            ...state,
            todos: state.todos.map(todo => {
               if (todo.id === action.id) {
                  return { ...todo, completed: !todo.completed }
               }
               return todo
            })
         }
      }
      default:
         return state;
   }
}

type AddTodoActionType = {
   type: typeof ADD_TODO,
   newTodo: Array<ITodo>
}

type DeleteTodoActionType = {
   type: typeof DELETE_TODO,
   id: number
}

type DeleteAllTodoActionType = {
   type: typeof DELETE_ALL_TODO,
   newTodo: any
}
type OnToggleCheckboxActionType = {
   type: typeof TOGGLE_CHECKBOX,
   id: number
}
type DeleteTodoByIdActionType = {
   type: typeof DELETE_TODO_BY_ID,
   id: number
}
export const addTodoAC = (newTodo: Array<ITodo>): AddTodoActionType => ({ type: ADD_TODO, newTodo })
export const deleteTodoAC = (id: number): DeleteTodoActionType => ({ type: DELETE_TODO, id })
export const deleteAllTodoAC = (newTodo: any): DeleteAllTodoActionType => ({ type: DELETE_ALL_TODO, newTodo })
export const onToggleCheckbox = (id: number): OnToggleCheckboxActionType => ({ type: TOGGLE_CHECKBOX, id })
export const DeleteTodoById = (id: number): DeleteTodoByIdActionType => ({ type: DELETE_TODO_BY_ID, id })

export default TodosReducer;


