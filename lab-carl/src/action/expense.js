import uuid from 'uuid/v4';

export const create = ({ name, price, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryId,
    id: uuid(),
    createdOn: new Date(),
  },
});

export const update = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const destroy = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
});