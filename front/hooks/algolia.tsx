import Link from "next/link";
import "instantsearch.css/themes/algolia.css"; // <== 追記：使いたいスタイルに合わせて変更
import { Hits, Highlight } from "react-instantsearch-dom";
import { Box, useToast } from "@chakra-ui/react";

const Hit = ({ hit }: any) => {
  const toast = useToast();
  return (
    <Link href={hit.categoryUrl}>
      <Box
        w="100%"
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
};
