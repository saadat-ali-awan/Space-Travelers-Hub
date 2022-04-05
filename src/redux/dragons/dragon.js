const dragonReducer = (state = 'test-dragons', action) => {
  switch (action.type) {
    case 'ANY_TYPE':
      return state;
    default:
      return state;
  }
};
export default dragonReducer;
