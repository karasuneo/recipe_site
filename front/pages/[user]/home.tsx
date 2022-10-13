import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/firebase";
import {
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Button,
  Image,
  Flex,
  Input,
  IconButton,
  Spacer,
  InputGroup,
  InputRightAddon,
  Heading,
  HStack,
  Center,
} from "@chakra-ui/react";
import { ChevronLeftIcon, SearchIcon } from "@chakra-ui/icons";

export default function Home() {
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
        <Box>
          <IconButton
            aria-label="back"
            color="black"
            rounded="full"
            icon={<ChevronLeftIcon />}
          />
        </Box>
        <Spacer />
        <Flex w="50%">
          <InputGroup>
            <Input type="tel" placeholder="食品名または料理名を入力" />
            <InputRightAddon>
              {<IconButton aria-label="検索" size="sm" icon={<SearchIcon />} />}
            </InputRightAddon>
          </InputGroup>
        </Flex>
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
              <HStack spacing="3">
                <Box
                  w="70%"
                  h="25%"
                  bg="white"
                  mx="auto"
                  _hover={{
                    opacity: "0.5",
                  }}
                >
                  <Center>
                    <Image
                      src="https://image.space.rakuten.co.jp/d/strg/ctrl/3/5bab30010b628b9d02a78e4673f273dd1bf3d4d2.86.2.3.2.jpg"
                      fallbackSrc="https://via.placeholder.com/150"
                      borderRadius="10%"
                      boxSize="200px"
                      alt="Dan Abramov"
                    />
                  </Center>
                  <Heading>我家の☆毎日ゴハン</Heading>
                  <Text>
                    香ばしくて甘いお芋が、レンジを使うので手早く食べられますよ♪
                  </Text>
                </Box>
                <Box
                  w="70%"
                  h="25%"
                  bg="white"
                  mx="auto"
                  _hover={{
                    opacity: "0.5",
                  }}
                >
                  <Center>
                    <Image
                      src="https://image.space.rakuten.co.jp/d/strg/ctrl/3/5bab30010b628b9d02a78e4673f273dd1bf3d4d2.86.2.3.2.jpg"
                      fallbackSrc="https://via.placeholder.com/150"
                      borderRadius="10%"
                      boxSize="200px"
                      alt="Dan Abramov"
                    />
                  </Center>
                  <Heading>我家の☆毎日ゴハン</Heading>
                  <Text>
                    香ばしくて甘いお芋が、レンジを使うので手早く食べられますよ♪
                  </Text>
                </Box>
                <Box
                  w="70%"
                  h="25%"
                  bg="white"
                  mx="auto"
                  _hover={{
                    opacity: "0.5",
                  }}
                >
                  <Center>
                    <Image
                      src="https://image.space.rakuten.co.jp/d/strg/ctrl/3/5bab30010b628b9d02a78e4673f273dd1bf3d4d2.86.2.3.2.jpg"
                      fallbackSrc="https://via.placeholder.com/150"
                      borderRadius="10%"
                      boxSize="200px"
                      alt="Dan Abramov"
                    />
                  </Center>
                  <Heading>我家の☆毎日ゴハン</Heading>
                  <Text>
                    香ばしくて甘いお芋が、レンジを使うので手早く食べられますよ♪
                  </Text>
                </Box>
              </HStack>
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
}
