'use strict';
import uuid from 'uuid/v4';

// Josh - we are creating a set of functions to simplify creating actions.
// these will return an object. this is a best practice
const create = ({ title }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    id: uuid(),
    createdOn: new Date(),
  }
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
