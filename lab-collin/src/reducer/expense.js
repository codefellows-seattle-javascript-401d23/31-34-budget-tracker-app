const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let sectionId;
  let sectionExpenses;
  let updatedExpenses;
  let updatedState;

  switch (type) {
    case 'SECTION_CREATE':
      return { ...state, [payload.id]: [] };
    case 'SECTION_REMOVE':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'EXPENSE_CREATE':
      sectionId = payload.sectionId; // eslint-disable-line
      sectionExpenses = state[sectionId];
      updatedExpenses = [...sectionExpenses, payload];
      return { ...state, [sectionId]: updatedExpenses };
    case 'EXPENSE_UPDATE':
      sectionId = payload.sectionId; // eslint-disable-line
      sectionExpenses = state[sectionId];
      updatedExpenses = sectionExpenses.map(expense => (expense.id === payload.id ? payload : expense));
      return { ...state, [sectionId]: updatedExpenses };
    case 'EXPENSE_REMOVE':
      sectionId = payload.sectionId; // eslint-disable-line
      sectionExpenses = state[sectionId];
      updatedExpenses = sectionExpenses.filter(expense => expense.id !== payload.id);
      return { ...state, [sectionId]: updatedExpenses };
    default:
      return state;
  }
};
