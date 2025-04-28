import Header from "../../layout/Header/Header";
import Cards from "../../components/Cards/Cards";
import Investment from "../../layout/Investment/Investment";
import AboutUs from "../../layout/AboutUs/AboutUs";
import CallToAction from "../../layout/CallToAction/CallToAction";
import Contact from "../../layout/Contact/Contact";

const Home = ({ dataCards }) => {
  return (
    <main>
      <Header />
      <Cards dataCards={dataCards} />
      <Investment />
      <CallToAction />
      <AboutUs />
      <Contact />
    </main>
  );
};

export default Home;
