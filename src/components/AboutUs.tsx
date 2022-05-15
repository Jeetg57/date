import {
  Avatar,
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import bg from "../public/images/bg2.jpg";
import "@fontsource/dancing-script";
export default function AboutUs() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Heading>Who We Are</Heading>
      <Text fontSize={{ base: "md", md: "lg" }} maxW={"5xl"} align={"center"}>
        We are a team of practicing devotees, who have seen this need in our
        community, congregation and society and wish to bridge the gap We are an
        independent and innovative devotee matrimonial service, that will charge
        a nominal one-time only membership fee for providing this service We
        desire to serve the devotee community through this endeavor, centering
        this platform purely around the needs and requirements of our esteemed
        members We vow to conduct this service to the best of our ability and
        with utmost care. Being conscious at all times to protect your personal
        information. Your safety and welfare are of utmost importance to us.
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} maxW={"5xl"} align={"center"}>
        Kindly also note that this matrimonial service is strictly limited to
        practicing ISKON devotees and congregational members only. If, however
        you are also interested but do not fit in the category above, we welcome
        you to still fill the contact form so that we can get in touch with you
        and guide you to our sister website
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} maxW={"5xl"} align={"center"}>
        We look forward to contacting you and welcome you to join us so that we
        can take this beautiful journey together in search of your “other half”
        wherever in the world he/she may be!
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} maxW={"5xl"} align={"center"}>
        Hare Krishna!
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} maxW={"5xl"} align={"center"}>
        All glories to Srila Prabhupada!
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} maxW={"5xl"} align={"center"}>
        Your Humble servants,
        <br />
        Devotee Ardhangani Team
      </Text>
    </Stack>
  );
}
