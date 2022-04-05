const initialState = {};
const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ANY_TYPE':
      return state;
    default:
      return state;
  }
};
export default dragonReducer;
