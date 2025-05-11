//Styled components, globalstyle and themeprovider
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CookieConsent from "react-cookie-consent";
//Components
import Paragraph from "./components/Paragraph/Paragraph";
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CompletedConstructions from "./pages/CompletedConstructions/CompletedConstructions";
import Footer from "./layout/Footer/Footer";
import ScrollToTop from "./utilites/scrollToTop";

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

        <Router>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home dataCards={dataCards} />} />
            <Route path="/realizacje" element={<CompletedConstructions />} />
          </Routes>
        </Router>

        <Footer />

        <CookieConsent
          style={{
            background: `${theme.colors.primary}`,
            fontSize: "14px",
            color: `${theme.colors.white}`,
          }}
          buttonText="Zgoda"
          buttonStyle={{
            color: `${theme.colors.white}`,
            background: `${theme.colors.black}`,
            fontSize: "14px",
            borderRadius: "20px",
            padding: "10px 15px",
          }}
        >
          <Paragraph>
            Ta strona może korzystać z plików cookie w celu zwiększenia komfortu
            użytkowania.
          </Paragraph>
        </CookieConsent>
      </ThemeProvider>
    </>
  );
}

export default App;
