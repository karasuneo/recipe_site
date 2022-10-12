import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/firebase";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  IconButton,
  Spacer,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import {
  ViewIcon,
  EditIcon,
  AttachmentIcon,
  AddIcon,
  ChevronLeftIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Skeleton } from "@chakra-ui/skeleton";

export default function Home() {
  const auth = useAuth();
  const currentpathname = location.pathname;
  const router = useRouter();

  const handleSignout = async () => {
    await signOut(auth);
    await router.push("/signin");
  };
  const handleFavorite = async () => {
    await router.push("/signin");
  };
  const handleRedirect = async () => {
    console.log(currentpathname + "");
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

      <Box mt={"6rem"} mx="auto">
        <Heading as="h1" size="lg" fontWeight="bold">
          レシピ一覧
        </Heading>
      </Box>
    </Flex>
  );
}

const ParagraphSkeleton = () => <Skeleton mb={4} h={"1rem"}></Skeleton>;
