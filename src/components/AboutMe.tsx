import { Box, useColorModeValue } from "@chakra-ui/react";

const AboutMe = () => {
  const bg = useColorModeValue("#e2e8f0", "#2d3748");
  return (
    <>
      <Box background={bg}>Here</Box>
    </>
  );
};

export default AboutMe;
