import { Flex, Heading, Text, ScrollProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { useAuth } from "../hooks/firebase";
import { BsPlusSquare, BsNewspaper } from "react-icons/bs";
import { RiDoorOpenLine, RiMailStarLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function SideNav() {
  const auth = useAuth();
  const router = useRouter();

  const handleHome = async () => {
    var currentpathname = location.pathname.replace("home", "");
    currentpathname.replace("favorite", "");
    currentpathname.replace("calculate", "");
    await router.push(currentpathname + "home");
  };
  const handleFavorite = async () => {
    var currentpathname = location.pathname.replace("home", "");
    currentpathname.replace("favorite", "");
    currentpathname.replace("calculate", "");
    await router.push(currentpathname + "favorite");
  };
  const handleCalculate = async () => {
    var currentpathname = location.pathname.replace("home", "");
    currentpathname.replace("favorite", "");
    currentpathname.replace("calculate", "");
    await router.push(currentpathname + "calculate");
  };
  const handleSignout = async () => {
    await signOut(auth);
    await router.push("/signin");
  };

  return (
    <Flex w="20%" direction="column" align="center" position="fixed">
      <Flex direction="column" justify="space-between">
        <Flex mt="50" mb="100"></Flex>
        <Flex h="65vh" direction="column" justify="space-between">
          <Flex
            h="30vh"
            mb="xl"
            direction="column"
            align="flex-start"
            justify="space-around"
          >
            
            <Flex
              onClick={() => handleHome()}
              fontSize="xl"
              color="gray"
              align="center"
              _hover={{
                opacity: "0.5",
              }}
            >
              <CgProfile color="pink" />

              <Text ml="3">Search Recipe</Text>
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
          <Flex
            fontSize="2xl"
            mb={30}
            color="gray"
            align="center"
            onClick={() => handleSignout()}
            _hover={{
              opacity: "0.5",
            }}
          >
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
