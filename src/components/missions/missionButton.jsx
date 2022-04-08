import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionButton = (props) => {
  const { reserved, id } = props;
  const dispatch = useDispatch();

  const joinMissionButton = () => {
    dispatch(joinMission(id));
  };
  const leaveMissionButton = () => {
    dispatch(leaveMission(id));
  };

  return (
    <>
      {!reserved && (
        <Button
          className="text-nowrap"
          variant="outline-secondary"
          onClick={joinMissionButton}
        >
          Join Mission
        </Button>
      )}
      {reserved && (
        <Button className="text-nowrap" variant="outline-danger" onClick={leaveMissionButton}>Leave Mission</Button>
      )}
    </>
  );
};

MissionButton.propTypes = {
  reserved: PropTypes.bool,
  id: PropTypes.string.isRequired,
};
MissionButton.defaultProps = {
  reserved: false,
};

export default MissionButton;
