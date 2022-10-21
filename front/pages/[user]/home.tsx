import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/firebase";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import Search from "../../components/Search";
import "instantsearch.css/themes/algolia.css";
import { Box, Flex, Spacer, Center } from "@chakra-ui/react";

const Home: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Flex bg="white" w="100vw" h="100vh">
     
      <SideNav />
      <Center my="10" mr="8">
        {/* <Divider orientation="vertical" /> */}
      </Center>
      <Header />
      

      <Spacer />
      <Box w="100%" mt={"4.5rem"} mx="auto">
        <Search />
      </Box>
    </Flex>
  );
};

export default Home;
