const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]; 
    case 'CATEGORY_DESTROY':
      return state.filter(category => category.id !== payload.id);
    case 'CATEGORY_UPDATE':
      return state.map(category => (category.id === payload.id ? payload : category));
    default:
      return state;
  }
};
