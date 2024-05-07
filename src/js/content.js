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
  productsListHtml.classList.add("productsList");
  marketplaceHtml.append(productsListHtml);
  marketplaceHtml.insertAdjacentHTML(
    "afterbegin",
    "<h1>Os melhores preços você só encontra aqui!!</h1>"
  );

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
    const categoryHtml = document.createElement("h4");
    const productHtml = document.createElement("h2");
    const descriptionHtml = document.createElement("p");
    const priceHtml = document.createElement("span");
    const addToCartHtml = document.createElement("h3");

    itemListHtml.id = currentProduct._id;
    imageHtml.src = currentProduct.path;
    addToCartHtml.id = currentProduct._id;
    categoryHtml.innerText = currentProduct.category;
    productHtml.innerText = currentProduct.name;
    descriptionHtml.innerText = currentProduct.description;
    priceHtml.innerText =
      "R$ " + currentProduct.price.toFixed(2).replace(".", ",") + "/m²";
    addToCartHtml.innerText = "Adicionar no carrinho";

    productsListHtml.append(itemListHtml);
    itemListHtml.append(
      figureHtml,
      categoryHtml,
      productHtml,
      descriptionHtml,
      priceHtml,
      addToCartHtml
    );
    figureHtml.append(imageHtml);
  });
};

// Event listeners for category Htmls
homeHtml.addEventListener("click", () => setupStaticHTML());

// Initial setup
setupStaticHTML();

export { marketplaceHtml, handleProducts, globalProducts, setDinamicHTML };
