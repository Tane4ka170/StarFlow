'use client';

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import HeroGraph from './HeroGraph';

const HeroDetail = ({ hero, films, starships }) => {
  return (
    <Box p="6" bg="gray.50" borderRadius="lg" shadow="md">
      <Heading>{hero.name}</Heading>
      <Text>Eye color: {hero.eye_color}</Text>
      <Text>Height: {hero.height}</Text>
      <Text>Gender: {hero.gender}</Text>
      <HeroGraph hero={hero} films={films} starships={starships} />
    </Box>
  );
};

export default HeroDetail;
