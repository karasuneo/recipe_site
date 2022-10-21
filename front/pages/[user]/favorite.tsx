import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import "instantsearch.css/themes/algolia.css";
import { Box, Flex, Spacer, Center, Divider } from "@chakra-ui/react";

export default function Favorite() {
  
  return (
    <Flex bg="white" w="100vw" h="100vh">
      <Header />
      <SideNav />
      <Center h="100vw" my="10" mr="8">
        <Divider orientation="vertical" />
      </Center>
      <Spacer />
      <Box w="80%" mt={"4.5rem"} mx="auto">
       
      </Box>
    </Flex>
  );
};

