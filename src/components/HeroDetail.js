'use client';

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import HeroGraph from './HeroGraph';

const HeroDetail = ({ hero, films, starships }) => {
  return (
    <Box>
      <Heading>{hero.name}</Heading>
      <HeroGraph hero={hero} films={films} starships={starships} />
    </Box>
  );
};

export default HeroDetail;
