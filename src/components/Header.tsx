import { Container, Hide, Show } from "@chakra-ui/react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
  return (
    <Container maxW={"container.lg"}>
      <Hide above="md">
        <HeaderMobile />
      </Hide>
      <Show above="md">
        <HeaderDesktop />
      </Show>
    </Container>
  );
};

export default Header;
