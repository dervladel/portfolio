import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaReact,
  FaWordpress,
  FaPhp,
  FaFigma,
  FaJs,
  FaDatabase,
  FaSass,
  FaBootstrap,
  FaVuejs,
  FaGithub,
  FaGit,
  FaJava,
} from "react-icons/fa";
import { SiTypescript, SiChakraui, SiJquery, SiAxios } from "react-icons/si";
interface Probs {
  tech: string;
}
const TechStackIcon = ({ tech }: Probs) => {
  const iconMap: { [key: string]: IconType } = {
    react: FaReact,
    wordpress: FaWordpress,
    typescript: SiTypescript,
    php: FaPhp,
    figma: FaFigma,
    javascript: FaJs,
    mysql: FaDatabase,
    scss: FaSass,
    bootstrap: FaBootstrap,
    vuejs: FaVuejs,
    github: FaGithub,
    git: FaGit,
    java: FaJava,
    chakraui: SiChakraui,
    jquery: SiJquery,
    axios: SiAxios,
  };
  return <Icon as={iconMap[tech]} color="gray.500" boxSize="20px" />;
};

export default TechStackIcon;
