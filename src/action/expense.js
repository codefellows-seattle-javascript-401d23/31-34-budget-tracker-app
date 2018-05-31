import uuid from 'uuid/v4';

const createAction = ({ name, price, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    id: uuid(),
    categoryId,
    timeStamp: new Date(),
  },
});

const updateAction = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

const removeAction = expense => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});

export { createAction, updateAction, removeAction };
