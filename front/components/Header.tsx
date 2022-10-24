import React from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/firebase/firebase";
import { Flex, Box, Button, Text, Spacer, Heading } from "@chakra-ui/react";
import { RiGithubFill } from "react-icons/ri";

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
      <Heading
        cursor="pointer"
        size="md"
        ml="auto"
        onClick={() => handleRedirect()}
      >
        かろナビ！
      </Heading>
      <Spacer />
      <Spacer />
      <Flex w="50%"></Flex>
      <Spacer />
      <a href="https://github.com/karasuneo">
        <RiGithubFill cursor="pointer" size="2rem" />
      </a>
    </Flex>
  );
}
