import React, { useRef, useState } from 'react'
import './FormTodo.scss'

interface FormTodoProps {
  onAdd(title: string): void
}

export const FormTodo: React.FC<FormTodoProps> = (props) => {
  const [title, setTitle] = useState<string>('')

  const ref = useRef<HTMLInputElement>(null)

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
    }
  }

  return (
    <div className="todo-flex">
      <input type="text"
        id="title"
        placeholder="Введите название задачи"
        ref={ref}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title">
        Введите название задачи
        </label>
    </div>
  )
}