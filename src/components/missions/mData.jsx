import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

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
        <Button className="text-nowrap" variant="outline-secondary">Join Mission</Button>
      </td>
    </tr>
  );
};

MissionData.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default MissionData;
