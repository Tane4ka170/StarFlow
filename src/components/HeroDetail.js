'use client';

import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import HeroGraph from './HeroGraph';

const HeroDetail = ({ hero, films, starships }) => {
  return (
    <VStack p={4} spacing={4} align="start">
      <Heading>{hero.name}</Heading>
      <Text>Height: {hero.gender}</Text>
      <Text>Mass: {hero.height}</Text>
      <Text>Gender: {hero.skin_color}</Text>
      <Text>Gender: {hero.hair_color}</Text>
      <Text>Gender: {hero.eye_color}</Text>
      <HeroGraph hero={hero} films={films} starships={starships} />
    </VStack>
  );
};

export default HeroDetail;
