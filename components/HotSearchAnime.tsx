import { Flex, Heading } from "@chakra-ui/layout";
import * as React from "react";
import SingleAnime from "./SingleAnime";

export interface HotSearchAnimeProps {}

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
  ];
  return (
    <>
      <Heading ml={5} mt={10} color="teal">
        PHIM HOT TRONG TUẦN
      </Heading>
      <Flex flexWrap="nowrap" overflowX="auto" flexFlow="row nowrap">
        {fakeImage.map((item, index) => (
          <SingleAnime key={index} dataAnime={item} />
        ))}
      </Flex>
    </>
  );
}
