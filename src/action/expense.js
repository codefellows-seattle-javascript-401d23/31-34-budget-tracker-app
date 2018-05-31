import uuid from 'uuid/v4';

const create = ({ name, price, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    id: uuid(),
    categoryId,
    timestamp: new Date(),
    name,
    price,
  },
});

const update = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

const remove = expense => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});

export { create, update, remove };
