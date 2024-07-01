import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
import me from "../assets/about.png";
import ContactIcon from "./ContactIcon";

const contactIcons = [
  {
    id: 101,
    label: "GitHub",
    slug: "github",
    href: "https://github.com/dervladel",
    size: "40px",
  },
  {
    id: 102,
    label: "Mail",
    slug: "mail",
    href: "mailto:kontakt@vladimirboginski.de",
    size: "50px",
  },
  {
    id: 103,
    label: "LinkedIn",
    slug: "linkedin",
    href: "https://www.linkedin.com/in/vladimir-boginski-b900a91b2/",
    size: "40px",
  },
];
const Contact = () => {
  const handleContactClick = (href: string) => {
    window.open(href, "_blank"); // Open githubLink in a new tab
  };
  const color = useColorModeValue("purple.500", "purple.200");
  return (
    <Box paddingY={"100px"} id="contact">
      <VStack>
        <Heading color={color}>Vladimir Boginski</Heading>
        <Text color={color}>Software Entwickler</Text>
        <HStack>
          {contactIcons.map((contact) => (
            <ContactIcon
              id={contact.id}
              slug={contact.slug}
              label={contact.label}
              href={contact.href}
              onContact={(href) => handleContactClick(href)}
              size={contact.size}
              color={color}
            />
          ))}
        </HStack>
      </VStack>
      <Show above="md">
        <Image
          src={me}
          height="400px"
          position={"absolute"}
          bottom="0"
          right={0}
        />
      </Show>
    </Box>
  );
};

export default Contact;
