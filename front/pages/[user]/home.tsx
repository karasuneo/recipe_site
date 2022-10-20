import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/firebase";
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
  const [suggestDisplay, toggleDisplay] = useState("hidden");

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
    <Flex bg="gray.100" w="100vw" h="100vh">
      <Flex
        as="header"
        position="fixed"
        top={0}
        width="full"
        shadow="sm"
        py={4}
        px={8}
      >
        <Button onClick={() => handleRedirect()}>かろナビ！</Button>

        <Spacer />

        <Flex w="50%"></Flex>
        <Spacer />
        <Box>
          <Button colorScheme="red" onClick={() => handleSignout()}>
            サインアウト
          </Button>
        </Box>
      </Flex>

      <Box w="100%" mt={"4.5rem"} mx="auto">
        <Tabs defaultIndex={0} isFitted>
          <TabList>
            <Tab onClick={() => handleRedirect()}>レシピ一覧</Tab>
            <Tab onClick={() => handleFavorite()}>お気に入り</Tab>
            <Tab onClick={() => handleCalculate()}>カロリー計算</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <InstantSearch
                searchClient={algoliaSettings.searchClient}
                indexName={algoliaSettings.indexName}
              >
                <Configure hitsPerPage={28} />

                <SearchBox
                  translations={{ placeholder: "食材、または料理名を入力" }}
                />

                <Box className={`relative ${suggestDisplay}`}>
                  <Box className="bg-white search-result p-3 shadow-lg absolute w-full z-10 h-96 overflow-y-scroll">
                    <SearchResult />
                  </Box>
                </Box>
              </InstantSearch>
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
