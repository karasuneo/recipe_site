import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { useAuth } from "../hooks/firebase/firebase";
import {
  RiSearch2Line,
  RiStarLine,
  RiCalculatorLine,
  RiDoorOpenLine,
} from "react-icons/ri";

export default function SideNav() {
  const auth = useAuth();
  const router = useRouter();

  const handleHome = async () => {
    var currentpathname = location.pathname.replace("home", "");
    var currentpathname = currentpathname.replace("favorite", "");
    var currentpathname = currentpathname.replace("calculate", "");
    await router.push(currentpathname + "home");
  };
  const handleFavorite = async () => {
    var currentpathname = location.pathname.replace("home", "");
    var currentpathname = currentpathname.replace("favorite", "");
    var currentpathname = currentpathname.replace("calculate", "");
    await router.push(currentpathname + "favorite");
  };
  const handleCalculate = async () => {
    var currentpathname = location.pathname.replace("home", "");
    var currentpathname = currentpathname.replace("favorite", "");
    var currentpathname = currentpathname.replace("calculate", "");
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
              cursor="pointer"
              fontSize="xl"
              color="gray"
              align="center"
              _hover={{
                opacity: "0.5",
              }}
            >
              <RiSearch2Line color="pink" />
              <Text ml="3">Search Recipe</Text>
            </Flex>
            <Flex
              onClick={() => handleFavorite()}
              cursor="pointer"
              fontSize="xl"
              color="gray"
              align="center"
              _hover={{
                opacity: "0.5",
              }}
            >
              <RiStarLine color="#ECC94B" />
              <Text ml="3">Favorite</Text>
            </Flex>
            <Flex
              onClick={() => handleCalculate()}
              cursor="pointer"
              fontSize="xl"
              color="gray"
              align="center"
              _hover={{
                opacity: "0.5",
              }}
            >
              <RiCalculatorLine color="#63B3ED" />
              <Text ml="3">Calcurate</Text>
            </Flex>
          </Flex>
          <Flex
            fontSize="2xl"
            cursor="pointer"
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
              Sign out
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
