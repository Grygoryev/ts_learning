import { FC } from 'react';
import { ITodo } from '../types/todo'

interface TodoProps {
  todo: ITodo
}

const Todo:FC<TodoProps> = ({todo}) => {
  return (
    <div>
      {todo.id} - {todo.title}
    </div>
  )
}

export default Todo;