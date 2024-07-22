'use client';

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import HeroGraph from './HeroGraph';

const HeroDetail = ({ hero, films, starships }) => {
  return (
    <Box p="6" bg="gray.50" borderRadius="lg" shadow="md">
      <Heading mb="4" fontSize="2xl">
        {hero.name}
      </Heading>
      <HeroGraph hero={hero} />
    </Box>
  );
};

export default HeroDetail;
