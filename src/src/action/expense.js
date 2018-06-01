import uuid from 'uuid/v4';

export const createAction = ({ content, categoryId, budget }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    content,
    budget,
    categoryId,
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
