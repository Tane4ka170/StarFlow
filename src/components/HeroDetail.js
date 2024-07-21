'use client';

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import HeroGraph from './HeroGraph';

const HeroDetail = ({ hero, films, starships }) => {
  return (
    <Box>
      <Heading>{hero.name}</Heading>
      <HeroGraph heroId={hero.id} />
    </Box>
  );
};

export default HeroDetail;
