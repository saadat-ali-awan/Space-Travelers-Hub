import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dragons = useSelector((state) => state.dragonReducer);
  const missions = useSelector((state) => state.missionReducer);
  return (
    <div className={styles.default}>
      <div>
        <h3>My Rockets</h3>
        <ul className={styles.rockets}>
          {
            rockets.filter((rocket) => rocket.reserved).map((rocket) => (
              <li key={`${rocket.key}-${rocket.id}`} className={styles.listItem}>{rocket.name}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h3>My Dragons</h3>
        {dragons.status === 'FETCHING_SUCCEEDED' && (
          <ul className={styles.rockets}>
            {dragons.dragons.filter((dragon) => dragon.reserved).map((dragon) => (
              <li key={dragon.id} className={styles.listItem}>{dragon.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>My Mission</h3>
        <ul className={styles.rockets}>
          {
            missions.filter((mission) => mission.reserved).map((mission) => (
              <li key={mission.id} className={styles.listItem}>{mission.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
