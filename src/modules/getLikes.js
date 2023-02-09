import involvementAPI from './involvementAPI.js';

const getLikes = async () => {
  const response = await fetch(involvementAPI);
  const data = await response.json();
  return data;
};

export default getLikes;