import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { BsPlusSquare, BsNewspaper } from "react-icons/bs";
import { RiDoorOpenLine, RiMailStarLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import companyIcon from "../public/favicon.ico";

export default function SideNav() {
  return (
    <Flex w="20%" direction="column" align="center">
      <Flex direction="column" justify="space-between">
        <Flex mt="50" mb="100">
          <Image
            borderRadius="full"
            boxSize="60px"
            src={companyIcon.src}
            fallbackSrc="https://via.placeholder.com/150"
            alt="company icon"
          />
          <Heading ml="3" fontWeight="800" fontSize="xl" alignSelf="center">
            The Earth
          </Heading>
        </Flex>
        <Flex h="65vh" direction="column" justify="space-between">
          <Flex fontSize="xl" color="gray" align="center">
            <BsPlusSquare />
            <Text ml="3">Add Resume</Text>
          </Flex>
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
            >
              <CgProfile color="pink" />
              <Text ml="3">My Profile</Text>
            </Flex>

            <Flex fontSize="xl" color="gray" align="center">
              <BsNewspaper color="#63B3ED" />
              <Text ml="3">Jobs</Text>
            </Flex>
            <Flex fontSize="xl" color="gray" align="center">
              <RiMailStarLine color="#ECC94B" />
              <Text ml="3">Employee</Text>
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
