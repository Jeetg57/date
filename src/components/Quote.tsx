import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import bg from "../public/images/bg2.jpg";
import "@fontsource/dancing-script";
export default function Quote() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign={"center"}
        maxW={"5xl"}
        fontFamily={"Dancing Script"}
      >
        "Actually the woman must always be protected by her husband. We always
        speak of the Goddess of fortune as being placed on the chest of
        Narayana. In other words, the wife must remain emabraced by her husband.
        Thus she becomes beloved and well protected. Just as one saves his money
        and places it under his own personal protection, one should similarly
        protect his wife by his own personal supervision. Just as intelligence
        is always within the heart, so a beloved chaste wife should always have
        her place on the chest of a good husband. This is the proper
        relationship between husband and wife. A wife is therefore called
        Ardhangani, or half of the body. One cannot remain with only one side of
        the body. He must have two sides. Similarly, according to nature’s way,
        husband and wife should live together. In the lower species of life,
        among birds and animals, it is seen that by nature’s arrangement the
        husband and wife live together. It is similarly ideal in human life for
        the husband and wife to live together. The home should be a place for
        devotional service, and the wife should be chaste and accepted by a
        ritualistic ceremony. In this way one can become happy at home."
      </Text>
      <Box textAlign={"center"}>
        <Avatar size={"xl"} src={bg.src} mb={2} />

        <Text fontWeight={600}>Srila Prabhupada </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Srimad Bhagvatam 4th Canto 26th Chapter Text 17
        </Text>
      </Box>
    </Stack>
  );
}
