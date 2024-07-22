'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchHeroDetails } from '@/api/starWarsAPI';
import axios from 'axios';
import HeroDetail from '@/components/HeroDetail';
import { Box, Spinner } from '@chakra-ui/react';

const HeroPage = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const loadHeroDetails = async () => {
      if (id) {
        const heroData = await fetchHeroDetails(id);
        setHero(heroData);

        const filmsData = await Promise.all(
          heroData.films.map((url) => axios.get(url)),
        );
        setFilms(filmsData.map((response) => response.data));

        const starshipsData = await Promise.all(
          heroData.starships.map((url) => axios.get(url)),
        );
        setStarships(starshipsData.map((response) => response.data));
      }
    };

    loadHeroDetails();
  }, [id]);

  return (
    <Box p={4}>
      {hero ? (
        <HeroDetail hero={hero} films={films} starships={starships} />
      ) : (
        <Spinner size="xl" />
      )}
    </Box>
  );
};

export default HeroPage;
