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

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export interface SlideProps {}

export default function Slide(props: SlideProps) {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const handleNumber = (number: number, min: number, max: number): number => {
      if (number > max) number = min;
      return number;
    };

    const randomCurrent = setInterval(
      () =>
        setCurrentIndex((currentIndex) => handleNumber(currentIndex + 1, 1, 4)),
      7000
    );
    console.log("ahihi");
    return () => clearInterval(randomCurrent);
  }, []);
  return (
    <Box position="relative" height={700}>
      <Header></Header>

      {sliceData.map((item, index) => (
        <>
          {currentIndex === item.id && (
            <Flex
              height="100%"
              align="center"
              key={index}
              flexDirection="column"
              justify="center"
            >
              {/* <Image src="/imgs/demonslayer.png" alt="" layout="fill"></Image> */}
              <MotionImage
                src={item.imgbg}
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
                    src={item.imgavt}
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
                  <Heading
                    as="h1"
                    fontSize={50}
                    color="white"
                    fontWeight="bold"
                  >
                    {item.name}
                  </Heading>
                  <Text color="white" mt={5}>
                    {item.description}
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
              <SlideButton
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              ></SlideButton>
            </Flex>
          )}
        </>
      ))}
    </Box>
  );
}
