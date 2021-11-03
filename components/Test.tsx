import {
  Box,
  Button,
  HStack,
  Spinner,
  VStack,
  Text,
  Code,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import PlayerVideo from "../components/PlayerVideo";
import SingleEpisode from "../components/SingleEpisode";
import { url } from "../contans/index";
import { IEpisodeList, IEpisodeResponse } from "../IData/IEpisode";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";
import {
  IAnime,
  IAnimeResponse,
  IAnimeResponseList,
  IAnimeResponseSingle,
} from "../IData/IAnime";
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/dist/plyr.css";
SwiperCore.use([FreeMode]);

export default function Test(props: any) {
  const router = useRouter();
  const [pageEpisode, setPageEpisode] = useState(1);
  const [dataEpisodeClient, setDataEpisodeClient] =
    useState<IEpisodeList | null>(null);
  const [perPage, setPerPage] = useState(50);
  const [dataAnimeClient, setDataAnimeClient] = useState<IAnime | null>(null);
  const fetchDataEpisode = async () => {
    try {
      const response = await axios.get<IEpisodeResponse>(
        `${url}/episode?anime_id=11&source=dreamsub&locale=it&page=${pageEpisode}&per_page=${perPage}`
      );
      if (response.status === 200) {
        setDataEpisodeClient(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataAnime = async () => {
    try {
      const response = await axios.get<IAnimeResponseSingle>(
        `${url}/anime/${router.query.id}`
      );
      if (response.status === 200) {
        setDataAnimeClient(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataEpisode();
    fetchDataAnime();
  }, [pageEpisode]);

  return (
    <Box>
      <Box>
        {!dataAnimeClient && !dataEpisodeClient ? (
          <VStack align="center" mt={5}>
            <Spinner />
          </VStack>
        ) : (
          <Box mt={5}>
            <Swiper freeMode={true} slidesPerView={"auto"}>
              {dataEpisodeClient?.documents?.reverse().map((data, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: "250px",
                  }}
                >
                  <Box padding={2} w="250px" height={150}>
                    <SingleEpisode
                      dataAnime={dataAnimeClient}
                      dataEpisode={data}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}
      </Box>
    </Box>
  );
}
