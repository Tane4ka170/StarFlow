import React from 'react';
import { Handle } from 'react-flow-renderer';

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: '1px solid #777', borderRadius: 5 }}>
      <div>{data.label}</div>
      <Handle type="target" position="top" style={{ background: '#555' }} />
      <Handle type="source" position="bottom" style={{ background: '#555' }} />
    </div>
  );
};

export default CustomNode;
