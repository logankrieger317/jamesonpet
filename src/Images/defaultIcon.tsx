import React from 'react';
   import GermanShepherdHead from './German_Shepherd_head1.svg';

const DefaultReviewIcon = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" fill="white" />
      <g transform="translate(25, 25) scale(0.5)">
        <GermanShepherdHead />
      </g>
    </svg>
  );
};

export default DefaultReviewIcon;