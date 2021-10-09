const getPosts = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let response = await data.json();

  return response;
};

export { getPosts };
