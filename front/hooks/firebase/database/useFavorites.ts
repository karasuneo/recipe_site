import { useEffect, useState } from 'react'
import { Favorite, getFavorites } from './model/favorites'

export type UseFavoritesOutput = {
  isLoading: boolean
  favorites: Favorite[]
}

const DEFAULT_OUTPUT: UseFavoritesOutput = {
  isLoading: true,
  favorites: [],
}

export function useFavorites(): UseFavoritesOutput {
  const [output, setOutput] = useState(DEFAULT_OUTPUT)

  useEffect(() => {
    void (async () => {
      const favorites = await getFavorites()
      setOutput({ isLoading: false, favorites })
    })()
  }, [])

  return output
}