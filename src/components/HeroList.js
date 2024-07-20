'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { VStack, Spinner } from '@chakra-ui/react';
import { fetchHeroes } from '@/api/starWarsAPI';

const HeroCard = dynamic(() => import('./HeroCard'), { ssr: false });

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const data = await fetchHeroes();
        setHeroes(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch heroes:', error);
      }
    };

    getHeroes();
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <VStack spacing={4}>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </VStack>
  );
};

export default HeroList;
