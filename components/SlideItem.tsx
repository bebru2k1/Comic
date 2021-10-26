import * as React from "react";
import { Image, Box, Heading, Text, Code, Flex } from "@chakra-ui/react";
import { variantsAvatar, variantsDescription } from "../animations/animations";
import { motion } from "framer-motion";
export interface SlideItemProps {
  imgavt: string;
  name: string;
  description: string;
}
const MotionBox = motion(Box);
export default function SlideItem({
  imgavt,
  name,
  description,
}: SlideItemProps) {
  console.log(imgavt);
  return (
    <>
      <Flex align="center" justify="space-evenly" zIndex={100}>
        <MotionBox
          width="30%"
          variants={variantsAvatar}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={imgavt}
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
            {name}
          </Heading>
          <Text color="white" mt={5}>
            {description}
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
      {/* <SlideButton
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      ></SlideButton> */}
    </>
  );
}
