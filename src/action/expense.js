import uuid from 'uuid/v4';

export const createAction = ({ name, categoryID }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    categoryID,
    id: uuid(),
  },
});

export const updateAction = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const removeAction = expense => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});
