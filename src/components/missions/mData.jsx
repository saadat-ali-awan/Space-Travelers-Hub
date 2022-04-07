import React from 'react';
import PropTypes from 'prop-types';
import MissionButton from './missionButton';

const MissionData = (props) => {
  const { mission } = props;

  return (
    <tr>
      <td className="fw-bold">
        <p>{mission.name}</p>
      </td>
      <td>
        <p>{mission.description}</p>
      </td>
      <td className="align-middle">
        <p className="badge bg-secondary text-nowrap">NOT A MEMBER</p>
      </td>
      <td className="align-middle">
        <MissionButton id={mission.id} reserved={mission.reserved} />
      </td>
    </tr>
  );
};

MissionData.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionData;
