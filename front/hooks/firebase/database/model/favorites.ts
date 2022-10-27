import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'

export type Favorite = {
  id: string
  categoryName: string
  categoryUrl: string
}

export async function getFavorites(userid: string): Promise<Favorite[]> {
  const favorites = new Array<Favorite>()
  const db = getFirestore()
  const favoritesSnapshot = await getDocs(collection(db, 'users/' + userid + '/favorites'))

  favoritesSnapshot.forEach((doc) => {
    const favorite = doc.data() as Favorite
    favorites.push({ ...favorite, id: doc.id })
  })

  return favorites
}

export async function addFavorite(userid: string, favorite: Favorite): Promise<void> {
  const db = getFirestore()
  const docRef = doc(db, 'users/' + userid + '/favorites', favorite.id)
  await setDoc(docRef,
    {categoryName: favorite.categoryName, categoryUrl: favorite.categoryUrl},
    { merge: true /* ドキュメントが存在する場合はフィールドを追記 */ }
  )
}