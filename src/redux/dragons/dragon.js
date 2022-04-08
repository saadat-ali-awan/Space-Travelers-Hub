const FETCH_DRAGONS_BEGAN = 'space-travelers-hub/dragons/FETCH_DRAGONS_BEGAN';
const FETCH_DRAGONS_FAILED = 'space-travelers-hub/dragons/FETCH_DRAGONS_FAILED';
const FETCH_DRAGONS_SUCCEEDED = 'space-travelers-hub/dragons/FETCH_DRAGONS_SUCCEEDED';
const RESERVED_DRAGON = 'space-travelers-hub/dragons/RESERVED_DRAGON';
const CANCELED_DRAGON = 'space-travelers-hub/dragons/CANCELED_DRAGON';
const DRAGONS_API = 'https://api.spacexdata.com/v3/dragons';

const dragonReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DRAGONS_BEGAN:
      return {
        status: 'FETCHING_DRAGONS',
      };
    case FETCH_DRAGONS_FAILED:
      return {
        status: 'FETCHING_FAILED',
        error: action.error,
      };
    case FETCH_DRAGONS_SUCCEEDED:
      return {
        status: 'FETCHING_SUCCEEDED',
        dragons: action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          type: dragon.type,
          description: dragon.description,
          flickr_images: dragon.flickr_images[0],
          reserved: false,
        })),
      };
    case RESERVED_DRAGON:
      return {
        status: state.status,
        dragons: state.dragons.map((dragon) => (dragon.id === action.id
          ? { ...dragon, reserved: true }
          : dragon
        )),
      };
    case CANCELED_DRAGON:
      return {
        status: state.status,
        dragons: state.dragons.map((dragon) => (dragon.id === action.id
          ? { ...dragon, reserved: false }
          : dragon
        )),
      };
    default:
      return state;
  }
};

export const fetchDragonsBegin = () => (
  {
    type: FETCH_DRAGONS_BEGAN,
  }
);

export const fetchDragonsFailed = (error) => (
  {
    type: FETCH_DRAGONS_FAILED,
    error,
  }
);

export const fetchDragonsSucess = (data) => (
  {
    type: FETCH_DRAGONS_SUCCEEDED,
    payload: data,
  }
);

export const fetchDragonsData = () => async (dispatch) => {
  dispatch(fetchDragonsBegin());
  try {
    const dragonsResponse = await fetch(DRAGONS_API);
    if (!dragonsResponse.ok) throw Error(dragonsResponse.statusText);
    const responseJSON = await dragonsResponse.json();

    dispatch(fetchDragonsSucess(responseJSON));
  } catch (error) {
    dispatch(fetchDragonsFailed(error));
  }
};

export const reserveDragon = (id) => (
  {
    type: RESERVED_DRAGON,
    id,
  }
);

export const cancelDragon = (id) => (
  {
    type: CANCELED_DRAGON,
    id,
  }
);

export default dragonReducer;
