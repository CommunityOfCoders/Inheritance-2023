// Card.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CryptoInfo from '../CryptoInfo';

function Card({ title, job,ID, parameters,buttonText,image}) {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card hover-glow">
      <div className="card-border-top"></div>
      <div><img src={image} className='img'></img></div>
      <span>{title}</span>
      <p className="job">{job}</p>
      <button onClick={handleButtonClick} >{buttonText}</button>
      {showDetails && <CryptoInfo ID={ID} parameters={parameters} />}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  ID: PropTypes.string.isRequired,
  parameters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;


