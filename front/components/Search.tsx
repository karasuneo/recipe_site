import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

import algoliasearch from "algoliasearch/lite";

import "instantsearch.css/themes/algolia.css"; // <== 追記：使いたいスタイルに合わせて変更
import {
  SearchBox,
  Hits,
  Highlight,
  InstantSearch,
  Configure,
} from "react-instantsearch-dom";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Button,
  Flex,
  Spacer,
  useToast,
  Center,
  Divider,
} from "@chakra-ui/react";

const algoliaSettings = {
  searchClient: algoliasearch(`JXD32XW6C6`, `cf86a070eb44ee82d3620a22dcaa99c8`),
  indexName: "kalo-navi!",
};

// ヒットした項目をリンクとして表示
// Highlightを入れておくと検索と一致したところにスタイルを当てられる
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

const SearchResult = () => {
  return <Hits hitComponent={Hit} />;
};

export default function Search(): JSX.Element {
  return (
    <>
      <InstantSearch
        searchClient={algoliaSettings.searchClient}
        indexName={algoliaSettings.indexName}
      >
        <Configure hitsPerPage={28} />
        <SearchBox translations={{ placeholder: "食材、または料理名を入力" }} />
        <SearchResult />
      </InstantSearch>
    </>
  );
}
