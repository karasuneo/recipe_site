import { createUserWithEmailAndPassword } from "firebase/auth";
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
  confirmationPassword: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const auth = useAuth();
  const [isProcessingSignup, setIsProcessingSignup] = useState(false);
  const router = useRouter();
  const signup = async (email: string, password: string) => {
    try {
      setIsProcessingSignup(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsProcessingSignup(false);
      router.push("/home");
    } catch (e) {
      console.error(e);
      setIsProcessingSignup(false);
    }
  };
  const onSubmit: SubmitHandler<Inputs> = ({
    email,
    password,
    confirmationPassword,
  }) => {
    if (password === confirmationPassword) {
      signup(email, password);
    } else {
      alert("パスワードが一致しません");
    }
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
          Sign Up
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
                {...register("password", { required: true })}
                size="lg"
                mb="8"
              />
              <FormLabel fontWeight="bold">パスワード再入力</FormLabel>
              {errors.confirmationPassword && (
                <Text color="red.400" mb="8px">
                  パスワード再入力は必須です
                </Text>
              )}
              <Input
                type="password"
                {...register("confirmationPassword", { required: true })}
                size="lg"
                mb="8"
              />

              <Flex flexDirection="column">
                <Text mb="8" textAlign="center">
                  アカウントをお持ちの方は
                  <Link href="/">こちら</Link>
                </Text>
                <Button
                  type="submit"
                  color="white"
                  background="gray.800"
                  size="lg"
                  paddingX="80px"
                  m="0 auto"
                  isLoading={isProcessingSignup}
                  _hover={{
                    background: "gray.700",
                  }}
                >
                  サインアップ
                </Button>
              </Flex>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
