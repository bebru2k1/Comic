import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import axios from "axios";
import { IAnime, IAnimeResponse, IAnimeResponseList } from "../../IData/IAnime";
import { url } from "../../contans";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/react";
import Slide from "../../components/Slide";
import Head from "next/head";
export interface DetailAnimeProps {
  dataAnime: IAnime;
}

export default function DetailAnime({ dataAnime }: DetailAnimeProps) {
  const route = useRouter();
  console.log(dataAnime);
  if (route.isFallback) return <Spinner />;
  return (
    <>
      <Head>
        <title>{dataAnime.titles.en}</title>
      </Head>
      <Slide dataAnime={dataAnime}></Slide>
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
  const response = await axios.get<IAnimeResponse>(`${url}/anime/${id}`);
  console.log(response.data.data);
  return {
    props: {
      dataAnime: response.data.data,
    },
  };
};
