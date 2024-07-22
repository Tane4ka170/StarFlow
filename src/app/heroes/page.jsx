'use client';

import React, { useEffect, useState } from 'react';
import HeroList from '@/components/HeroList';
import { fetchHeroes } from '@/api/starWarsAPI';
import { Box, Spinner, Text } from '@chakra-ui/react';

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHeroes = async () => {
      try {
        const data = await fetchHeroes();
        setHeroes(data.results);
      } catch (err) {
        setError('Failed to load heroes');
      } finally {
        setLoading(false);
      }
    };

    loadHeroes();
  }, []);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <HeroList heroes={heroes} />
    </Box>
  );
};

export default Heroes;
