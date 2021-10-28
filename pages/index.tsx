import Header from "../components/Header";
import HotSearchAnime from "../components/HotSearchAnime";
import HotViewsAnime from "../components/HotViewsAnime";
import SingleAnime from "../components/SingleAnime";
import Slide from "../components/Slide";
import Test from "../components/Test";
import Slide1 from "../components/Slide1";
import Head from "next/head";
import axios from "axios";
import { url } from "../contans";
import { IAnime, IAnimeResponse } from "../IData/IAnime";
interface HomeProps {
  dataAnimeResponse: IAnime[];
}

const Home = ({ dataAnimeResponse }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Anime</title>
      </Head>
      <Slide1></Slide1>
      <HotSearchAnime dataAnime={dataAnimeResponse.slice(0, 16)} />
      <HotViewsAnime dataAnime={dataAnimeResponse.slice(15, 31)} />
    </>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get<IAnimeResponse>(`${url}/random/anime/30`);
  return {
    props: {
      dataAnimeResponse: response.data.data,
    },
  };
};
export default Home;
