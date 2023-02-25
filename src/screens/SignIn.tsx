import { VStack, Image, Text, Center } from "native-base";

import LogoSvg from "@assets/logo.svg";
import Background from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bgColor="gray.700">
      <Image
        source={Background}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>
    </VStack>
  );
}
