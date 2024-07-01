import { useColorModeValue, Button } from "@chakra-ui/react";

const CardButton = ({ children, ...rest }) => {
  const linkStyles = {
    display: "inline-block",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "0.25rem",
    cursor: "pointer",
    color: useColorModeValue("white", "gray.800"),
    bg: useColorModeValue("blue.500", "blue.300"),
    _hover: {
      textDecoration: "none",
      bg: useColorModeValue("blue.600", "blue.400"),
    },
    _focus: {
      boxShadow: "outline",
    },
    _active: {
      bg: useColorModeValue("blue.700", "blue.500"),
    },
  };

  return (
    <Button sx={linkStyles} {...rest}>
      {children}
    </Button>
  );
};

export default CardButton;
