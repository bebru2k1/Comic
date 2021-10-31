import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  IAnime,
  IAnimeResponse,
  IAnimeResponseList,
} from "../../../IData/IAnime";
import { url } from "../../../contans";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/react";
import Slide from "../../../components/Slide";
import Head from "next/head";
import Episode from "../../../components/Episode";
import { IEpisodeList, IEpisodeResponse } from "../../../IData/IEpisode";
import SingleEpisode from "../../../components/SingleEpisode";

export interface DetailAnimeProps {
  dataAnime: IAnime;
  // dataEpisode: IEpisodeList;
}

export default function DetailAnime({ dataAnime }: DetailAnimeProps) {
  const route = useRouter();

  const [dataEpisode, setDataEpisode] = useState<IEpisodeList | null>(null);
  const [error, setError] = useState("");
  const fetchDataEpisode = async () => {
    const response = await axios.get<IEpisodeResponse>(
      `${url}/episode?anime_id=11&source=dreamsub&locale=it&page=2&per_page=20`
    );
    if (response.status === 200) {
      setDataEpisode(response.data.data);
    } else {
      setError("NOT FOUND");
    }
  };
  useEffect(() => {
    fetchDataEpisode();
  }, []);

  if (route.isFallback) return <Spinner />;

  return (
    <>
      <Head>
        <title>{dataAnime.titles.en}</title>
      </Head>
      <Slide dataAnime={dataAnime}></Slide>
      <Episode
        dataAnime={dataAnime}
        dataEpisode={dataEpisode as IEpisodeList}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const response = await axios.get<IAnimeResponseList>(`${url}/anime`);
  const paths = response.data.data.documents.map((data) => ({
    params: { id: data.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id;
  const responseAnime = await axios.get<IAnimeResponse>(`${url}/anime/${id}`);

  return {
    props: {
      dataAnime: responseAnime.data.data,
    },
  };
};
