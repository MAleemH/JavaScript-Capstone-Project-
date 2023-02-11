const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PHTvFFWrOpX4Hcee8n1y/comments/';

const postComment = async (id, username, comment) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
    });
  };
  
  const getComment = async (id) => {
    const response = await fetch(`${url}?item_id=${id}`);
    const data = await response.json();
    return data;
  };

  export {getComment, postComment}