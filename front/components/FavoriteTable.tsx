import { FC } from "react";
import Link from "next/link";
import { useFavorites } from "../hooks/firebase/database/useFavorites";
import { Flex, Box, Button, Text, Spacer, Heading } from "@chakra-ui/react";

export const FavoriteTable: FC = () => {
  const { isLoading, favorites } = useFavorites();
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
