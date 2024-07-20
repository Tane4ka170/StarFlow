'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Image, Text } from '@chakra-ui/react';

const HeroCard = ({ hero }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/heroes/${hero.id}`);
  };

  return (
    <Box
      onClick={handleClick}
      cursor="pointer"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={hero.image} alt={hero.name} />
      <Box p="6">
        <Text fontSize="xl">{hero.name}</Text>
        <Text>{hero.description}</Text>
      </Box>
    </Box>
  );
};

export default HeroCard;
