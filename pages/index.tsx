import Header from "../components/Header";
import HotSearchAnime from "../components/HotSearchAnime";
import HotViewsAnime from "../components/HotViewsAnime";
import SingleAnime from "../components/SingleAnime";
import Slide from "../components/Slide";
interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <>
      {/* <Header></Header> */}
      <Slide></Slide>
      <HotSearchAnime />
      <HotViewsAnime />
    </>
  );
};

export default Home;
