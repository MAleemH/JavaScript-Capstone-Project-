import involvementAPI from './involvementAPI.js';

const addNewLike = async (id) => {
  await fetch(involvementAPI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addNewLike;