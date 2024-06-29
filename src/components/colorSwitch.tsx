import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { LuMoonStar, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack height={"100%"} alignContent={"center"}>
      <Button
        isActive={colorMode === "dark"}
        variant="link"
        onClick={toggleColorMode}
        _active={{
          border: "none",
        }}
      >
        {colorMode === "dark" ? <LuSun size={20} /> : <LuMoonStar size={20} />}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
