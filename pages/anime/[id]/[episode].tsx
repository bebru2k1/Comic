import { Box, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import * as React from "react";
import { url } from "../../../contans";
import { IEpisodeList, IEpisodeResponse } from "../../../IData/IEpisode";

export interface EpisodePageProps {
  dataEpisode: IEpisodeList;
}

export default function EpisodePage({ dataEpisode }: EpisodePageProps) {
  const router = useRouter();
  if (router.isFallback) return <Spinner />;
  return <Box>day la episode</Box>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await axios.get<IEpisodeResponse>(
    `${url}/episode?anime_id=${params!.episode}&source=dreamsub&locale=it&per_page=20`
  );

  return {
    props: {
      dataEpisode: response.data.data,
    },
  };
};
