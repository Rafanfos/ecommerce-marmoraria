import { marketplaceHtml } from "./content.js";
import { globalProducts } from "./content.js";

const initializeDOMElements = () => {
  const shopListHtml = document.querySelector(".shop-list");
  const totalHtml = document.querySelector(".total");
  const emptyBlockHtml = document.querySelector(".empty");
  const noEmptyBlockHtml = document.querySelector(".no-empty");

  return {
    shopListHtml,
    totalHtml,
    emptyBlockHtml,
    noEmptyBlockHtml,
  };
};

const initializeGlobalVariables = () => {
  let sum = 0;
  let count = 0;
  let isInitial = true;

  return {
    sum,
    count,
    isInitial,
  };
};

const { shopListHtml, totalHtml, emptyBlockHtml, noEmptyBlockHtml } =
  initializeDOMElements();
let { sum, count, isInitial } = initializeGlobalVariables();

const addToCart = (event) => {
  const addCartHtml = event.target;

  if (addCartHtml.tagName === "H3") {
    count++;

    if (count > 0) {
      toggleEmptyNoEmpty(noEmptyBlockHtml, emptyBlockHtml);
    }

    globalProducts.forEach((prodItem) => {
      if (prodItem._id === addCartHtml.id) {
        sum += prodItem.price;

        const cartItemHtml = document.createElement("li");
        const imageHtml = document.createElement("img");
        const productHtml = document.createElement("h4");
        const priceHtml = document.createElement("span");
        const trashHtml = document.createElement("i");

        imageHtml.src = prodItem.path;
        cartItemHtml.id = prodItem._id;
        trashHtml.id = prodItem._id;
        productHtml.innerText = prodItem.name;
        priceHtml.innerText =
          "R$ " + prodItem.price.toFixed(2).replace(".", ",") + "/m²";
        trashHtml.classList.add("material-symbols-outlined");
        trashHtml.innerText = "delete";

        shopListHtml.append(cartItemHtml);
        cartItemHtml.append(imageHtml, productHtml, priceHtml, trashHtml);
      }
    });

    if (isInitial) {
      return createCartWithProducts();
    }

    updateKart();
  }
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

  totalTitleHtml.innerText = "Total";
  qtdTitleHtml.innerText = "Quantidade";

  cartTotalHtml.append(totalTitleHtml, totalValueHtml);
  cartQtdHtml.append(qtdTitleHtml, qtdValueHtml);
  totalHtml.append(cartTotalHtml, cartQtdHtml);

  updateKart();

  isInitial = false;
};

const updateKart = () => {
  const sumTotal = "R$ " + sum.toFixed(2).replace(".", ",");
  const totalValueHtml = document.querySelector(".total-value");
  const qtdValueHtml = document.querySelector(".qtd-value");

  totalValueHtml.innerText = sumTotal;

  qtdValueHtml.innerText = count;
};

marketplaceHtml.addEventListener("click", addToCart);

const removeProduct = (event) => {
  const remCartHtml = event.target;

  if (remCartHtml.tagName.toLowerCase() == "i") {
    count--;
    const productToDelete = remCartHtml.closest("li");
    shopListHtml.removeChild(productToDelete);

    globalProducts.forEach((product) => {
      if (product._id === remCartHtml.id) {
        sum -= product.price;
      }
    });
  }

  if (count === 0) {
    toggleEmptyNoEmpty(emptyBlockHtml, noEmptyBlockHtml);
  }

  updateKart();
};

// const createEmptyCart = () => {
//   emptyBlockHtml.style.display = "flex";
//   emptyBlockHtml.style.flexDirection = "column";

//   document.querySelector(".no-empty").style.display = "none";
// };

shopListHtml.addEventListener("click", removeProduct);

const toggleEmptyNoEmpty = (toShow, toHide) => {
  toShow.style.display = "flex";
  toShow.style.flexDirection = "column";

  toHide.style.display = "none";
};

// const botaoBusca = document.querySelector(".lupa");
// const palavraBusca = document.querySelector(".inputBusca");

// botaoBusca.addEventListener("click", function () {
//   vitrine.innerHTML = "";

//   busca(data);
// });

// function busca(arr) {
//   const listaproducts = document.createElement("ul");
//   listaproducts.classList.add("listaproducts");
//   vitrine.append(listaproducts);
//   let buscada = palavraBusca.value
//     .toLowerCase()
//     .replace("á", "a")
//     .replace("ó", "o");
//   let resultadoBusca = false;

//   for (let i = 0; i < data.length; i++) {
//     product = arr[i];

//     if (product.Htmls.includes(buscada)) {
//       resultadoBusca = true;
//       let itemList = document.createElement("li");
//       let figure = document.createElement("figure");
//       let image = document.createElement("img");
//       let category = document.createElement("h4");
//       let product = document.createElement("h2");
//       let description = document.createElement("p");
//       let price = document.createElement("span");
//       let addCarrinho = document.createElement("h3");

//       image.src = product.img;
//       addCarrinho.id = product.id;
//       category.innerText = product.Html;
//       product.innerText = product.nome;
//       description.innerText = product.description;
//       price.innerText =
//         "R$ " + product.price.toFixed(2).replace(".", ",") + "/m²";
//       addCarrinho.innerText = product.textoBotao;

//       listaproducts.append(itemList);
//       itemList.append(
//         figure,
//         category,
//         product,
//         description,
//         price,
//         addCarrinho
//       );
//       figure.append(image);
//     }
//   }
//   if (resultadoBusca === true) {
//     vitrine.insertAdjacentHTML(
//       "afterbegin",
//       "<h1>Foram encontrados os resultados...</h1>"
//     );
//   } else {
//     vitrine.insertAdjacentHTML(
//       "afterbegin",
//       "<h1>Não foi encontrado nenhum resultado.</h1>"
//     );
//   }
// }
