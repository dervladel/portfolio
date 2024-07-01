import { Box, Hide, Show, Text, useColorModeValue } from "@chakra-ui/react";
import {
  FaWordpress,
  FaFigma,
  FaPhp,
  FaJs,
  FaDatabase,
  FaSass,
  FaBootstrap,
  FaVuejs,
  FaGithub,
  FaGit,
  FaJava,
  FaReact,
} from "react-icons/fa";
import { SiChakraui, SiJquery, SiTypescript, SiAxios } from "react-icons/si";
import SkillsMobileChart from "./SkillsMobileChart";
import SkillsDesktop from "./SkillsDesktop";

const skills = [
  { name: "React", icon: FaReact },
  { name: "wordpress", icon: FaWordpress },
  { name: "Typescript", icon: SiTypescript },
  { name: "php", icon: FaPhp },
  { name: "Figma", icon: FaFigma },
  { name: "JavaScript", icon: FaJs },
  { name: "mySQL", icon: FaDatabase },
  { name: "SCSS", icon: FaSass },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Vue.js", icon: FaVuejs },
  { name: "GitHub", icon: FaGithub },
  { name: "Git", icon: FaGit },
  { name: "Java", icon: FaJava },
  { name: "ChakraUi", icon: SiChakraui },
  { name: "jQuery", icon: SiJquery },
  { name: "Axios", icon: SiAxios },
];

const Skills = () => {
  const bg = useColorModeValue("#e2e8f0", "#2d3748");
  const skillBg = useColorModeValue("white", "gray.800");
  const skillIconColor = useColorModeValue("#805AD5", "#D6BCFA");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box
      textAlign="center"
      px={5}
      background={bg}
      paddingY={"100px"}
      id="skills"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Meine Skills
      </Text>

      <Hide above="md">
        <SkillsMobileChart
          skills={skills}
          skillBg={skillBg}
          skillIconColor={skillIconColor}
          color={color}
        />
      </Hide>
      <Show above="md">
        <SkillsDesktop
          skills={skills}
          skillBg={skillBg}
          skillIconColor={skillIconColor}
          color={color}
        />
      </Show>
    </Box>
  );
};

export default Skills;
