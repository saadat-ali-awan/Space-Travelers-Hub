import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';
import styles from './rockets.module.css';

const rockets = () => {
  const rocketsList = useSelector((state) => state.rocketsReducer);

  const dispatch = useDispatch();

  function reserveRocketHandler(key) {
    dispatch(reserveRocket(key));
  }

  return (
    <main className={styles['rockets-container']}>
      {
        rocketsList.map((rocket) => (
          <div key={`${rocket.key}-item`} className={styles['rocket-details']}>
            <div>
              <img src={`${rocket.flickr_images[0]}`} alt="Rocket" className={styles['rocket-img']} />
            </div>
            <div>
              <h3 className={styles['rocket-heading']}>{rocket.name}</h3>
              <p className={styles['rocket-description']}>{rocket.description}</p>
              <button className={styles['rocket-button']} onClick={() => { reserveRocketHandler(rocket.key); }} type="button">Reserve Rocket</button>
            </div>
          </div>
        ))
      }
    </main>
  );
};

export default rockets;
