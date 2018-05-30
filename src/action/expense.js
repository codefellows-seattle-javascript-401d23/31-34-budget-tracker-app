import uuid from 'uuid/v4';

const create = ({ content, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    content,
    categoryId,
    id: uuid(),
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
