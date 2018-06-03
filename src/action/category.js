import uuid from 'uuid/v4';


const create = ({ name, budget }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    id: uuid(),
    timestamp: new Date(),
    budget,
    name,
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE', 
  payload: category, 
});

const remove = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

export { create, update, remove };
