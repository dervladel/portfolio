import { Grid, GridItem } from "@chakra-ui/react";
import NavLinks from "./NavLinks";
import ColorModeSwitch from "./colorSwitch";
import LogoImage from "./LogoImage";

const Nav = () => {
  return (
    <Grid
      templateAreas={{
        base: `"menu logo colorMode"`,
        lg: `"logo menu colorMode"`,
      }}
      gridTemplateColumns={{ base: "1fr 1fr 1fr", lg: "auto 1fr auto" }}
      gap={4}
      marginTop={4}
      padding={4}
    >
      <GridItem area="menu">
        <NavLinks />
      </GridItem>
      <GridItem area="logo" justifySelf={"center"}>
        <LogoImage />
      </GridItem>
      <GridItem area="colorMode" display="flex" justifyContent="flex-end">
        <ColorModeSwitch />
      </GridItem>
    </Grid>
  );
};

export default Nav;
