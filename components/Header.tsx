import * as React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import {
  Button,
  Link as ChakraLink,
  ResponsiveValue,
  useColorMode,
} from "@chakra-ui/react";

import Link from "next/link";

export interface HeaderProps {
  position?: string;
}

export default function Header({ position }: HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      align="center"
      justify="space-between"
      padding={5}
      position={position as ResponsiveValue<any>}
      top={0}
      zIndex={1000}
    >
      {/* HeaderLeft */}
      <Flex align="center">
        {/* HeaderLeft-Left */}
        <Box>
          <Link href="/abs" passHref>
            <ChakraLink>
              <Image
                src="/imgs/logosaringan.png"
                w={55}
                h={55}
                alt=""
                objectFit="cover"
                cursor="pointer"
              ></Image>
            </ChakraLink>
          </Link>
        </Box>
        {/* HeaderLeft-Right */}
        <Box>
          <Button color="white" variant="link" ml={5}>
            Tin tức Anime
          </Button>
          <Link href="/anime" passHref>
            <Button as="a" color="white" variant="link" ml={5}>
              Thể loại Anime
            </Button>
          </Link>
        </Box>
      </Flex>
      {/* HeaderRight */}
      <Box>
        <Button color="white" variant="link" ml={5}>
          Đăng nhập/ Đăng kí
        </Button>
        {/* <Box onClick={() => toggleColorMode()}>Set ColorMode</Box> */}
      </Box>
    </Flex>
  );
}
