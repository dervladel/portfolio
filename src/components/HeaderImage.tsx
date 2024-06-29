import { Image } from "@chakra-ui/react";
import memoji from "../assets/memoji.png";
interface Probs {
  isMobile: boolean;
}
const HeaderImage = ({ isMobile }: Probs) => {
  return (
    <Image boxSize={isMobile ? "200px" : "350px"} src={memoji} alt="Memoji" />
  );
};

export default HeaderImage;
