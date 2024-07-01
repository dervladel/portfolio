import { Grid, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import HeaderMobile from "./components/HeaderMobile";
import AboutMe from "./components/AboutMe";
import Wave from "./components/Wave";

function App() {
  return (
    <Grid marginTop={2}>
      <Nav />
      <Hide above="lg">
        <HeaderMobile />
      </Hide>
      <Show above="lg">
        <Header />
      </Show>
      <Wave direction="topToBottom" />
      <AboutMe />
    </Grid>
  );
}

export default App;
