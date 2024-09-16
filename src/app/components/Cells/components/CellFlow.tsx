import React from 'react'
import '@xyflow/react/dist/style.css';
import { ReactFlow } from '@xyflow/react';

export default function CellFlow() {
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
  return (
    <>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />

    </>
  )
}
