import { useRef, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Hide,
  Show,
  useColorModeValue,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CardDesktop from "./CardDesktop";
import projects from "../data/projects";
import CardMobile from "./CardMobile";
import SplideClass from "@splidejs/splide";

export interface Project {
  id: number;
  title: string;
  usedTech: string[];
  desc: string;
  image: string;
  github: string;
}

const Work = () => {
  const bg = useColorModeValue("#e2e8f0", "#2d3748");
  const splideRef = useRef<SplideClass | null>(null);

  useEffect(() => {
    if (splideRef.current) {
      // Splide is already mounted
    }
  }, []);

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.go("<");
    }
  };

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go(">");
    }
  };

  return (
    <Box background={bg} id="work" paddingY={"100px"}>
      <Container maxW={"container.xl"}>
        <Heading fontSize="2xl" fontWeight="bold" mb={5} textAlign="center">
          Meine Projekte
        </Heading>
        <Splide
          onMounted={(splide: SplideClass) => {
            splideRef.current = splide;
          }}
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            width: "100%",
            gap: "2rem",
            padding: { top: "50px" },
            arrows: false, // Disable default arrows
          }}
        >
          {projects.map((project: Project) => (
            <SplideSlide key={project.id}>
              <Show above={"md"}>
                <CardDesktop
                  id={project.id}
                  title={project.title}
                  desc={project.desc}
                  image={project.image}
                  usedTech={project.usedTech}
                  github={project.github}
                />
              </Show>
              <Hide above={"md"}>
                <CardMobile
                  id={project.id}
                  title={project.title}
                  desc={project.desc}
                  image={project.image}
                  usedTech={project.usedTech}
                  github={project.github}
                />
              </Hide>
            </SplideSlide>
          ))}
        </Splide>
        <HStack justify="center" mt={4}>
          <IconButton
            icon={<MdChevronLeft />}
            onClick={handlePrev}
            aria-label="Previous"
            variant={"outline"}
            colorScheme="purple"
            fontSize={"32px"}
          />
          <IconButton
            icon={<MdChevronRight />}
            onClick={handleNext}
            aria-label="Next"
            variant={"outline"}
            colorScheme="purple"
            fontSize={"32px"}
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default Work;
