import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <div className={styles.default}>
      <div>
        <h3>My Rockets</h3>
        <ul className={styles.rockets}>
          {
            rockets.filter((rocket) => rocket.reserved).map((rocket) => (
              <li key={rocket.key} className={styles.listItem}>{rocket.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
