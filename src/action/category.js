import uuid from 'uuid';

const create = ({ name, budget }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    budget,
    id: uuid(),
    createdOn: new Date(),
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
