import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Button,
  Icon,
  Card,
  useColorModeValue,
} from "@chakra-ui/react";
import { Project } from "./Work";
import TechStackIcon from "./TechStackIcon";
import { FaGithub } from "react-icons/fa";
const CardMobile = ({ title, usedTech, desc, image, github }: Project) => {
  const cardBg = useColorModeValue("#FFFFFF", "#1A202C");
  const handleGitClick = () => {
    window.open(github, "_blank"); // Open githubLink in a new tab
  };
  return (
    <Box>
      <Card alignItems={"center"} padding="14px 0 14px 0" bg={cardBg}>
        <Image
          src={image}
          width={"80%"}
          maxH={"350px"}
          objectFit={"cover"}
          borderRadius={15}
          marginBottom={"16px"}
        />
        <VStack gap={"32px"} w={"80%"}>
          <VStack w={"100%"} alignItems={"left"} gap={"16px"}>
            <Heading textAlign={"left"}>{title}</Heading>
            <Text textAlign={"left"} fontSize={"md"}>
              {desc}
            </Text>
            <HStack w={"100%"}>
              {usedTech.map((tech, index) => (
                <TechStackIcon key={index} tech={tech} />
              ))}
            </HStack>
          </VStack>
          <VStack w={"80%"}>
            <Button colorScheme="purple" w={"100%"}>
              Jetzt ansehen!
            </Button>
            <Button
              variant={"outline"}
              colorScheme="purple"
              onClick={handleGitClick}
              w={"100%"}
            >
              <Icon as={FaGithub} boxSize={"28px"} />
            </Button>
          </VStack>
        </VStack>
      </Card>
    </Box>
  );
};

export default CardMobile;