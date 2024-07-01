import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";

interface Probs {
  isMobile: boolean;
}
const HeaderText = ({ isMobile }: Probs) => {
  const marginBottom = 3;
  return (
    <>
      <Box maxW={"md"} alignItems={"center"}>
        <Heading as={"h1"} marginBottom={marginBottom}>
          Hey ich bin Vladimir <span className="wave">👋</span> !
        </Heading>
        <Text fontSize={isMobile ? "16px" : "18px"} marginBottom={marginBottom}>
          ein begeisterter Softwareentwickler mit einem Fokus auf
          Webentwicklung. Ich liebe es, mit modernen Tools und Technologien
          kreative und benutzerfreundliche Webanwendungen zu bauen. Schau dir
          meine Projekte an und erfahre mehr über das, was ich mache!
        </Text>
        {isMobile ? (
          <HStack>
            <Button colorScheme="purple" color={"white"} width="50%">
              Über Mich
            </Button>
            <Button colorScheme="purple" variant={"outline"}>
              Meine Skills
            </Button>
          </HStack>
        ) : (
          <HStack marginTop={marginBottom}>
            <Button
              colorScheme="purple"
              color={"white"}
              width="50%"
              boxShadow="0 4px 14px 0 rgba(128, 90, 213, 0.39)"
            >
              Über Mich
            </Button>
            <Button
              colorScheme="purple"
              variant={"outline"}
              boxShadow="0 2px 10px 0 rgba(128, 90, 213, 0.2)"
            >
              Meine Skills
            </Button>
          </HStack>
        )}
      </Box>
    </>
  );
};

export default HeaderText;
