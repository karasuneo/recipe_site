import Link from "next/link";
import { Hits, Highlight } from "react-instantsearch-dom";
import FavoriteButton from "../../components/FavoriteButton";
import "instantsearch.css/themes/algolia.css";
import { Box, IconButton, useToast } from "@chakra-ui/react";
import { addFavorite, Favorite } from "../firebase/database/model/favorites";
import { StarIcon } from "@chakra-ui/icons";
import { getAuth } from "firebase/auth";

const Hit = ({ hit }: any) => {
  const auth = getAuth();

  const toast = useToast();
  const element: Favorite = {
    id: hit.objectID,
    categoryName: hit.categoryName,
    categoryUrl: hit.categoryUrl,
  };

  return (
    <Box>
      <IconButton
        variant="outline"
        aria-label="favorite"
        colorScheme="yellow"
        icon={<StarIcon />}
        onClick={() => addFavorite(String(auth.currentUser.uid), element)}
      ></IconButton>
      <Link href={hit.categoryUrl}>
        <Box
          w="50%"
          h="100%"
          mx="auto"
          _hover={{
            opacity: "0.5",
          }}
        >
          {hit.categoryName}
          <Box className="hitName">
            <Highlight attribute="title" tagName="span" hit={hit} />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default function SearchResult() {
  return <Hits hitComponent={Hit} />;
}
