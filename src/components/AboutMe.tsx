import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import AboutMeCard from "./AboutMeCard";

const AboutMe = () => {
  const bg = useColorModeValue("#e2e8f0", "#2d3748");
  return (
    <>
      <Box background={bg} id="about">
        <Container marginY={"50px"} maxW={"container.lg"} paddingY={"50px"}>
          <AboutMeCard />
        </Container>
      </Box>
    </>
  );
};

export default AboutMe;
