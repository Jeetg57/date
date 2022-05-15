import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import { BsQuestionCircleFill } from "react-icons/bs";

// Replace test data with your own
const features = [
  "Are you a practicing devotee looking to unite with your significant better half? So that together as a power couple you can be an exciting part of the next phase in out movement, which is the establishment of the Varnashram Dharma",
  "Has your search for a devotee bride/groom been futile so far? ",
  "Are you limited to the number of perspective matches available within your local congregation?",
  "Are you looking for a lifelong devotee companion who not only matches devotionally, but also be of your caliber in terms of education and profession?",
  "Are you looking for the “one” whose nature, personality and personal disposition will vibe with yours? Someone who shares your frequency and will be on the same wave length as you",
  "Are you looking for a global citizen of the world who not only shares your passion for Krishna, but whose social and cultural outlook in life will complement and enhance yours?",
  "Are you a parent or guardian looking of a partner for your son or daughter and would like to connect with other parents of prospective brides and grooms?",
  "Are you a sibling or friend who is looking for a devotee match for your dear one?",
  "Are you a counselor, leader or manager in a temple or congregational environment and are looking to “settle” the young devotees in your care?",
];

export default function Questions() {
  return (
    <Box w="full">
      <Box p={4} pb={10} bgColor="maroon">
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature} align={"top"}>
                <Box color={"orange.400"} px={2}>
                  <Icon as={BsQuestionCircleFill} />
                </Box>
                <VStack align={"start"}>
                  <Text color={"white"}>{feature}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
