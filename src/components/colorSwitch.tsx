import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { LuMoonStar, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      height={"100%"}
      alignContent={"center"}
      minW={"64px"}
      justifyContent={"center"}
    >
      <Button
        colorScheme={"purple"}
        isActive={colorMode === "dark"}
        variant="link"
        onClick={toggleColorMode}
        _active={{
          border: "none",
        }}
      >
        {colorMode === "dark" ? <LuSun size={32} /> : <LuMoonStar size={32} />}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
