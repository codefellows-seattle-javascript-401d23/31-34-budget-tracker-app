import uuid from 'uuid';

const create = ({ name, budget }) => ({
  type: 'SECTION_CREATE',
  payload: {
    name,
    budget,
    id: uuid(),
    timestamp: new Date(),
  },
});

const update = section => ({
  type: 'SECTION_UPDATE',
  payload: section,
});

const remove = section => ({
  type: 'SECTION_REMOVE',
  payload: section,
});

export { create, update, remove };
