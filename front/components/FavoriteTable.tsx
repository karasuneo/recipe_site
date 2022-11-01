import { FC } from "react";
import Link from "next/link";
import { useFavorites } from "../hooks/firebase/database/useFavorites";
import { Box } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";

export const FavoriteTable: FC = () => {
  const auth = getAuth();
  const { isLoading, favorites } = useFavorites(auth.currentUser.uid);
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {favorites.map((favorite) => (
        <Box key={favorite.id}>
          <Link href={favorite.categoryUrl}>
            <Box
              border={"solid"}
              w="50%"
              h="100%"
              mx="auto"
              _hover={{
                opacity: "0.5",
              }}
            >
              <Box>{favorite.categoryName}</Box>
            </Box>
          </Link>
        </Box>
      ))}
    </ul>
  );
};
