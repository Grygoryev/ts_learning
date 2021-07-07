import { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypesSelector'
import Todo from './Todo'

export const TodoList: FC = () => {
  const { page, error, loading, todos, limit } = useTypeSelector(state => state.todo)
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];
  
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page])
  
  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }
  
  return (
    <>
      {
        todos.map(todo =>
          <Todo key={todo.id} todo={todo} />
        )
      }

      <div
        style={{
          display: 'flex'
        }}
      >
        {
          pages.map(p =>
            <div
              onClick={() => setTodoPage(p)}
              key={p}
              style={{
                border: p === page ? '3px solid green' : '1px solid gray',
                padding: 10
              }}
            >
              {p}
            </div>
          )
        }
      </div>
    </>
  )
}
