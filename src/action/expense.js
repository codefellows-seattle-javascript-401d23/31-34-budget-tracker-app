import uuid from 'uuid/v4';

const create = expense => ({
  type: 'EXPENSE_CREATE',
  payload: {
    id: uuid(),
    categoryId: expense.categoryId,
    timestamp: new Date(),
    name: expense.name,
    price: expense.price,
    description: expense.description,
  },
});

const update = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

const destroy = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
});

export { create, update, destroy };
