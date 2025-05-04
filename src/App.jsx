//Styled components, globalstyle and themeprovider
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//Components
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CompletedConstructions from "./pages/CompletedConstructions/CompletedConstructions";
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

        <Router>
          <Navbar />

          <Routes>
            <Route path="/velaSite" element={<Home dataCards={dataCards} />} />
            <Route
              path="/velaSite/realizacje"
              element={<CompletedConstructions />}
            />
          </Routes>
        </Router>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
