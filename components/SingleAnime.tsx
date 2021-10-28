import * as React from "react";
import {
  Box,
  chakra,
  Button,
  Heading,
  Text,
  Code,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variantsAvatar } from "../animations/animations";
import { IAnime } from "../IData/IAnime";

const MotionBox = motion(Box);
const ImageNext = chakra(Image, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ["src", "alt", "layout"].includes(prop),
});

export interface SingleAnimeProps {
  dataAnime: IAnime;
  width?: string | number;
  height?: string | number;
}

export default function SingleAnime({ dataAnime }: SingleAnimeProps) {
  return (
    <MotionBox
      variants={variantsAvatar}
      initial="hidden"
      animate="visible"
      position="relative"
      width="100%"
      height="100%"
      cursor="pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "rgba(99, 99, 99, 0.4) 0px 4px 10px 0px",
      }}
      flexShrink={0}
    >
      <ImageNext
        src={dataAnime.cover_image}
        alt=""
        layout="fill"
        borderRadius={5}
        boxShadow="rgba(99, 99, 99, 0.4) 0px 4px 10px 0px"
        objectFit="cover"
      />

      <Box position="absolute" right={2} top={2}>
        <Button size="sm" colorScheme="red" _hover={{ colorScheme: "red" }}>
          {`${dataAnime.score}/??`}
        </Button>
      </Box>

      <Box
        position="absolute"
        w="100%"
        textAlign="center"
        fontSize={15}
        color="rgb(255, 255, 255)"
        bgColor="rgba(7, 7, 7, 0.5)"
        bottom={0}
        padding={3}
        borderBottomLeftRadius={5}
        borderBottomRightRadius={5}
        d="inline-block"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        // style={{color : rgb(216, 75, 75)}}
        width="100%"
      >
        {dataAnime.titles.en}
      </Box>
    </MotionBox>
  );
}
