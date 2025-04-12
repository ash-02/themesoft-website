import React from 'react';

const BrainNetwork = () => {
  return (
    <svg className="brain-network" viewBox="0 0 500 500">
      <path
        className="brain-outline"
        d="M250 100 C 400 100, 400 400, 250 400 C 100 400, 100 100, 250 100"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      
      <g className="nodes">
        {[
          [200, 150], [300, 150], [250, 200],
          [180, 250], [320, 250], [220, 300],
          [280, 300], [250, 350]
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="6"
            fill="#4E63FF"
            className="node"
          />
        ))}
      </g>

      <g className="connections">
        <path d="M200 150 L250 200 L300 150" className="connection" />
        <path d="M180 250 L220 300 L280 300 L320 250" className="connection" />
        <path d="M250 200 L250 350" className="connection" />
        <path d="M180 250 L250 200 L320 250" className="connection" />
      </g>

      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <style>
        {`
          .brain-outline {
            opacity: 0.5;
          }
          .node {
            filter: url(#glow);
          }
          .connection {
            stroke: #4E63FF;
            stroke-width: 2;
            fill: none;
            opacity: 0.5;
          }
          @keyframes pulse {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
          .node {
            animation: pulse 2s infinite;
          }
          .connection {
            animation: pulse 3s infinite;
          }
        `}
      </style>
    </svg>
  );
};

export default BrainNetwork; 