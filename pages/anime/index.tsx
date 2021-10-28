import { Box } from "@chakra-ui/layout";
import axios from "axios";
import * as React from "react";
import Header from "../../components/Header";
import SingleAnime from "../../components/SingleAnime";
import { url } from "../../contans";
import { IAnimeResponse, IAnime, IAnimeResponseList } from "../../IData/IAnime";
import Head from "next/head";
export interface AnimeProps {
  animeData: IAnimeResponseList;
}

export default function Anime({ animeData }: AnimeProps) {
  return (
    <div>
      <Head>
        <title>Anime List</title>
      </Head>
      {/* <Header></Header> */}
      <Box d="flex" maxW="1200px" m="0 auto" flexWrap="wrap">
        {animeData.data.documents.map((data) => (
          <Box padding={2} w="16.6666666667%" height={300} key={data.id}>
            <SingleAnime dataAnime={data} />
          </Box>
        ))}
      </Box>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get<IAnimeResponseList>(`${url}/anime`);

  return {
    props: {
      animeData: response.data,
    },
  };
};
