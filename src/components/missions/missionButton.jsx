import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missions';

const MissionButton = (props) => {
  const { reserved, id } = props;
  const dispatch = useDispatch();

  const joinMissionButton = () => {
    dispatch(joinMission(id));
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
        <Button className="text-nowrap" variant="outline-danger">Leave Mission</Button>
      )}
    </>
  );
};

MissionButton.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionButton;
