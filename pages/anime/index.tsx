import { Box } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const route = useRouter();
  console.log(route);

  useEffect(() => {
    if (route.query.page === "string") {
      setCurrentPage(+route.query.page);
    }
  }, [route.query]);

  useEffect(() => {
    route.push(`?page=${currentPage}`);
  }, [currentPage]);

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
            setCurrentPage={setCurrentPage}
            totalPage={100}
            currentPage={currentPage}
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
      `${url}/anime?page=${query.page}`
    );
  }

  return {
    props: {
      animeData: response.data,
    },
  };
};
