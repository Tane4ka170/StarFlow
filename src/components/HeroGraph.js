'use client';
import CustomEdge from '@/helpers/CustomEdge';
import CustomNode from '@/helpers/CustomNode';
import React, { useMemo } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

const nodeTypes = { customNode: CustomNode };
const edgeTypes = { customEdge: CustomEdge };

const HeroGraph = ({ heroData }) => {
  const elements = useMemo(() => {
    if (Array.isArray(heroData)) {
      return heroData.map((hero) => ({
        id: `hero-${hero.id}`,
        type: 'customNode',
        data: { label: hero.name },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
      }));
    }
    return [];
  }, [heroData]);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default HeroGraph;
