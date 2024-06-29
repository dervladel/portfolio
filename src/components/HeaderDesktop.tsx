import { HStack } from "@chakra-ui/react";
import HeaderImage from "./HeaderImage";
import HeaderText from "./HeaderText";

const HeaderDesktop = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} marginY={"125px"}>
        <HeaderText isMobile={false} />
        <HeaderImage isMobile={false} />
      </HStack>
    </>
  );
};

export default HeaderDesktop;
