import { Box } from "@chakra-ui/react";
import AboutUs from "../components/AboutUs";
import Carousel from "../components/Carousel.";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import OnboardingForm from "../components/Form";
import Hero from "../components/Hero";
import Questions from "../components/Questions";
import Quote from "../components/Quote";

const Index = () => (
  <Container>
    <Hero />
    <Quote />
    <Questions />
    <Box my={5}></Box>

    <OnboardingForm />
    <Box my={5}></Box>
    <Carousel />
    <AboutUs />
    <Footer />
  </Container>
);

export default Index;
