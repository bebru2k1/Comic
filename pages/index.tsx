import Header from "../components/Header";
import HotSearchAnime from "../components/HotSearchAnime";
import HotViewsAnime from "../components/HotViewsAnime";
import SingleAnime from "../components/SingleAnime";
import Slide from "../components/Slide";
import Test from "../components/Test";
import Slide1 from "../components/Slide1";
interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <>
      {/* <Header></Header> */}
      {/* <Slide></Slide> */}
      <Slide1></Slide1>
      <HotSearchAnime />
      <HotViewsAnime />
      <Test />
    </>
  );
};

export default Home;
