import { useEffect, useState } from 'react'
import { User, getUsers, addUser } from './model/users'

export type UseUsersOutput = {
  isLoading: boolean
  users: User[]
}

const DEFAULT_OUTPUT: UseUsersOutput = {
  isLoading: true,
  users: [],
}

export function useUsers(): UseUsersOutput {
  const [output, setOutput] = useState(DEFAULT_OUTPUT)

  useEffect(() => {
    void (async () => {
      const users = await getUsers()
      setOutput({ isLoading: false, users })
    })()
  }, [])

  return output
}