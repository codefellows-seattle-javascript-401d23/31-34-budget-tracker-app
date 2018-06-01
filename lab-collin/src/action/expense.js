import uuid from 'uuid/v4';

export const createAction = ({ name, price, sectionId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    sectionId,
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

