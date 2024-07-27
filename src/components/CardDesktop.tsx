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
import { FaArrowRightLong } from "react-icons/fa6";

const CardDesktop = ({
  title,
  usedTech,
  desc,
  image,
  viewLink,
  github,
}: Project) => {
  const handleGitClick = () => {
    window.open(github, "_blank");
  };
  const handleViewClick = () => {
    window.open(viewLink, "_blank");
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
            {viewLink != "" && (
              <Button
                colorScheme="purple"
                onClick={handleViewClick}
                className="workViewBtn"
              >
                <HStack>
                  <Text>Jetzt Ansehen</Text>
                  <Box
                    transition="transform 0.2s ease-in-out"
                    _groupHover={{ transform: "translateX(5px)" }}
                  >
                    <Icon as={FaArrowRightLong} boxSize={"20px"} />
                  </Box>
                </HStack>
              </Button>
            )}
            {github != "" && (
              <Button
                variant={"outline"}
                colorScheme="purple"
                onClick={handleGitClick}
              >
                <Icon as={FaGithub} />
              </Button>
            )}
          </ButtonGroup>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CardDesktop;
