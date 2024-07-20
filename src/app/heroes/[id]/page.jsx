'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { fetchHeroDetails } from '@/api/starWarsAPI';
import axios from 'axios';

const HeroDetail = dynamic(() => import('../../components/HeroDetail'), {
  ssr: false,
});

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
    <main>
      {hero ? (
        <HeroDetail hero={hero} films={films} starships={starships} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default HeroPage;