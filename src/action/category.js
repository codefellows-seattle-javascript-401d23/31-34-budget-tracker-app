import uuid from 'uuid';

const create = ({ title, budget }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    budget,
    id: uuid(),
    createdOn: new Date(),
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
