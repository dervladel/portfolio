import { Box, HStack, Text, Icon, useColorModeValue } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import "../styles/CardStyles.css";

const AboutMeCard = () => {
  const bracketColor = useColorModeValue("#0431FA", "#FFD602");
  const valueColor = useColorModeValue("#853E65", "#FB6A5D");
  const keyColor = useColorModeValue("#0F68A1", "#83C9BC");
  const intColor = useColorModeValue("#313E7D", "#D0BF69");
  const headerColor = useColorModeValue("#F5F5F5", "#282831");
  const headerTabColor = useColorModeValue("#FFFFFF", "#32323B");
  const tabColor = useColorModeValue("#3D3D3D", "#FFFFFF");
  const windowBg = useColorModeValue("#FFFFFF", "#292B36");
  const windowColor = useColorModeValue("#333333", "#abb2bf");
  return (
    <Box
      className="json-card"
      borderRadius="md"
      boxShadow="xl"
      margin="0 auto"
      bg={windowBg}
      color={windowColor}
      fontFamily="'Arial', monospace"
    >
      <Box
        className="json-header"
        mb={4}
        color="#282831"
        borderRadius="md"
        backgroundColor={headerColor}
      >
        <HStack>
          <HStack gap={0.5} marginLeft={2}>
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </HStack>
          <HStack
            justify="space-between"
            background={headerTabColor}
            padding={2}
          >
            <HStack>
              <Text className="json-bracket" color={bracketColor}>
                {"{}"}
              </Text>
              <Text color={tabColor} fontWeight={"bold"}>
                about_me.json
              </Text>
            </HStack>
            <Icon as={IoClose} cursor="pointer" color={tabColor} />
          </HStack>
        </HStack>
      </Box>
      <Box
        className="json-content"
        whiteSpace="pre-line"
        padding={"0 8px 8px 8px"}
        background={windowBg}
        boxShadow="xl"
        borderRadius={"md"}
      >
        <Text className="json-bracket" color={bracketColor}>
          {"{"}
        </Text>
        <Text>
          <span className="json-key" style={{ color: keyColor }}>
            "name"
          </span>
          :{" "}
          <span className="json-value" style={{ color: valueColor }}>
            "Vladimir Boginski"
          </span>
          ,
        </Text>
        <Text>
          <span className="json-key" style={{ color: keyColor }}>
            "title"
          </span>
          :{" "}
          <span className="json-value" style={{ color: valueColor }}>
            "Software Developer"
          </span>
          ,
        </Text>
        <Text>
          <span className="json-key" style={{ color: keyColor }}>
            "age"
          </span>
          :{" "}
          <span className="json-value json-int" style={{ color: intColor }}>
            23
          </span>
          ,
        </Text>
        <Text>
          <span className="json-key" style={{ color: keyColor }}>
            "desc"
          </span>
          :{" "}
          <span className="json-value" style={{ color: valueColor }}>
            "Während meiner Ausbildung im kaufmännischen Bereich habe ich meine
            Leidenschaft für die Welt der Programmierung entdeckt. Das Gefühl,
            aus dem Nichts etwas Neues zu schaffen, ist eines der Dinge, die
            mich fasziniert haben."
          </span>
        </Text>
        <Text className="json-bracket" color={bracketColor}>
          {"}"}
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMeCard;
