import React, { useState } from 'react'
import { ITodo } from '../../interfaces'
import './TodoList.scss'
import { Todo } from './Todo'

interface TodoListProps {
   onToggle(id: number): void
   onRemove(id: number): void
   onRemoveAll(): void
   onRemoveById(): void
   todos: Array<ITodo>
}

const TodoList: React.FC<TodoListProps> = ({ onRemove, onToggle, onRemoveAll, onRemoveById, todos }) => {
   const [select, setSelect] = useState<boolean>(false)

   const handleSelect = () => setSelect(!select)

   if (todos.length === 0) {
      return <p className="todo-empty">список дел пуст</p>
   }
   const classes = ['btn-delete']
   if (select) {
      classes.push('btn-active')
   }
   const activeTask = todos.filter((todo: { completed: boolean }) => !todo.completed)
   const doneTask = todos.filter((todo: { completed: boolean }) => todo.completed)

   return (
      <>
         <div className="todo-edit">
            <button onClick={handleSelect}>выбрать задачу</button>
            {select && <button onClick={onRemoveById} className={classes.join(' ')}>удалить</button>}
            {select && <button onClick={onRemoveAll} className={classes.join(' ')}>удалить все</button>}
         </div>
         <ul className="todo-list">
            {[...activeTask, ...doneTask].map(todo => <Todo
               key={todo.id}
               onToggle={onToggle}
               onRemove={onRemove}
               todo={todo}
               onSelect={select}
            />)}
         </ul>
      </>
   )
}

export default TodoList
