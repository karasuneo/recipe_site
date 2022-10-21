import { Flex, Heading, Text, ScrollProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsPlusSquare, BsNewspaper } from "react-icons/bs";
import { RiDoorOpenLine, RiMailStarLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function SideNav() {
  const router = useRouter();

  const handleHome = async () => {
    const currentpathname = location.pathname.replace("favorite", "");
    await router.push(currentpathname + "home");
  };
  const handleFavorite = async () => {
    const currentpathname = location.pathname.replace("home", "");
    await router.push(currentpathname + "favorite");
  };
  const handleCalculate = async () => {
    const currentpathname = location.pathname.replace("home", "");
    await router.push(currentpathname + "calculate");
  };
  return (
    <Flex w="20%" direction="column" align="center">
      <Flex direction="column" justify="space-between">
        <Flex mt="50" mb="100"></Flex>
        <Flex h="65vh" direction="column" justify="space-between">
          <Flex
            h="20vh"
            mb="32"
            direction="column"
            align="flex-start"
            justify="space-around"
          >
            <Flex
              fontSize="xl"
              color="gray"
              align="center"
              fontWeight="800"
              bg="pink.50"
              p="3"
              m="-3"
              rounded="full"
              _hover={{
                opacity: "0.5",
              }}
            >
              <CgProfile color="pink" />
              <Text onClick={() => handleHome()} ml="3">
                Search Recipe
              </Text>
            </Flex>

            <Flex
              fontSize="xl"
              color="gray"
              align="center"
              _hover={{
                opacity: "0.5",
              }}
            >
              <BsNewspaper color="#63B3ED" />
              <Text onClick={() => handleFavorite()} ml="3">
                Favorite
              </Text>
            </Flex>
            <Flex
              onClick={() => handleCalculate()}
              fontSize="xl"
              color="gray"
              align="center"
              _hover={{
                opacity: "0.5",
              }}
            >
              <RiMailStarLine color="#ECC94B" />
              <Text ml="3">Calcurate</Text>
            </Flex>
          </Flex>
          <Flex fontSize="2xl" mb={30} color="gray" align="center">
            <RiDoorOpenLine />
            <Text ml={3} fontSize="md">
              Log out
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
