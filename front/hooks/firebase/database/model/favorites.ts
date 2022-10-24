import { collection, getDocs, getFirestore } from 'firebase/firestore'
import "firebase/app";

export type Favorite = {
  id: string
  categoryName: string
  categoryUrl: string
}

export async function getFavorites(): Promise<Favorite[]> {
  const favorites = new Array<Favorite>()
  const db = getFirestore()
  const favoritesSnapshot = await getDocs(collection(db, 'users/uECDJ55M3qveCETcghgI/favorites'))

  favoritesSnapshot.forEach((doc) => {
    const favorite = doc.data() as Favorite
    favorites.push({ ...favorite, id: doc.id })
  })

  return favorites
}