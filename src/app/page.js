'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Heading,
  Link as ChakraLink,
  VStack,
  Text,
  Button,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box p={4}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Star Wars Heroes
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
            Discover the incredible heroes from the Star Wars universe. Explore
            their stories, learn about their adventures, and get to know the
            characters that have inspired generations.
          </Text>
          <ChakraLink as={Link} href="/heroes" color="teal.500" fontSize="xl">
            To Heroes
          </ChakraLink>
        </Box>

        <Divider />

        <Box w="100%">
          <Heading as="h2" size="xl" mb={4}>
            About the Project
          </Heading>
          <Text fontSize="md" color="gray.700">
            This project is dedicated to Star Wars fans who want to explore and
            learn more about their favorite characters. We provide detailed
            information about the heroes, their journeys, and their impact on
            the Star Wars universe. Our goal is to create a comprehensive
            database of Star Wars heroes that is both informative and engaging.
          </Text>
        </Box>

        <Divider />

        <Box w="100%">
          <Heading as="h2" size="xl" mb={4}>
            Popular Heroes
          </Heading>
          <SimpleGrid columns={[1, null, 2, 3]} spacing={4}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              bg="gray.50"
            >
              <Heading as="h3" size="md">
                Luke Skywalker
              </Heading>
              <Text fontSize="sm" mt={2}>
                Learn about the journey of Luke Skywalker, the iconic Jedi
                Knight who brought balance to the Force.
              </Text>
            </Box>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              bg="gray.50"
            >
              <Heading as="h3" size="md">
                Leia Organa
              </Heading>
              <Text fontSize="sm" mt={2}>
                Discover the story of Leia Organa, the fearless leader of the
                Rebel Alliance and a symbol of hope.
              </Text>
            </Box>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              bg="gray.50"
            >
              <Heading as="h3" size="md">
                Han Solo
              </Heading>
              <Text fontSize="sm" mt={2}>
                Get to know Han Solo, the charming smuggler turned hero of the
                Rebel Alliance.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box w="100%">
          <Heading as="h2" size="xl" mb={4}>
            Interesting Facts
          </Heading>
          <VStack spacing={4} align="start">
            <Text fontSize="md" color="gray.700">
              Did you know that Yoda&apos;s species has never been named in the
              Star Wars universe? The wise and powerful Jedi Master remains one
              of the most mysterious characters.
            </Text>
            <Text fontSize="md" color="gray.700">
              The iconic lightsaber sound was created by combining the hum of an
              old television picture tube and the buzz of a film projector
              motor.
            </Text>
            <Text fontSize="md" color="gray.700">
              Chewbacca&apos;s voice is a mix of sounds from bears, walruses,
              lions, badgers, and other animals, combined to create his unique
              voice.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default HomePage;
