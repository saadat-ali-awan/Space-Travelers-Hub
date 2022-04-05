const initialState = [];

const GET_DATA_MISSIONS = 'GET_DATA_MISSIONS';

const MissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_MISSIONS:
      return [...state, action.data];
    default:
      return state;
  }
};
export default MissionReducer;
