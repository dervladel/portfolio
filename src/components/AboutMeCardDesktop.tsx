import { Card, CardBody, Stack, Image } from "@chakra-ui/react";

import meImg from "../assets/me.webp";
import AboutMeCard from "./AboutMeCard";
const AboutMeCardDesktop = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      minH={"450px"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "300px" }}
        src={meImg}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody className="aboutMeCardDesktop">
          <AboutMeCard />
        </CardBody>
      </Stack>
    </Card>
  );
};

export default AboutMeCardDesktop;
