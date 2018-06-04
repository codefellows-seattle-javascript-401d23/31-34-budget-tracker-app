import uuid from 'uuid/v4';

// Zachary - We are creating a set of functions to simplify creating actions.
const create = ({ title }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    id: uuid(),
    timestamp: new Date(),
    budget: 'number',
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

const remove = category => ({
  type: 'CATEGORY_REMOVE',
  payload: category,
});

export { create, update, remove };
