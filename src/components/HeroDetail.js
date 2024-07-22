'use client';

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import HeroGraph from './HeroGraph';

const HeroDetail = ({ hero, films, starships }) => {
  return (
    <Box>
      <Heading>{hero.name}</Heading>
      <HeroGraph hero={hero} />
    </Box>
  );
};

export default HeroDetail;
