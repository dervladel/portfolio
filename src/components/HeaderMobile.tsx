import { VStack } from "@chakra-ui/react";
import HeaderImage from "./HeaderImage";
import HeaderText from "./HeaderText";

const HeaderMobile = () => {
  return (
    <>
      <VStack padding={4} marginY={"20px"}>
        <HeaderImage isMobile={true} />
        <HeaderText isMobile={true} />
      </VStack>
    </>
  );
};

export default HeaderMobile;
