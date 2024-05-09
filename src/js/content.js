import { getProducts } from "./axios.js";
import {
  allHtml,
  marblesHtml,
  granitesHtml,
  othersHtml,
} from "./categories.js";

const initializeDOMElements = () => {
  const marketplaceHtml = document.querySelector(".marketplace");
  const homeHtml = document.querySelector(".home");
  const productsListHtml = document.createElement("ul");

  return {
    marketplaceHtml,
    homeHtml,
    productsListHtml,
  };
};

const initializeGlobalVariables = () => {
  let globalProducts = [];

  return {
    globalProducts,
  };
};

const { marketplaceHtml, homeHtml, productsListHtml } = initializeDOMElements();

let { globalProducts } = initializeGlobalVariables();

const setupStaticHTML = () => {
  marketplaceHtml.innerHTML = "";
  productsListHtml.classList.add("products-list");
  marketplaceHtml.append(productsListHtml);

  setDinamicHTML("initial");
};

const setDinamicHTML = (type, filter) => {
  const categoryHtmls = [allHtml, marblesHtml, granitesHtml, othersHtml];
  categoryHtmls.forEach((Html) => Html.classList.remove("bold"));

  if (type === "initial") {
    allHtml.classList.add("bold");
    handleProducts();
  } else {
    eval(type + "Html.classList.add('bold')");
    handleProducts("category", filter);
  }
};

const handleProducts = (type, filter) => {
  getProducts(type, filter)
    .then((response) => {
      const productsData = response.data.data;
      createProductsHTML(productsData);
      globalProducts = [...productsData];
    })
    .catch((error) => {
      console.error("Erro ao obter produtos:", error);
    });
};

const createProductsHTML = (productsData) => {
  productsListHtml.innerHTML = "";

  productsData.forEach((currentProduct) => {
    const itemListHtml = document.createElement("li");
    const figureHtml = document.createElement("figure");
    const imageHtml = document.createElement("img");
    const cardTextHtml = document.createElement("div");
    const categoryTagHtml = document.createElement("div");
    const categoryTextHtml = document.createElement("span");
    const productHtml = document.createElement("h2");
    const descriptionHtml = document.createElement("p");
    const priceHtml = document.createElement("span");
    const addToCartButtonHtml = document.createElement("button");
    const addToCartHtml = document.createElement("span");

    itemListHtml.id = currentProduct._id;
    imageHtml.src = currentProduct.path;
    addToCartButtonHtml.id = currentProduct._id;

    categoryTextHtml.innerText = currentProduct.category;
    productHtml.innerText = currentProduct.name;
    descriptionHtml.innerText = currentProduct.description;
    priceHtml.innerText =
      "R$ " + currentProduct.price.toFixed(2).replace(".", ",") + "/m²";
    addToCartButtonHtml.innerText = "Adicionar no carrinho";

    cardTextHtml.classList.add("card-text");
    categoryTagHtml.classList.add("category-tag");

    figureHtml.append(imageHtml);
    categoryTagHtml.append(categoryTextHtml);
    cardTextHtml.append(
      categoryTagHtml,
      productHtml,
      descriptionHtml,
      priceHtml,
      addToCartButtonHtml
    );
    itemListHtml.append(figureHtml, cardTextHtml);
    productsListHtml.append(itemListHtml);
  });
};

// Event listeners for category Htmls
homeHtml.addEventListener("click", () => setupStaticHTML());

// Initial setup
setupStaticHTML();

export { marketplaceHtml, handleProducts, globalProducts, setDinamicHTML };
