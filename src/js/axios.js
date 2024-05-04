const getProducts = (queryType, queryValue) => {
  let url = "http://localhost:3001/api/products/";

  if (queryType === "category" || queryType === "tags") {
    url += `?${queryType}=${queryValue}`;
  }

  return axios.get(url);
};

export { getProducts };
