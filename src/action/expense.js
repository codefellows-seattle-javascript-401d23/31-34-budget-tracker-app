import uuid from 'uuid';

const create = ({ name, price, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    id: uuid(),
    categoryId,
    createdOn: new Date(),
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
