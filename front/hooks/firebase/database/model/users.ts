import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import "firebase/app";
import { Favorite } from './favorites';

export type User = {
  id: string;
  displayName: string;
  email: string;
  uid: string;
  favorite: Favorite;
};

export async function getUsers(): Promise<User[]> {
  const users = new Array<User>();
  const db = getFirestore();
  const usersSnapshot = await getDocs(collection(db, "/users"));

  usersSnapshot.forEach((doc) => {
    const user = doc.data() as User;
    users.push({ ...user, id: doc.id });
  });

  return users;
}

export async function addUser(user: User): Promise<void> {
  const db = getFirestore()
  const docRef = doc(db, '/users', user.id)
  await setDoc(docRef,
    { displayName: user.displayName, email: user.email, uid: user.uid },
    { merge: true /* ドキュメントが存在する場合はフィールドを追記 */ }
  )
}
