import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Dragon.module.css';
import { reserveDragon, cancelDragon } from '../../redux/dragons/dragon';

const Dragon = ({
  id, name, type, image, description, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.dragonWrapper}>
      <img src={image} alt="Dragon" className={styles.dragonImage} />
      <div>
        <h2>
          {name}
        </h2>
        <p>
          {reserved && <span className={styles.dragonReservedBadge}>Reserved</span>}
          <span>{type}</span>
          {description}
        </p>
        <button
          type="button"
          className={reserved ? styles.dragonButtonCancel : styles.dragonButton}
          onClick={reserved ? () => dispatch(cancelDragon(id)) : () => dispatch(reserveDragon(id))}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Dragon;
