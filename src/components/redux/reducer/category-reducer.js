// this is basically the state of the App -- ie where the switch statements to modify the the state regarding categories
const emptyState = [];
export default (state = emptyState, { type, payload }) => {
  // can/should add syntax validation
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(category => (category.id === payload.id ? payload : category));
    case 'CATEGORY_DESTROY':
      return state.filter(category => (category.id !== payload.id));
    default: 
      return state;
  }
};
