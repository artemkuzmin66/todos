import React from 'react'
import { ITodo } from '../../interfaces'
import './TodoList.scss'
import deleteSvg from '../../assets/delete.svg'

interface TodoListProps {
   todo: ITodo
   onToggle(id: number): void
   onRemove(id: number): void
   onSelect: boolean
}

export const Todo: React.FC<TodoListProps> = ({ todo, onRemove, onToggle, onSelect }) => {
   const classes = ['todo']
   if (todo.completed) {
      classes.push('completed')
   }

   return (
      <li className={classes.join(' ')} key={todo.id}>
         {onSelect &&
            <input
               className="box-label"
               type="checkbox"
               checked={todo.completed}
               onChange={onToggle.bind(null, todo.id)}
            />
         }
         <label onClick={() => onToggle(todo.id)} className="todo-label">
            <span className="todo-text">{todo.title}</span>
         </label>
         <img onClick={() => onRemove(todo.id)} src={deleteSvg} alt="remove" />
      </li>
   )
}
