import Header from "../components/Header";
import HotSearchAnime from "../components/HotSearchAnime";
import HotViewsAnime from "../components/HotViewsAnime";
import SingleAnime from "../components/SingleAnime";
import Slide from "../components/Slide";
import Test from "../components/Test";
import Slide1 from "../components/Slide1";
import Head from "next/head";
interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <>
      <Head>
        <title>Anime</title>
      </Head>

      <Slide1></Slide1>
      <HotSearchAnime />
      <HotViewsAnime />
    </>
  );
};

export default Home;
