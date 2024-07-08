import {
  Box,
  Container,
  Hide,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
import AboutMeCard from "./AboutMeCard";
import AboutMeCardDesktop from "./AboutMeCardDesktop";

const AboutMe = () => {
  const bg = useColorModeValue("#e2e8f0", "#2d3748");
  return (
    <>
      <Box background={bg} id="about">
        <Container marginY={"50px"} maxW={"container.lg"} paddingY={"50px"}>
          <Hide above="md">
            <AboutMeCard />
          </Hide>
          <Show above="md">
            <AboutMeCardDesktop />
          </Show>
        </Container>
      </Box>
    </>
  );
};

export default AboutMe;
