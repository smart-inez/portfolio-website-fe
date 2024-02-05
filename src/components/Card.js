import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return(
    <div>
      <HStack>
        <Box
          bg="white"
          color="black"
          borderRadius="lg"
          overflow="hidden"
        >
          <VStack>
            <Image src={imageSrc} />
            <Box p="6">
              <Heading size="md">{title}</Heading>
              <Text fontSize="md" marginTop="10px" marginBottom="10px" color="gray">{description}</Text>
              <HStack>
                <Text fontSize="lg">See more</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x"/>
              </HStack>
            </Box>
          </VStack>
        </Box>

      </HStack>
    </div>

  );
};

export default Card;
