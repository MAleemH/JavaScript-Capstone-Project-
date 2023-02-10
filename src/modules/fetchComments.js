const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PHTvFFWrOpX4Hcee8n1y/comments/';
const commentsData = async (id) => {
  const response = await fetch(`${url}?item_id=${id}`);
  const data = await response.json();
  return data;
};
export default commentsData;
