import uuid from 'uuid/v4';

const create = ({ name }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    id: uuid(),
    timestamp: new Date(),
    budget: 'number',
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
