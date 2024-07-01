import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
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

const SkillsMobileChart = ({
  skills,
  skillBg,
  skillIconColor,
  color,
}: Props) => {
  const [visibleSkills, setVisibleSkills] = useState(3);

  const loadMoreSkills = () => {
    setVisibleSkills(skills.length); // Show all skills
  };

  const showLessSkills = () => {
    setVisibleSkills(3); // Show only the initial number of skills
  };

  return (
    <Box textAlign="center" px={5} paddingY={8}>
      <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={5}>
        {skills.slice(0, visibleSkills).map((skill, index) => (
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
      {visibleSkills < skills.length ? (
        <Button mt={5} onClick={loadMoreSkills} colorScheme="purple">
          Alle anzeigen
        </Button>
      ) : (
        <Button
          mt={5}
          onClick={showLessSkills}
          colorScheme="purple"
          variant={"outline"}
        >
          Weniger anzeigen
        </Button>
      )}
    </Box>
  );
};

export default SkillsMobileChart;
