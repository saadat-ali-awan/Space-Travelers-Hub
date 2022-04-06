import React from 'react';
import PropTypes from 'prop-types';

const Dragon = ({
  id, name, type, image, description,
}) => (
  <div id={id}>
    <img src={image} alt="Dragon" />
    <div>
      <h1>
        {name}
      </h1>
      <p>
        <span>{type}</span>
        {description}
      </p>
      <button type="button">
        Reserve Dragon
      </button>
    </div>
  </div>
);

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Dragon;
