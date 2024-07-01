import { Box, Container, Grid, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
}

interface Props {
  skills: Skill[];
  skillBg: string;
  skillIconColor: string;
  color: string;
}
const SkillsDesktop = ({ skills, skillBg, skillIconColor, color }: Props) => {
  return (
    <Container maxW={"container.lg"}>
      <Box textAlign="center" px={5} paddingY={8}>
        <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={5}>
          {skills.map((skill, index) => (
            <Box
              key={index}
              bg={skillBg}
              color={color}
              p={5}
              borderRadius="lg"
              boxShadow="xl"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <skill.icon size="3em" color={skillIconColor} />
              <Text mt={3} fontSize="lg" fontWeight="bold">
                {skill.name}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SkillsDesktop;
