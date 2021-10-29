import { Box } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useMemo, useState, useRef } from "react";
import Header from "../../components/Header";
import SingleAnime from "../../components/SingleAnime";
import { url } from "../../contans";
import { IAnimeResponse, IAnime, IAnimeResponseList } from "../../IData/IAnime";
import Head from "next/head";
import { GetServerSideProps, GetStaticProps } from "next";
import Pagination from "../../components/Pagination";
import { useRouter } from "next/router";
export interface AnimeProps {
  animeData: IAnimeResponseList;
}

export default function Anime({ animeData }: AnimeProps) {
  const [reRender, setRerender] = useState({});
  const route = useRouter();
  let queryPage = useRef<number>(1);

  useEffect(() => {
    if (!route.query.page) {
      route.push("/anime?page=1");
      queryPage.current = 1;
    }

    if (typeof route.query.page === "string") {
      queryPage.current = +route.query.page;
      setRerender({});
    }
  }, [route.query.page]);

  return (
    <div>
      <Head>
        <title>Anime List</title>
      </Head>
      <Header></Header>
      <Box maxW="1200px" m="0 auto">
        <Box d="flex" flexWrap="wrap">
          {animeData.data.documents.map((data) => (
            <Box padding={2} w="16.6666666667%" height={300} key={data.id}>
              <SingleAnime dataAnime={data} />
            </Box>
          ))}
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Pagination
            totalPage={100}
            currentPage={queryPage.current || 1}
          ></Pagination>
        </Box>
      </Box>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let response;
  if (!query.page) {
    response = await axios.get<IAnimeResponseList>(`${url}/anime`);
  } else {
    response = await axios.get<IAnimeResponseList>(
      `${url}/anime?page=${query.page}&per_page=20`
    );
  }

  return {
    props: {
      animeData: response.data,
    },
  };
};
