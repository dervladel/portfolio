import { HStack, Hide, Link, Show } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";

const NavLinks = () => {
  const links = ["Home", "About", "Skills", "Work", "Contact"];
  return (
    <>
      <Hide above="lg">
        <MobileMenu links={links} />
      </Hide>
      <Show above="lg">
        <HStack justifyContent={"center"} height="100%" gap={5}>
          {links.map((link) => (
            <Link
              href={"/#" + link.toLowerCase()}
              key={link}
              variant="link"
              fontSize={"18px"}
            >
              {link}
            </Link>
          ))}
        </HStack>
      </Show>
    </>
  );
};

export default NavLinks;
