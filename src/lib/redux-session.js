export default store => next => (action) => {
  // These lines happen before I update the store
  const result = next(action);
  // These lines happen AFTER I update the store
  const state = store.getState();
  for (const key in state) { // eslint-disable-line
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      localStorage[key] = JSON.stringify(state[key]);
    }
  }
  return result;
};
