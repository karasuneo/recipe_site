import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/firebase";
import { useAuthContext } from "../../hooks/context/AuthContext";
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
  const currentUser = useAuthContext();
  const router = useRouter();

  const handleSignout = async () => {
    console.log(currentUser);
    await signOut(auth);
    await router.push("/signin");
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
        <Flex mt={8}>
          <Box ml={6}>
            <Box bg="white" rounded="full" p={1} shadow="lg">
              <IconButton
                aria-label="edit"
                bg="gray.300"
                color="white"
                rounded="full"
                mr={1}
                icon={<EditIcon />}
              />
              <IconButton
                aria-label="view"
                bg="white"
                color="gray.400"
                rounded="full"
                icon={<ViewIcon />}
              />
            </Box>
            <Box mt={3}>
              <IconButton
                aria-label="view"
                shadow="lg"
                bg="white"
                color="gray.400"
                rounded="full"
                icon={<AttachmentIcon />}
              />
            </Box>
            <Box mt={3}>
              <IconButton
                aria-label="view"
                shadow="lg"
                bg="white"
                color="gray.400"
                rounded="full"
                icon={<AddIcon />}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

const ParagraphSkeleton = () => <Skeleton mb={4} h={"1rem"}></Skeleton>;
