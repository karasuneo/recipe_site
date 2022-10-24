import { collection, getDocs, getFirestore } from "firebase/firestore";
import "firebase/app";

export type User = {
  id: string;
  displayName: string;
  email: string;
  uid: string;
  
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
