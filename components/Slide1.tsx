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
import { Button, chakra } from "@chakra-ui/react";
import SlideButton from "./SlideButton";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Test from "./Test";
import SlideItem from "./SlideItem";
import "swiper/css";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const SwiperChakra = chakra(Swiper);
export interface SlideProps {}
export default function Slide1(props: SlideProps) {
  const [currentIndex, setCurrentIndex] = useState(1);

  // useEffect(() => {
  //   const handleNumber = (number: number, min: number, max: number): number => {
  //     if (number > max) number = min;
  //     return number;
  //   };

  //   const randomCurrent = setInterval(
  //     () =>
  //       setCurrentIndex((currentIndex) => handleNumber(currentIndex + 1, 1, 4)),
  //     7000
  //   );
  //   console.log("ahihi");
  //   return () => clearInterval(randomCurrent);
  // }, []);
  return (
    <Swiper className="mySwiper">
      <Header />
      {sliceData.map((item, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <Box position="relative" height={700}>
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
                {isActive && (
                  <SlideItem
                    name={item.name}
                    description={item.description}
                    imgavt={item.imgavt}
                  />
                )}
              </Flex>
            </Box>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
