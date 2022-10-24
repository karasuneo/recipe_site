import { collection, getDocs, getFirestore } from 'firebase/firestore'
// import '../utils/firebase/init' // Initialize FirebaseApp

export type User = {
  id: string
  title: string
  author: string
  price: number
}

export async function getUsers(): Promise<User[]> {
  const users = new Array<User>()
  const db = getFirestore()
  const usersSnapshot = await getDocs(collection(db, '/users'))

  usersSnapshot.forEach((doc) => {
    const user = doc.data() as User
    users.push({ ...user, id: doc.id })
  })

  return users
}