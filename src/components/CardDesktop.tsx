import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Project } from "./Work";
import TechStackIcon from "./TechStackIcon";
import { FaGithub } from "react-icons/fa";

const CardDesktop = ({ title, usedTech, desc, image, github }: Project) => {
  const handleGitClick = () => {
    window.open(github, "_blank"); // Open githubLink in a new tab
  };
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      h={"400px"}
      boxShadow={"lg"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "35%" }}
        src={image}
        alt="Caffe Latte"
        objectPosition={"0% 40%"}
      />
      <Stack>
        <CardBody>
          <Box marginY={6}>
            <Heading as={"h3"} size="lg">
              {title}
            </Heading>
            <Text py="2" size="lg" maxW={"80%"}>
              {desc}
            </Text>
            <HStack>
              {usedTech.map((tech, index) => (
                <TechStackIcon key={index} tech={tech} />
              ))}
            </HStack>
          </Box>
          <ButtonGroup>
            <Button
              variant={"outline"}
              colorScheme="purple"
              onClick={handleGitClick}
            >
              <Icon as={FaGithub} />
            </Button>
          </ButtonGroup>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CardDesktop;
