import Header from "../../layout/Header/Header";
import Cards from "../../components/Cards/Cards";
import Investment from "../../layout/Investment/Investment";
import AboutUs from "../../layout/AboutUs/AboutUs";
import CallToAction from "../../layout/CallToAction/CallToAction";
import Contact from "../../layout/Contact/Contact";

import Container from "../../components/Container/Container";
import ReactCompareImage from "react-compare-image";
import before from "../../assets/Images/before.jpg";
import after from "../../assets/Images/after.jpg";

const Home = ({ dataCards }) => {
  return (
    <main>
      <Header />
      <Cards dataCards={dataCards} />
      <Investment />
      <CallToAction />
      <AboutUs />
      <Container>
        <ReactCompareImage
          leftImageCss={{ filter: "brightness(30%)" }}
          leftImage={before}
          sliderLineWidth={2}
          rightImage={after}
          sliderPositionPercentage={0.7}
        />
      </Container>
      <Contact />
    </main>
  );
};

export default Home;
