import uuid from 'uuid/v4';

const create = category => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name: category.name,
    budget: category.budget,
    id: uuid(),
    timestamp: new Date(),
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

const destroy = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

export { create, update, destroy };
