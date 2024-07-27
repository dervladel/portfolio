import { Image } from "@chakra-ui/react";
import memoji from "../assets/memoji.webp";
interface Probs {
  isMobile: boolean;
}
const HeaderImage = ({ isMobile }: Probs) => {
  return (
    <Image boxSize={isMobile ? "250px" : "350px"} src={memoji} alt="Memoji" />
  );
};

export default HeaderImage;
