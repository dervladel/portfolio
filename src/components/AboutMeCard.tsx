import { Box, HStack, Text, Icon } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import "../styles/CardStyles.css";

const AboutMeCard = () => {
  const bracketColor = "#FFD602";
  const valueColor = "#FB6A5D";
  const keyColor = "#83C9BC";
  return (
    <Box
      className="json-card"
      borderRadius="md"
      boxShadow="xl"
      margin="0 auto"
      bg="#282c34"
      color="#abb2bf"
      fontFamily="'Courier New', Courier, monospace"
    >
      <Box className="json-header" mb={4} color="#282831" borderRadius="md">
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
          <HStack justify="space-between" background={"#32323B"} padding={2}>
            <HStack>
              <Text className="json-bracket" color={bracketColor}>
                {"{}"}
              </Text>
              <Text color={"#FFFFFF"} fontWeight={"bold"}>
                about_me.json
              </Text>
            </HStack>
            <Icon as={IoClose} cursor="pointer" color={"#FFFFFF"} />
          </HStack>
        </HStack>
      </Box>
      <Box
        className="json-content"
        whiteSpace="pre-line"
        padding={"0 8px 8px 8px"}
        background={"#292B36"}
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
          <span className="json-value json-int" style={{ color: "#D0BF69" }}>
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
