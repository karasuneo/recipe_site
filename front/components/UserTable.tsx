import { FC } from 'react'
import { useUsers } from '../hooks/useUsers'

export const UserTable: FC = () => {
  const { isLoading, users } = useUsers()
  if (isLoading) return <p>Loading...</p>

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.displayName} / {user.email} / {user.id}
        </li>
      ))}
    </ul>
  )
}