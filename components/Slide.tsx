import React, { useEffect, useState, useRef } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Code, Flex, Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import Header from "./Header";
// import Image from "next/image";
import { motion } from "framer-motion";
import { sliceData } from "../data/sliceData";
import Modal from "./Modal";
import {
  variantsAvatar,
  variantsDescription,
  variantsBg,
} from "../animations/animations";
import { Button, useDisclosure } from "@chakra-ui/react";
import SlideButton from "./SlideButton";
import { IAnime } from "../IData/IAnime";
import PlayerVideo from "./PlayerVideo";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export interface SlideProps {
  dataAnime: IAnime;
}

export default function Slide({ dataAnime }: SlideProps) {
  console.log(dataAnime);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Box
            width="30%"
            variants={variantsAvatar}
            initial="hidden"
            animate="visible"
            d="flex"
            flexDirection="column"
            alignItems="center"
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
            <Box mt={5}>
              <Button size="sm" colorScheme="red">
                Watch
              </Button>
              <Button ml={2} size="sm" colorScheme="yellow" onClick={onOpen}>
                View Trailer
                <Modal
                  title="View Trailer"
                  videoSrc={{
                    type: "video",
                    sources: [
                      {
                        src: dataAnime.trailer_url,
                        provider: "youtube",
                      },
                    ],
                  }}
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                ></Modal>
              </Button>
            </Box>
          </Box>

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
            <Text color="white" mt={5}>
              Source : {dataAnime.score}
            </Text>
            <Box>
              <Text color="white" fontWeight="bold" mt={2}>
                {" "}
                Genres
                <br />{" "}
              </Text>
              {dataAnime.genres.slice(0, 11).map((item, index) => (
                <Code ml={2} key={index} colorScheme="red">
                  {item}
                </Code>
              ))}
            </Box>
          </MotionBox>
        </Flex>
      </Flex>
    </Box>
  );
}
