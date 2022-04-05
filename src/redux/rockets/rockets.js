const initialState = [];

const GET_DATA = 'GET_DATA';

export const getRocketsData = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
  });

  const responseJSON = await response.json();
  const data = responseJSON.map((rocket) => (
    {
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images,
    }
  ));
  dispatch({
    type: GET_DATA,
    data,
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...state, action.data];
    default:
      return state;
  }
};
export default rocketsReducer;
