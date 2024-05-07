import { handleProducts, marketplaceHtml } from "./content.js";

const initializeDOMElements = () => {
  const searchHtml = document.querySelector(".search");
  const searchInputHtml = document.querySelector(".searchInput");

  return {
    searchHtml,
    searchInputHtml,
  };
};

const { searchHtml, searchInputHtml } = initializeDOMElements();

searchHtml.addEventListener("click", () => {
  const data = normalizeEntries(searchInputHtml.value);

  handleProducts("tags", data);
});

const normalizeEntries = (input) => {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};
