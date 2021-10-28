import { Flex, Heading, Box } from "@chakra-ui/layout";
import * as React from "react";
import SingleAnime from "./SingleAnime";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IAnime } from "../IData/IAnime";

SwiperCore.use([FreeMode]);
export interface HotViewsAnimeProps {
  dataAnime: IAnime[];
}
export default function HotViewsAnime({ dataAnime }: HotViewsAnimeProps) {
  return (
    <>
      <Heading ml={5} mt={10} color="teal">
        PHIM NHIỀU NGƯỜI XEM
      </Heading>
      <Box mt={5}>
        <Swiper spaceBetween={10} freeMode={true} slidesPerView={"auto"}>
          {dataAnime.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "200px",
              }}
            >
              <Box w={200} height={300}>
                <SingleAnime dataAnime={item} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
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
      <Box mb={10}></Box>
    </>
  );
}
