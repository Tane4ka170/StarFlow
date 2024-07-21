'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Badge, Box, HStack, Text, VStack } from '@chakra-ui/react';

const HeroCard = ({ hero }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/heroes/${hero.id}`);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      bg="white"
      _hover={{ bg: 'gray.100', cursor: 'pointer' }}
      onClick={handleClick}
      w="100%"
    >
      <VStack align="start">
        <HStack justifyContent="space-between" w="100%">
          <Text fontWeight="bold" fontSize="xl">
            {hero.name}
          </Text>
          <Badge colorScheme="teal">Hero</Badge>
        </HStack>
        <Text fontSize="md">Height: {hero.height}</Text>
        <Text fontSize="md">Mass: {hero.mass}</Text>
        <Text fontSize="md">Gender: {hero.gender}</Text>
      </VStack>
    </Box>
  );
};

export default HeroCard;
