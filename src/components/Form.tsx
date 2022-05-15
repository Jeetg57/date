import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { countryCodes } from "../assets/countryCodes";

export default function OnboardingForm() {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values: any) {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/onboarding/`, {
      method: "POST",
      body: JSON.stringify(values, null, 1),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((e) => {
        toast({
          title: "Form Not Submitted",
          description: "Please try again later",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
    // .then((res) => {
    //   res.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   toast({
    //     title: "Form Submitted",
    //     description: "We will get back soon",
    //     status: "success",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // })
    // .catch((e) => {
    //   toast({
    //     title: "Form Not Submitted",
    //     description: "Try again later",
    //     status: "error",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    //   console.log(e.toString());
    // });
    if (res) {
      if (res.error) {
        toast({
          title: "Form Not Submitted",
          description: res.error,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Form Submitted",
          description: "We will get back soon",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  }

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"2xl"}>
        <Stack align={"center"}>
          <Text fontSize={"lg"} color={"gray.600"} align={"center"}>
            If you have answered 'YES' to any of the above questions and are
            interested to know more, please contact us immediately by filling
            out the contact form below and we will get in touch with you with
            further details
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={5}>
              <HStack>
                <FormControl isInvalid={errors.firstname}>
                  <FormLabel htmlFor="firstname">First name</FormLabel>
                  <Input
                    id="firstname"
                    placeholder="First name"
                    {...register("firstName", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.firstname && errors.firstname.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.secondName}>
                  <FormLabel htmlFor="secondName">Last name</FormLabel>
                  <Input
                    id="secondName"
                    placeholder="Second name"
                    {...register("secondName", {
                      required: "This is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.secondName && errors.secondName.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>

              <FormControl isInvalid={errors.initiatedName}>
                <FormLabel htmlFor="initiatedName">
                  Initiated name (optional)
                </FormLabel>
                <Input
                  id="initiatedName"
                  placeholder="Initiated Name"
                  {...register("initiatedName")}
                />
                <FormErrorMessage>
                  {errors.initiatedName && errors.initiatedName.message}
                </FormErrorMessage>
              </FormControl>

              <Stack>
                <FormLabel htmlFor="countryCode">Phone Number</FormLabel>
                <HStack>
                  <FormControl isInvalid={errors.code} w="50%">
                    <Select id="countryCode">
                      {countryCodes.map((country, index) => {
                        return (
                          <option
                            key={index}
                            value={country.dial_code}
                            {...register("countryCode", {
                              required: "This is required",
                            })}
                          >
                            {country.name} {country.dial_code}
                          </option>
                        );
                      })}
                    </Select>
                    <FormErrorMessage>
                      {errors.countryCode && errors.countryCode.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.phone}>
                    <Input
                      id="phone"
                      placeholder="Phone number"
                      {...register("phone", {
                        required: "This is required",
                        maxLength: {
                          value: 10,
                          message: "Maximum length should be 10",
                        },
                        minLength: {
                          value: 9,
                          message: "Minimum length should be 9",
                        },
                      })}
                    />
                    <FormErrorMessage>
                      {errors.phone && errors.phone.message}
                    </FormErrorMessage>
                  </FormControl>
                </HStack>
              </Stack>
              <HStack>
                <FormControl isInvalid={errors.dob}>
                  <FormLabel htmlFor="dob">Date of birth</FormLabel>
                  <Input
                    id="dob"
                    type={"date"}
                    placeholder="Date Of Birth"
                    {...register("dob", {
                      required: "This is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.dob && errors.dob.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.gender}>
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <RadioGroup id="gender">
                    <HStack spacing={4}>
                      <Radio
                        colorScheme="orange"
                        {...register("gender", {
                          required: "This is required",
                        })}
                        value="Male"
                      >
                        Male
                      </Radio>
                      <Radio
                        colorScheme="orange"
                        {...register("gender", {
                          required: "This is required",
                        })}
                        value="Female"
                      >
                        Female
                      </Radio>
                    </HStack>
                  </RadioGroup>

                  <FormErrorMessage>
                    {errors.gender && errors.gender.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
            </Stack>

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type={"email"}
                placeholder="Email Address"
                {...register("email", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <Stack spacing={10} pt={2} mt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                isLoading={isSubmitting}
                size="lg"
                bg={"maroon"}
                color={"white"}
                _hover={{
                  bg: "orange.500",
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
