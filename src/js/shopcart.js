import { marketplaceHtml } from "./content.js";
import { globalProducts } from "./content.js";

const initializeDOMElements = () => {
  const shopListHtml = document.querySelector(".shop-list");
  const totalHtml = document.querySelector(".total");
  const emptyBlockHtml = document.querySelector(".empty");
  const noEmptyBlockHtml = document.querySelector(".no-empty");
  const searchHtml = document.querySelector(".search");
  const searchInputHtml = document.querySelector(".searchInput");

  return {
    shopListHtml,
    totalHtml,
    emptyBlockHtml,
    noEmptyBlockHtml,
    searchHtml,
    searchInputHtml,
  };
};

const initializeGlobalVariables = () => {
  let sum = 0;
  let count = 0;
  let isInitial = true;
  let shopListArr = [];

  return {
    sum,
    isInitial,
    shopListArr,
  };
};

const { shopListHtml, totalHtml, emptyBlockHtml, noEmptyBlockHtml } =
  initializeDOMElements();
let { sum, isInitial, shopListArr } = initializeGlobalVariables();

const addToCart = (event) => {
  const addCartHtml = event.target;

  if (addCartHtml.tagName === "BUTTON") {
    verifyCartProduct(addCartHtml, true);

    if (isInitial) {
      return createCartWithProducts();
    }

    updateKart();
  }
};

const verifyCartProduct = (cartProductHtml, isAdd) => {
  const currentCartProduct = globalProducts.find(
    ({ _id }) => _id === cartProductHtml.id
  );

  const repeatedCartProduct = shopListArr.find(
    ({ _id }) => _id === currentCartProduct._id
  );

  if (repeatedCartProduct) {
    updateCartProduct(currentCartProduct, isAdd, cartProductHtml);
  } else {
    createCartProduct(currentCartProduct);
  }
};

const createCartProduct = (cartProduct) => {
  cartProduct.qtd = 1;
  shopListArr.push(cartProduct);

  const cartItemHtml = document.createElement("li");
  const imageHtml = document.createElement("img");
  const qtdHtml = document.createElement("div");
  const qtdTextHtml = document.createElement("span");
  const qtdValueHtml = document.createElement("span");
  const productHtml = document.createElement("span");
  const priceHtml = document.createElement("span");
  const trashHtml = document.createElement("i");

  cartItemHtml.id = `cart-item${cartProduct._id}`;
  trashHtml.id = cartProduct._id;

  imageHtml.src = cartProduct.path;

  qtdTextHtml.innerText = qtdValueHtml.innerText = "Qtd: ";
  qtdValueHtml.innerText = cartProduct.qtd;
  productHtml.innerText = cartProduct.name;
  priceHtml.innerText =
    "R$ " + cartProduct.price.toFixed(2).replace(".", ",") + "/m²";
  trashHtml.innerText = "delete";

  trashHtml.classList.add("material-symbols-outlined");
  productHtml.classList.add("product-name");
  priceHtml.classList.add("product-price");

  qtdHtml.append(qtdTextHtml, qtdValueHtml);
  shopListHtml.append(cartItemHtml);
  cartItemHtml.append(imageHtml, productHtml, qtdHtml, priceHtml, trashHtml);

  toggleEmptyNoEmpty(noEmptyBlockHtml, emptyBlockHtml);
};

const updateCartProduct = (cartProduct, isAdd, cartProductHtml) => {
  if (isAdd) {
    cartProduct.qtd++;
  } else {
    cartProduct.qtd--;
  }

  if (cartProduct.qtd === 0) {
    return deleteCartProduct(cartProductHtml);
  }

  const cartProductItemHtml = document.getElementById(
    `cart-item${cartProduct._id}`
  );

  const qtdCartProductHtml = cartProductItemHtml.children[2];
  const qtdCartProductValueHtml = qtdCartProductHtml.children[1];

  qtdCartProductValueHtml.innerText = cartProduct.qtd;
};

const createCartWithProducts = () => {
  const cartTotalHtml = document.createElement("li");
  const totalTitleHtml = document.createElement("h3");
  const totalValueHtml = document.createElement("span");
  const cartQtdHtml = document.createElement("li");
  const qtdTitleHtml = document.createElement("h3");
  const qtdValueHtml = document.createElement("span");

  totalValueHtml.classList.add("total-value");
  qtdValueHtml.classList.add("qtd-value");

  totalTitleHtml.innerText = "Total:";
  qtdTitleHtml.innerText = "Quantidade:";

  cartTotalHtml.append(totalTitleHtml, totalValueHtml);
  cartQtdHtml.append(qtdTitleHtml, qtdValueHtml);
  totalHtml.append(cartQtdHtml, cartTotalHtml);

  updateKart();

  isInitial = false;
};

const updateKart = () => {
  sum = shopListArr.reduce((acc, { price, qtd }) => acc + qtd * price, 0);
  const qtdTotal = shopListArr.reduce((acc, { qtd }) => acc + qtd, 0);

  const sumTotal = "R$ " + sum.toFixed(2).replace(".", ",");
  const totalValueHtml = document.querySelector(".total-value");
  const qtdValueHtml = document.querySelector(".qtd-value");

  totalValueHtml.innerText = sumTotal;

  qtdValueHtml.innerText = qtdTotal;
};

marketplaceHtml.addEventListener("click", addToCart);

const removeProduct = (event) => {
  const remCartHtml = event.target;

  if (remCartHtml.tagName.toLowerCase() == "i") {
    verifyCartProduct(remCartHtml);

    updateKart();
  }
};

const deleteCartProduct = (cartProductHtml) => {
  const productToDelete = cartProductHtml.closest("li");
  const productToDeleteIndex = shopListArr.findIndex(
    ({ _id }) => _id === productToDelete.id
  );
  shopListHtml.removeChild(productToDelete);

  shopListArr.splice(productToDeleteIndex, 1);

  if (shopListArr.length === 0) {
    toggleEmptyNoEmpty(emptyBlockHtml, noEmptyBlockHtml);
  }
};

shopListHtml.addEventListener("click", removeProduct);

const toggleEmptyNoEmpty = (toShow, toHide) => {
  toShow.style.display = "flex";
  toShow.style.flexDirection = "column";

  toHide.style.display = "none";
};
