const getProducts = (queryType, queryValue) => {
  let url = "https://ecommerce-marmoraria-api.vercel.app/api/products";

  if (
    (queryType === "category" && queryValue) ||
    (queryType === "tags" && queryValue)
  ) {
    url += `?${queryType}=${queryValue}`;
  }

  return axios.get(url);
};

export { getProducts };
