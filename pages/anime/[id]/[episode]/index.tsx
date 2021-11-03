import {
  Box,
  Button,
  Code,
  Heading,
  Select,
  Text,
  VStack,
  chakra,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import "plyr-react/dist/plyr.css";
import * as React from "react";
import dynamic from "next/dynamic";
const Video = dynamic<any>(
  () => import("react-html5video").then((mod) => mod.DefaultPlayer),
  { ssr: false }
);

import "react-html5video/dist/styles.css";
import SwiperCore, { FreeMode } from "swiper";
import Header from "../../../../components/Header";
import Test from "../../../../components/Test";
import { url } from "../../../../contans";
import { IEpisodeList, IEpisodeResponse } from "../../../../IData/IEpisode";
SwiperCore.use([FreeMode]);

export interface EpisodePageProps {
  dataEpisode: IEpisodeList;
}

export default function EpisodePage({ dataEpisode }: EpisodePageProps) {
  const router = useRouter();

  return (
    <Box maxW="1200px" m="0 auto">
      <Header />
      <VStack align="center">
        <Box>
          <Heading>
            You are watching
            <chakra.span color="red.200"> Onepiece</chakra.span>
          </Heading>
        </Box>
        <Text fontWeight="bold">Server</Text>
        <Flex align="center" justify="center">
          <Button colorScheme="red" size="sm">
            Dreamsub
          </Button>
          <Button colorScheme="red" size="sm" ml={5}>
            GogoAnime
          </Button>
        </Flex>
      </VStack>
      <Box mt={5} p={2}>
        <Video
          autoPlay
          loop
          muted
          controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          poster="http://sourceposter.jpg"
          onCanPlayThrough={() => {
            // Do stuff
          }}
          src={dataEpisode.documents[0].video}
        ></Video>

        <Box mt={2}>
          <Heading
            fontSize={30}
          >{`Episode ${dataEpisode.documents[0].number}: ${dataEpisode.documents[0].title}`}</Heading>
        </Box>
      </Box>

      <Test />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get<IEpisodeResponse>(
    `${url}/episode?anime_id=11&number=${
      params!.episode
    }&source=dreamsub&locale=it`
  );

  return {
    props: {
      dataEpisode: response.data.data,
    },
  };
};
