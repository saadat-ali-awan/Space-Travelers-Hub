const initialState = [];

const FETCH_ROCKET_DATA = 'space-travelers-hub/rockets/FETCH_ROCKET_DATA';

export const getRocketsData = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
  });

  const responseJSON = await response.json();
  const data = responseJSON.map((rocket) => (
    {
      key: rocket.id,
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images,
      description: rocket.description,
    }
  ));
  dispatch({
    type: FETCH_ROCKET_DATA,
    data,
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET_DATA:
      return [...state, action.data];
    default:
      return state;
  }
};
export default rocketsReducer;
