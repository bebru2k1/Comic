import { Flex, Heading, Box } from "@chakra-ui/layout";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IAnime } from "../IData/IAnime";
import SingleAnime from "./SingleAnime";
import Test from "./Test";
export interface HotSearchAnimeProps {
  dataAnime: IAnime[];
}
SwiperCore.use([FreeMode]);

export default function HotSearchAnime({ dataAnime }: HotSearchAnimeProps) {
  return (
    <>
      <Heading ml={5} mt={10} color="teal">
        PHIM HOT TRONG TUẦN
      </Heading>
      <Box mt={5}>
        <Swiper spaceBetween={10} freeMode={true} slidesPerView={"auto"}>
          {dataAnime.map((item) => (
            <SwiperSlide
              key={item.id}
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
    </>
  );
}
