const initialState = [];

const GET_DATA_MISSIONS = 'GET_DATA_MISSIONS';

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

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_MISSIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default missionReducer;
