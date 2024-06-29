import { Button, HStack, Hide, Show } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";

const NavLinks = () => {
  const links = ["About", "Skills", "Work", "Contact"];
  return (
    <>
      <Hide above="lg">
        <MobileMenu links={links} />
      </Hide>
      <Show above="lg">
        <HStack justifyContent={"center"} height="100%" gap={5}>
          {links.map((link) => (
            <Button key={link} variant="link" fontSize={"18px"}>
              {link}
            </Button>
          ))}
        </HStack>
      </Show>
    </>
  );
};

export default NavLinks;
