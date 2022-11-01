import React from "react";
import { useRouter } from "next/router";
import { RiGithubFill } from "react-icons/ri";
import { Flex, Spacer, Heading } from "@chakra-ui/react";

export default function Header() {
  const router = useRouter();
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
