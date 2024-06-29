import { VStack } from "@chakra-ui/react";
import HeaderImage from "./HeaderImage";
import HeaderText from "./HeaderText";

const HeaderMobile = () => {
  return (
    <>
      <VStack>
        <HeaderImage isMobile={true} />
        <HeaderText isMobile={true} />
      </VStack>
    </>
  );
};

export default HeaderMobile;
