const create = ({ title }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    id: Math.random(),
    createdOn: new Date(),
  },
});

const update = section => ({
  type: 'CATEGORY_UPDATE',
  payload: section,
});

const remove = section => ({
  type: 'CATEGORY_REMOVE',
  payload: section,
});

export { create, update, remove };