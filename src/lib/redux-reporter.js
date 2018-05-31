export default store => next => (action) => {
  try {
    console.log(`__ACTION__ ${action.type} on ${JSON.stringify(action.payload)}`);
    const result = next(action);
    console.log('__UPDATED_STATE__', store.getState());
    return result;
  } catch (err) {
    console.log('__ERROR__', err);
    action.error = err;
    return action;
  }
};
