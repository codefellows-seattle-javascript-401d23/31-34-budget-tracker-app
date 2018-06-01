// Zachary - We are creating a set of functions to simplify creating actions.
const create = ({ title, budget }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    budget,
    id: Math.random(),
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
