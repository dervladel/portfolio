import { Box, Heading, Image, VStack, Text, HStack } from "@chakra-ui/react";
import me from "../assets/about.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const contactIcons = [
  {
    id: 101,
    icon: FaGithub,
    href: "https://github.com/dervladel",
  },
  { id: 102, icon: IoIosMail, href: "mailto:kontakt@vladimirboginski.de" },
  {
    id: 103,
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/vladimir-boginski-b900a91b2/",
  },
];
const Contact = () => {
  return (
    <Box paddingY={"100px"}>
      <VStack>
        <Heading>Vladimir Boginski</Heading>
        <Text>Software Entwickler</Text>
        <HStack>{}</HStack>
      </VStack>
      <Image
        src={me}
        height="400px"
        position={"absolute"}
        bottom="0"
        right={0}
      />
    </Box>
  );
};

export default Contact;
