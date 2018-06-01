const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  // do syntax validation here (not during today's demo)
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(category => (category.id === payload.id ? payload : category));
    case 'CATEGORY_REMOVE':
      return state.filter(category => category.id !== payload.id);
    default:
      return state; // Josh - this is also previousState
  }
};
