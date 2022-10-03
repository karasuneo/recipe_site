import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth, useUser } from "../hooks/firebase";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
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
  const provider = new GoogleAuthProvider();
  const auth = useAuth();
  const currentUser = useUser();
  const [isProcessingSignup, setIsProcessingSignup] = useState(false);
  const router = useRouter();
  const signin = async (email: string, password: string) => {
    try {
      setIsProcessingSignup(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsProcessingSignup(false);
    } catch (e) {
      console.error(e);
    }
  };
  const clickLogin = function () {
    signInWithRedirect(auth, provider);
  };
  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    signin(email, password);
  };
  const handleClose = async () => {
    await router.push("/");
  };

  useEffect(() => {
    if (currentUser) router.push("/");
  }, [currentUser, router]);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        console.log(result);
        if (result == null) {

          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(token);
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          console.log(user.uid);
          router.push("/");
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.error(errorCode);
        console.error(errorMessage);
        console.error(email);
        // The AuthCredential type that was used.
        //const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });

  const checkLogint = function () {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        console.log(uid);
        console.log(email);
      } else {
        console.log("signed out");
      }
    });
  };
  checkLogint();
  const clickLogout = async function () {
    signOut(auth)
      .then(() => {
        console.log("ログアウトしました");
      })
      .catch((error) => {
        console.log(`ログアウト時にエラーが発生しました (${error})`);
      });
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
                {...register("confirmationPassword", { required: true })}
                size="lg"
                mb="8"
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
                  isLoading={isProcessingSignup}
                  _hover={{
                    background: "gray.700",
                  }}
                >
                  サインイン
                </Button>
              </Flex>
            </form>
            <Button
              type="submit"
              color="white"
              background="gray.800"
              size="lg"
              paddingX="80px"
              m="0 auto"
              onClick={() => clickLogin()}
              _hover={{
                background: "gray.700",
              }}
            >
              Googleでサインイン
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
