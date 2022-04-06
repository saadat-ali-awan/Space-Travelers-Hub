import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissionData } from '../../redux/missions/missions';

const Missions = () => {
  const missionsList = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionData());
  }, []);
  return (
    <div className="container missions">
      <ul className="missions-list">
        {missionsList.map((mission) => (
          <li key={mission.id}>{`id: ${mission.id}, name: ${mission.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
