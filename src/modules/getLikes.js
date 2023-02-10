import involvementAPI from './involvementAPI';

const getLikes = async () => {
  const response = await fetch(involvementAPI);
  const data = await response.json();
  return data;
};

export default getLikes;