import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dragon.module.css';

const Dragon = ({
  id, name, type, image, description,
}) => (
  <div id={id} className={styles.dragonWrapper}>
    <img src={image} alt="Dragon" className={styles.dragonImage} />
    <div>
      <h2>
        {name}
      </h2>
      <p>
        <span>{type}</span>
        {description}
      </p>
      <button type="button" className={styles.dragonButton}>
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
