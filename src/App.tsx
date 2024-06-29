import { Grid, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import HeaderMobile from "./components/HeaderMobile";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Grid gap={4} marginTop={2} padding={4}>
      <Nav />
      <Hide above="lg">
        <HeaderMobile />
      </Hide>
      <Show above="lg">
        <Header />
      </Show>
      <AboutMe></AboutMe>
    </Grid>
  );
}

export default App;
