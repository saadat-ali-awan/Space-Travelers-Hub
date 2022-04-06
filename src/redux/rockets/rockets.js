const initialState = [];

const FETCH_ROCKET_DATA = 'space-travelers-hub/rockets/FETCH_ROCKET_DATA';
const RESERVE_ROCKET = 'space-travelers-hub/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space-travelers-hub/rockets/CANCEL_RESERVATION';

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
      reserved: false,
    }
  ));
  dispatch({
    type: FETCH_ROCKET_DATA,
    data,
  });
};

export const reserveRocket = (key) => ({
  type: RESERVE_ROCKET,
  key,
});

export const cancelReservation = (key) => ({
  type: CANCEL_RESERVATION,
  key,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET_DATA:
      return action.data;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.key !== action.key) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.key !== action.key) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};
export default rocketsReducer;
