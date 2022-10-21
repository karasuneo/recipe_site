import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/firebase";
import algoliasearch from "algoliasearch/lite";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import Search from "../../components/Search";

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
import { ChevronLeftIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";

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

const Home: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();

  const handleSignout = async () => {
    await signOut(auth);
    await router.push("/signin");
  };
  const handleFavorite = async () => {
    const currentpathname = location.pathname.replace("home", "");
    await router.push(currentpathname + "favorite");
  };
  const handleCalculate = async () => {
    const currentpathname = location.pathname.replace("home", "");
    await router.push(currentpathname + "calculate");
  };
  const handleRedirect = async () => {
    router.reload();
  };

  return (
    <Flex bg="white" w="100vw" h="100vh">
      <SideNav />
      <Center my="10" mr="8">
        {/* <Divider orientation="vertical" /> */}
      </Center>

      <Header />

      <Box w="100%" mt={"4.5rem"} mx="auto">
        <Tabs defaultIndex={0} isFitted>
          <TabList>
            <Tab onClick={() => handleRedirect()}>レシピ一覧</Tab>
            <Tab onClick={() => handleFavorite()}>お気に入り</Tab>
            <Tab onClick={() => handleCalculate()}>カロリー計算</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Search />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Home;
