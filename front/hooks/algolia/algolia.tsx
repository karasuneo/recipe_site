import Link from "next/link";
import { Hits, Highlight } from "react-instantsearch-dom";
import FavoriteButton from "../../components/FavoriteButton";
import "instantsearch.css/themes/algolia.css";
import { Box } from "@chakra-ui/react";

const Hit = ({ hit }: any) => {
  return (
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
  );
};

export default function SearchResult() {
  return <Hits hitComponent={Hit} />;
}
