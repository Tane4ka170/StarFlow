'use client';

import React, { useEffect, useState } from 'react';
import HeroList from '@/components/HeroList';
import { fetchHeroes } from '@/api/starWarsAPI';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <HeroList heroes={heroes} />
    </main>
  );
};

export default Heroes;
