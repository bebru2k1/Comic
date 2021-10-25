import * as React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import { Button, Link as ChakraLink, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify="space-between" padding={5}>
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
            Tin tức truyện
          </Button>
          <Button color="white" variant="link" ml={5}>
            Thể loại truyện
          </Button>
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
