import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import NavLinks from "./NavLinks";
import ColorModeSwitch from "./colorSwitch";
import LogoImage from "./LogoImage";

const Nav = () => {
  const bg = useColorModeValue("#FFFFFF", "#1A202C");
  return (
    <Grid
      templateAreas={{
        base: `"menu logo colorMode"`,
        lg: `"logo menu colorMode"`,
      }}
      gridTemplateColumns={{ base: "1fr 1fr 1fr", lg: "auto 1fr auto" }}
      marginTop={0}
      padding={2}
      background={bg}
      width="100%"
    >
      <GridItem area="menu" display="flex" justifyContent="flex-start">
        <NavLinks />
      </GridItem>
      <GridItem area="logo" display="flex" justifyContent="center">
        <LogoImage />
      </GridItem>
      <GridItem area="colorMode" display="flex" justifyContent="flex-end">
        <ColorModeSwitch />
      </GridItem>
    </Grid>
  );
};

export default Nav;
