'use client';

import React from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

const HeroGraph = ({ hero, films, starships }) => {
  const elements = [
    { id: 'hero', data: { label: hero.name }, position: { x: 250, y: 5 } },
    ...films.map((film, index) => ({
      id: `film-${index}`,
      data: { label: film.title },
      position: { x: 100, y: 100 + index * 100 },
    })),
    ...starships.map((ship, index) => ({
      id: `starship-${index}`,
      data: { label: ship.name },
      position: { x: 400, y: 100 + index * 100 },
    })),
    ...films.map((_, index) => ({
      id: `hero-film-${index}`,
      source: 'hero',
      target: `film-${index}`,
      animated: true,
    })),
    ...starships.map((_, index) => ({
      id: `film-starship-${index}`,
      source: `film-${index}`,
      target: `starship-${index}`,
      animated: true,
    })),
  ];

  return (
    <ReactFlow elements={elements}>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

export default HeroGraph;
