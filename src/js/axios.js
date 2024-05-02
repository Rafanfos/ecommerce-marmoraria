const getProducts = () => {
  return axios.get("http://localhost:3001/api/products/");
};

export { getProducts };
