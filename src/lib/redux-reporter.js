export default store => next => (action) => {
  try {
    console.log('__ActioN____', action);
    const result = next(action);
    console.log('___STATE______', store.getState());
    return result;
  } catch (error) {
    console.log('_______ERROR_______', error);
    action.error = error;
    return action;
  }
};
