// Card.js
import React from 'react';

const Card = ({ backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    width: '140px',
    height: '180px',
    margin: '10px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',

  };


  return (
    <div style={cardStyle}>
      <p>{backgroundColor}</p>
      <p>{}</p>
    </div>
  );
};

export default Card;
