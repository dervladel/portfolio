import { Box, Grid, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import HeaderMobile from "./components/HeaderMobile";
import AboutMe from "./components/AboutMe";
import Wave from "./components/Wave";
import Skills from "./components/Skills";

function App() {
  return (
    <Grid>
      <Box className="nav" zIndex={2} boxShadow={"md"}>
        <Nav />
      </Box>
      <Hide above="lg">
        <HeaderMobile />
      </Hide>
      <Show above="lg">
        <Header />
      </Show>
      <Wave direction="topToBottom" />
      <AboutMe />
      <Skills />
    </Grid>
  );
}

export default App;
