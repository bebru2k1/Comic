import { Flex, Heading, Box } from "@chakra-ui/layout";
import * as React from "react";
import SingleAnime from "./SingleAnime";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { FreeMode } from "swiper";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export interface HotSearchAnimeProps {}
SwiperCore.use([FreeMode]);

export default function HotSearchAnime(props: HotSearchAnimeProps) {
  const fakeImage = [
    "/imgs/onepieceavt.jpg",
    "/imgs/demonslayeravt.png",
    "/imgs/narutoavt.jpg",
    "/imgs/jujutsuavt.png",
    "/imgs/onepieceavt.jpg",
    "/imgs/demonslayeravt.png",
    "/imgs/narutoavt.jpg",
    "/imgs/jujutsuavt.png",
    "/imgs/onepieceavt.jpg",
    "/imgs/onepieceavt.jpg",
    "/imgs/onepieceavt.jpg",
    "/imgs/onepieceavt.jpg",
  ];
  return (
    <>
      <Heading ml={5} mt={10} color="teal">
        PHIM HOT TRONG TUẦN
      </Heading>
      <Swiper spaceBetween={10} freeMode={true} slidesPerView={"auto"}>
        {fakeImage.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "200px",
            }}
          >
            <SingleAnime dataAnime={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        variant="link"
        colorScheme="red"
        rightIcon={<ArrowForwardIcon />}
        marginRight="auto"
        float="right"
        mr={2}
      >
        Xem Thêm
      </Button>
    </>
  );
}
