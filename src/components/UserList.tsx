import { FC, useEffect } from 'react'
import { useTypeSelector } from '../hooks/useTypesSelector';
import { useActions } from '../hooks/useActions';

export const UserList:FC = () => {
  const { error, users, loading } = useTypeSelector(state => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, [])
  
  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }
  
  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  )
}

