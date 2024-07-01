import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import topToBottomDark from "../assets/waveTopToBottomDark.svg";
import bottomToTopDark from "../assets/waveBottomToTopDark.svg";
import bottomToTopLight from "../assets/waveBottomToTopLight.svg";
import topToBottomLight from "../assets/waveTopToBottomLight.svg";
interface Probs {
  direction: string;
}
const Wave = ({ direction }: Probs) => {
  const bg = useColorModeValue("#e2e8f0", "#2d3748");
  const waveKindTopToBottom = useColorModeValue(
    topToBottomLight,
    topToBottomDark
  );
  const waveKindBottomToTop = useColorModeValue(
    bottomToTopLight,
    bottomToTopDark
  );

  return (
    <Box background={bg}>
      {direction === "topToBottom" ? (
        <Image src={waveKindTopToBottom} />
      ) : (
        <Image src={waveKindBottomToTop} />
      )}
    </Box>
  );
};

export default Wave;
