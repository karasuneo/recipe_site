import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import Search from "../../components/Search";
import "instantsearch.css/themes/algolia.css";
import { Box, Flex, Button, Spacer, Center, Divider } from "@chakra-ui/react";
import { UserTable } from "../../components/UserTable";
import { getAuth } from "firebase/auth";

export default function Home() {
  //const user = useAuthContext();

  const handleHome = async () => {
    const user = getAuth().currentUser;
    //const email = user.user.uid;
    console.log(user);
    //console.log(email);
  };

  return (
    <Flex bg="white" w="100vw" h="100vh">
      <Header />
      <SideNav />
      
      <Center h="100vw" my="10" mr="8">
        <Divider orientation="vertical" />
        <Button onClick={() => handleHome()}>aaaa</Button>
        <UserTable />
      </Center>
      <Spacer />
      <Box w="80%" mt={"4.5rem"} mx="auto">
        <Search />
      </Box>
    </Flex>
  );
}
