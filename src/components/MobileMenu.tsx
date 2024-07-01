import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Link,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

interface Probs {
  links: string[];
}
const MobileMenu = ({ links }: Probs) => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="link"
        padding={0}
        height="100%"
      >
        <Hamburger toggled={isSidebarOpen} size={32} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => {
          onClose();
          setSideBarOpen(false);
        }}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerBody>
            <VStack padding={10} gap={6}>
              {links.map((link) => (
                <Link
                  href={"/#" + link.toLowerCase()}
                  alignContent={"center"}
                  key={link + "1"}
                  fontSize={"32px"}
                  variant="link"
                  width={"fit-content"}
                  onClick={() => {
                    onClose();
                    setSideBarOpen(false);
                  }}
                >
                  {link}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
