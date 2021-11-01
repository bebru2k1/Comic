import * as React from "react";
import { Box, chakra, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IAnime } from "../IData/IAnime";
import { motion } from "framer-motion";
import { IEpisodeList } from "../IData/IEpisode";
import { variantsAvatar } from "../animations/animations";
import { IEpisode } from "../IData/IEpisode";
export interface SingleEpisodeProps {
  dataEpisode: IEpisode;
  dataAnime: IAnime;
}
const MotionBox = motion(Box);
const ImageNext = chakra(Image, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ["src", "alt", "layout"].includes(prop),
});

export default function SingleEpisode({
  dataEpisode,
  dataAnime,
}: SingleEpisodeProps) {
  return (
    <Link href={`/anime/${dataAnime.id}/${dataEpisode.number}`} passHref>
      <ChakraLink>
        <MotionBox
          variants={variantsAvatar}
          initial="hidden"
          animate="visible"
          position="relative"
          width="100%"
          height="100%"
          cursor="pointer"
          whileHover={{
            scale: 1.05,
            boxShadow: "rgba(99, 99, 99, 0.4) 0px 4px 10px 0px",
          }}
          flexShrink={0}
        >
          <ImageNext
            src={dataAnime?.banner_image as string}
            alt=""
            layout="fill"
            borderRadius={5}
            boxShadow="rgba(99, 99, 99, 0.4) 0px 4px 10px 0px"
            objectFit="cover"
          />

          <Box
            position="absolute"
            w="100%"
            textAlign="center"
            fontSize={15}
            color="rgb(255, 255, 255)"
            bgColor="rgba(7, 7, 7, 0.5)"
            bottom={0}
            padding={3}
            borderBottomLeftRadius={5}
            borderBottomRightRadius={5}
            d="inline-block"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            width="100%"
          >
            {`Ep ${dataEpisode.number} : ${dataEpisode.title}`}
          </Box>
        </MotionBox>
      </ChakraLink>
    </Link>
  );
}
