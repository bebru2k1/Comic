import { Flex, Heading } from "@chakra-ui/layout";
import * as React from "react";
import SingleAnime from "./SingleAnime";

export interface HotViewsAnimeProps {}

export default function HotViewsAnime(props: HotViewsAnimeProps) {
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
  ];
  return (
    <>
      <Heading ml={5} mt={10} color="teal">
        PHIM NHIỀU NGƯỜI XEM
      </Heading>
      <Flex
        flexWrap="nowrap"
        overflowX="auto"
        overflowY="hidden"
        flexFlow="row nowrap"
        sx={{
          "&::-webkit-scrollbar": {
            height: "12px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgb(138, 138, 138)",
            borderRadius: "2px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(58, 58, 58)",
            borderRadius: "2px",
          },
        }}
      >
        {fakeImage.map((item, index) => (
          <SingleAnime key={index} dataAnime={item} />
        ))}
      </Flex>
    </>
  );
}
