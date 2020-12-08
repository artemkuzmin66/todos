import React from 'react'
import { FormTodo } from '../components/todos/form/FormTodo'
import TodoList from '../components/todos/TodoList'
import { ITodo } from '../interfaces'
import { addTodoAC, deleteTodoAC, deleteAllTodoAC, DeleteTodoById, onToggleCheckbox } from '../redux/todos-reducer'
import { compose } from 'redux'
import { connect, useDispatch } from 'react-redux'
import { AppStateType } from '../redux/redux-store'

interface PropsType {
   todos?: any
}

const TodosPage: React.FC<PropsType> = ({ todos }) => {

   const dispatch = useDispatch()

   const HandleAdd = (title: string) => {
      const newTodo: ITodo = {
         title: title,
         id: Date.now(),
         completed: false,
      }
      if (newTodo.title) {
         dispatch(addTodoAC([newTodo]))
      }
   }

   const handleToggle = (id: number) => {
      dispatch(onToggleCheckbox(id))
   }

   const handleRemove = (id: number) => {
      const shouldRemove = window.confirm('вы уверены, что хотите удалить задачу?')
      if (shouldRemove) {
         dispatch(deleteTodoAC(id))
      }
   }

   const handleDeleteAllTodo = () => {
      const newTodo: any = []
      const shouldRemove = window.confirm('вы уверены, что хотите удалить задачи?')
      if (shouldRemove) {
         dispatch(deleteAllTodoAC([newTodo]))
      }
   }

   const handleDeleteTodoById = (id: number) => {
      const shouldRemove = window.confirm('вы уверены, что хотите удалить задачи?')
      if (shouldRemove) {
         dispatch(DeleteTodoById(id))
      }

   }

   return <>
      <FormTodo onAdd={HandleAdd} />
      <TodoList
         onToggle={handleToggle}
         onRemove={handleRemove}
         onRemoveAll={handleDeleteAllTodo}
         onRemoveById={() => handleDeleteTodoById(todos.id)}
         todos={todos}
      />
   </>
}

let mapStateToProps = (state: AppStateType) => {
   return {
      todos: state.todos.todos
   }
}

export default compose(
   connect(mapStateToProps, null)
)(TodosPage)