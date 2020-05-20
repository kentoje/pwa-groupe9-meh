export default (callback, id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      response.json()
        .then((data) => callback(null, data));
    });
};
