import React from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/firebase";
import { Flex, Box, Button, Spacer } from "@chakra-ui/react";

export default function Header() {
  const auth = useAuth();
  const router = useRouter();

  const handleSignout = async () => {
    await signOut(auth);
    await router.push("/signin");
  };
  const handleRedirect = async () => {
    router.reload();
  };
  return (
    <Flex
    bg="white"
      as="header"
      position="fixed"
      top={0}
      width="full"
      shadow="sm"
      py={4}
      px={8}
      zIndex="9999"
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
  );
}
