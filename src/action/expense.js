import uuid from 'uuid/v4';

const createAction = ({ name, price, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryId,
    id: uuid(),
    createdOn: new Date(),    
  },
});

const updateAction = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

const removeAction = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});

export { createAction, updateAction, removeAction };
