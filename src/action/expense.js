import uuid from 'uuid/v4';

export const createAction = ({ content, price, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    content,
    price,
    categoryId,
    id: uuid(),
  },
});

export const updateAction = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const removeAction = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
});
