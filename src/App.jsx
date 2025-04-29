//Styled components, globalstyle and themeprovider
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
library.add(faSackDollar);
//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Components
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";

//data
import { dataCards } from "./data/dataCards";

const theme = {
  colors: {
    white: "#f1f7f7",
    black: "#030f0f",
    primary: "#03624c",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Navbar />
        <Home dataCards={dataCards} />
        <FontAwesomeIcon icon={faSackDollar} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
