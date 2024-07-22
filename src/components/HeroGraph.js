'use client';

import { fetchFilmDetails, fetchStarshipDetails } from '@/api/starWarsAPI';
import React, { useEffect, useState } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'react-flow-renderer';

const HeroGraph = ({ hero }) => {
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const filmPromises = hero.films.map((filmId) =>
          fetchFilmDetails(filmId),
        );
        const starshipPromises = hero.starships.map((starshipId) =>
          fetchStarshipDetails(starshipId),
        );

        const filmResponses = await Promise.all(filmPromises);
        const starshipResponses = await Promise.all(starshipPromises);

        setFilms(filmResponses.map((response) => response));
        setStarships(starshipResponses.map((response) => response));
      } catch (error) {
        console.error('Error fetching hero details:', error);
      }
    };

    if (hero) {
      fetchDetails();
    }
  }, [hero]);

  useEffect(() => {
    if (!hero) return;

    const heroNode = {
      id: hero.id.toString(),
      data: { label: hero.name },
      position: { x: 250, y: 0 },
    };

    const filmNodes = films
      .filter((film) => film && film.id)
      .map((film, index) => ({
        id: `film-${film.id}`,
        data: { label: `Film: ${film.title}` },
        position: { x: 250, y: (index + 1) * 100 },
      }));

    const starshipNodes = starships
      .filter((starship) => starship && starship.id)
      .map((starship, index) => ({
        id: `starship-${starship.id}`,
        data: { label: `Starship: ${starship.name}` },
        position: { x: 500, y: (index + 1) * 100 },
      }));

    const filmEdges = films
      .filter((film) => film && film.id)
      .map((film) => ({
        id: `edge-${hero.id}-film-${film.id}`,
        source: hero.id.toString(),
        target: `film-${film.id}`,
      }));

    const starshipEdges = starships
      .filter((starship) => starship && starship.id)
      .flatMap((starship) =>
        films
          .filter((film) => starship.films.includes(film.id))
          .map((film) => ({
            id: `edge-${film.id}-starship-${starship.id}`,
            source: `film-${film.id}`,
            target: `starship-${starship.id}`,
          })),
      );

    const uniqueNodes = [heroNode, ...filmNodes, ...starshipNodes].filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.id === value.id),
    );

    const uniqueEdges = [...filmEdges, ...starshipEdges].filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.id === value.id),
    );

    setNodes(uniqueNodes);
    setEdges(uniqueEdges);
  }, [films, starships, hero]);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow nodes={nodes} edges={edges} onLoad={onLoad} fitView>
        <MiniMap />
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default HeroGraph;
