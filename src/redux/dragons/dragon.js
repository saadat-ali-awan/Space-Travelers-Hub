const FETCH_DRAGONS_BEGAN = 'space-travelers-hub/dragons/FETCH_DRAGONS_BEGAN';
const FETCH_DRAGONS_FAILED = 'space-travelers-hub/dragons/FETCH_DRAGONS_FAILED';
const FETCH_DRAGONS_SUCCEEDED = 'space-travelers-hub/dragons/FETCH_DRAGONS_SUCCEEDED';
const DRAGONS_API = 'https://api.spacexdata.com/v3/dragons';

const dragonReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ANY_TYPE':
      return state;
    default:
      return state;
  }
};

const fetchDragonsBegin = () => (
  {
    type: FETCH_DRAGONS_BEGAN,
  }
);

const fetchDragonsFailed = (error) => (
  {
    type: FETCH_DRAGONS_FAILED,
    error,
  }
);

const fetchDragonsSucess = (data) => (
  {
    type: FETCH_DRAGONS_SUCCEEDED,
    payload: data,
  }
);

export const fetchDragonsDate = () => async (dispatch) => {
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

export default dragonReducer;
