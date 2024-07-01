import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
interface Info {
  id: number;
  label: string;
  slug: string;
  href: string;
  onContact: (href: string) => void;
  size: string;
  color: string;
}
const ContactIcon = ({
  id,
  label,
  slug,
  href,
  onContact,
  size,
  color,
}: Info) => {
  const contactIconMap: { [key: string]: IconType } = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: IoIosMail,
  };
  return (
    <Button
      key={id}
      aria-label={label}
      variant="primary"
      colorScheme="purple"
      onClick={() => onContact(href)}
    >
      <Icon
        as={contactIconMap[slug]}
        boxSize={size}
        href={href}
        color={color}
      />
    </Button>
  );
};

export default ContactIcon;
