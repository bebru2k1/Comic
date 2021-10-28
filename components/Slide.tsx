import React, { useEffect, useState, useRef } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Code, Flex, Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import Header from "./Header";
// import Image from "next/image";
import { motion } from "framer-motion";
import { sliceData } from "../data/sliceData";
import {
  variantsAvatar,
  variantsDescription,
  variantsBg,
} from "../animations/animations";
import { Button } from "@chakra-ui/react";
import SlideButton from "./SlideButton";
import { IAnime } from "../IData/IAnime";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export interface SlideProps {
  dataAnime: IAnime;
}

export default function Slide({ dataAnime }: SlideProps) {
  console.log(dataAnime);
  return (
    <Box position="relative" height={700}>
      <Header></Header>
      <Flex
        height="100%"
        align="center"
        flexDirection="column"
        justify="center"
      >
        {/* <Image src="/imgs/demonslayer.png" alt="" layout="fill"></Image> */}
        <MotionImage
          src={dataAnime.banner_image}
          alt=""
          height="100%"
          width="100%"
          objectFit="cover"
          filter="brightness(40%)"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={-1}
          variants={variantsBg}
          initial="hidden"
          animate="visible"
        />
        <Flex align="center" justify="space-evenly">
          <MotionBox
            width="30%"
            variants={variantsAvatar}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={dataAnime.cover_image}
              alt=""
              width={200}
              height={300}
              objectFit="cover"
              borderRadius={5}
              m="0 auto"
              boxShadow="rgba(99, 99, 99, 0.4) 0px 4px 10px 0px"
            ></Image>
          </MotionBox>

          <MotionBox
            width="70%"
            variants={variantsDescription}
            initial="hidden"
            animate="visible"
          >
            <Heading as="h1" fontSize={50} color="white" fontWeight="bold">
              {dataAnime.titles.en}
            </Heading>
            <Text color="white" mt={5}>
              {dataAnime.descriptions.en}
            </Text>
            <Box>
              <Text color="white" fontWeight="bold" mt={2}>
                {" "}
                Thể loại :
              </Text>
              <Code colorScheme="red">Hành động</Code>,{" "}
              <Code colorScheme="red">Kinh Dị</Code>
            </Box>
          </MotionBox>
        </Flex>
      </Flex>
    </Box>
  );
}
