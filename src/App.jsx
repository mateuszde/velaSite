import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";

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
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
