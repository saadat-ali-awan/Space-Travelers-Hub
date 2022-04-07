const initialState = [];

const GET_DATA_MISSIONS = 'GET_DATA_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

export const getMissionData = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
  });

  const responseJSON = await response.json();
  const data = responseJSON.map((mission) => (
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }
  ));
  dispatch({
    type: GET_DATA_MISSIONS,
    payload: data,
  });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};
export default missionReducer;
