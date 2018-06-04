export default store => next => (action) => {
  try {
    const result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  } catch (error) {
    // Zachary - GRACEFULLY HANDLE THE ERROR IN A WAY A USER WILL UNDERSTAND
    action.error = error;
    return action;
  }
};
