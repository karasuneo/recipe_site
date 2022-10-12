import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../hooks/firebase";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const auth = useAuth();
  const [isProcessingSignin, setIsProcessingSignin] = useState(false);
  const router = useRouter();
  const signin = async (email: string, password: string) => {
    try {
      setIsProcessingSignin(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsProcessingSignin(false);
      // router.push("/" + email + "/home");
      router.push("/private/" + email);
    } catch (e) {
      console.error(e);
      setIsProcessingSignin(false);
    }
  };
  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    signin(email, password);
  };

  return (
    <Flex>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading color="gray.800" mb="48px" textAlign="center" size="xl">
          Sign In
        </Heading>
        <Box
          boxShadow="lg"
          w="600px"
          paddingY="120px"
          paddingX="32px"
          borderRadius="8px"
          border="1px solid"
          borderColor="gray.100"
          m="0 auto"
          display="flex"
        >
          <Box w="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel fontWeight="bold">Eメール</FormLabel>
              {errors.email && (
                <Text color="red.400" mb="8px">
                  Eメールは必須です
                </Text>
              )}
              <Input
                type="email"
                size="lg"
                mb="8"
                placeholder="example@test.com"
                {...register("email", { required: true })}
              />
              <FormLabel fontWeight="bold">パスワード</FormLabel>
              {errors.password && (
                <Text color="red.400" mb="8px">
                  パスワードは必須です
                </Text>
              )}
              <Input
                type="password"
                size="lg"
                mb="8"
                placeholder="password"
                {...register("password", { required: true })}
              />

              <Flex flexDirection="column">
                <Text mb="8" textAlign="center">
                  アカウントをお持ちでない方は
                  <Link href="/signup">こちら</Link>
                </Text>
                <Button
                  type="submit"
                  color="white"
                  background="gray.800"
                  size="lg"
                  paddingX="80px"
                  m="0 auto"
                  isLoading={isProcessingSignin}
                  _hover={{
                    background: "gray.700",
                  }}
                >
                  サインイン
                </Button>
              </Flex>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
