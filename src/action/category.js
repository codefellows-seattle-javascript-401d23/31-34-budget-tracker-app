const create = ({ title }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    id: Math.random(),
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
