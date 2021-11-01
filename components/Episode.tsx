import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Heading,
  Text,
  Code,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { IAnime } from "../IData/IAnime";
import * as React from "react";
import { IEpisodeList } from "../IData/IEpisode";
import SingleEpisode from "./SingleEpisode";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";

SwiperCore.use([FreeMode]);

export interface EpisodeProps {
  dataAnime: IAnime;
  dataEpisode: IEpisodeList;
  isLoading: boolean;
}

export default function Episode({
  dataAnime,
  dataEpisode,
  isLoading,
}: EpisodeProps) {
  return (
    <Box mt={5} padding={5}>
      <Box>
        <Text fontSize={20} fontWeight="bold" colorScheme="red" mb={5}>
          Episode
        </Text>
        <Box maxHeight={200}>
          {/* {[...Array(dataAnime.episodes_count)]
            .map((item, index) => index)
            .reverse()
            .slice(0, 20)
            .map((index) => (
              <Button colorScheme="red" key={index} m={1} w={20}>
                {" "}
                {index + 1}
              </Button>
            ))} */}
          {isLoading ? (
            <Spinner />
          ) : (
            <Box>
              <Swiper freeMode={true} slidesPerView={"auto"}>
                {dataEpisode?.documents
                  .reverse()
                  .slice(0, 10)
                  .map((data, index) => (
                    <SwiperSlide
                      key={index}
                      style={{
                        width: "250px",
                      }}
                    >
                      <Box padding={2} w="250px" height={150}>
                        <SingleEpisode
                          dataAnime={dataAnime}
                          dataEpisode={data}
                        />
                      </Box>
                    </SwiperSlide>
                  ))}
                <SwiperSlide
                  style={{
                    width: "250px",
                  }}
                >
                  <Box padding={2} w="250px" height={150} borderRadius={5}>
                    <Box
                      p={2}
                      bg="gray.700"
                      w="100%"
                      h="100%"
                      borderRadius={5}
                      d="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize={20}
                      fontWeight="bold"
                      cursor="pointer"
                    >
                      More ...
                    </Box>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Box>
          )}
        </Box>
      </Box>
      <Box w="400px">
        <Text fontSize={20} fontWeight="bold" colorScheme="red" mb={5}>
          Infomation
        </Text>
        <Flex flexDirection="column">
          <Flex>
            <Box w="50%">
              <Code colorScheme="red">Episodes Count</Code>
            </Box>
            <Box w="50%">
              <Code colorScheme="yellow">{dataAnime.episodes_count}</Code>
            </Box>
          </Flex>
          <Divider mt={2} mb={2} />
          <Flex>
            <Box w="50%">
              <Code colorScheme="red">Episode Duration</Code>
            </Box>
            <Box w="50%">
              <Code colorScheme="yellow">{dataAnime.episode_duration}</Code>
            </Box>
          </Flex>
          <Divider mt={2} mb={2} />
          <Flex>
            <Box w="50%">
              <Code colorScheme="red">Score</Code>
            </Box>
            <Box w="50%">
              <Code colorScheme="yellow">{dataAnime.score}</Code>
            </Box>
          </Flex>
          <Divider mt={2} mb={2} />
          <Flex>
            <Box w="50%">
              <Code colorScheme="red">Start Date</Code>
            </Box>

            <Box w="50%">
              <Code colorScheme="yellow">
                {dataAnime.start_date.slice(0, 10)}
              </Code>
            </Box>
          </Flex>
          <Divider mt={2} mb={2} />

          <Flex>
            <Box w="50%">
              <Code colorScheme="red">End Date</Code>
            </Box>
            <Box w="50%">
              <Code colorScheme="yellow">
                {dataAnime.end_date.slice(0, 10)}
              </Code>
            </Box>
          </Flex>
          <Divider mt={2} mb={2} />
        </Flex>
      </Box>
    </Box>
  );
}
