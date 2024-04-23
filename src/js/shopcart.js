import { marketplaceTag } from "./content.js";
import { globalProducts } from "./content.js";

const initializeDOMElements = () => {
  const shopList = document.querySelector(".shop-list");
  const total = document.querySelector(".total");
  const empty = document.querySelector(".empty");

  return {
    shopList,
    total,
    empty,
  };
};

const initializeGlobalVariables = () => {
  let sum = 0;
  let count = 0;

  return {
    sum,
    count,
  };
};

const { shopList, total, empty } = initializeDOMElements();
let { sum, count } = initializeGlobalVariables();

const addToCart = (event) => {
  let addCart = event.target;

  if (addCart.tagName === "H3") {
    empty.innerHTML = "";
    total.innerHTML = "";
    count++;

    globalProducts.forEach((prodItem) => {
      if (prodItem._id === addCart.id) {
        sum += prodItem.price;

        let cartItem = document.createElement("li");
        let image = document.createElement("img");
        let product = document.createElement("h4");
        let price = document.createElement("span");
        let trash = document.createElement("h5");

        image.src = prodItem.path;
        cartItem.classList.add("product" + prodItem.id);
        trash.classList.add("rem" + prodItem.id);
        product.innerText = prodItem.name;
        price.innerText =
          "R$ " + prodItem.price.toFixed(2).replace(".", ",") + "/m²";
        trash.innerText = "Remover";

        shopList.append(cartItem);
        cartItem.append(image, product, price, trash);
      }
    });

    if (count === 1) {
      return createCartWithProducts();
    }

    updateKart();
  }
};

const createCartWithProducts = () => {
  let cartTotal = document.createElement("li");
  let totalTitle = document.createElement("h3");
  let totalValue = document.createElement("span");
  let cartQtd = document.createElement("li");
  let qtdTitle = document.createElement("h3");
  let qtdValue = document.createElement("span");

  totalValue.classList.add("total-value");
  qtdValue.classList.add("qtd-value");

  totalTitle.innerText = "Total";
  qtdTitle.innerText = "Quantidade";

  cartTotal.append(totalTitle, totalValue);
  cartQtd.append(qtdTitle, qtdValue);
  total.append(cartTotal, cartQtd);

  updateKart();
};

const updateKart = () => {
  const sumTotal = "R$ " + sum.toFixed(2).replace(".", ",");
  const totalValue = document.querySelector(".total-value");
  const qtdValue = document.querySelector(".qtd-value");

  totalValue.innerText = sumTotal;

  qtdValue.innerText = count;
};

marketplaceTag.addEventListener("click", addToCart);

function removeProduct(event) {
  total.innerHTML = "";

  let removeCart = event.target;

  if (remCar.tagName == "H5") {
    count--;
    const num = remCar.classList[0].slice(3);
    const className = "product" + num;
    const product = document.getElementsByClassName(className);
    shopList.removeChild(product[0]);

    globalProducts.forEach((product) => {
      if (product._id === Number(num)) {
        sum -= product.price;
      }
    });
  }

  if (count === 0) {
    return createEmptyCart();
  }

  updateKart();
}

const createEmptyCart = () => {
  empty.insertAdjacentHTML(
    "afterbegin",
    `<h4>Carrinho vazio</h4>
       <span>Adcione itens</span>`
  );
  total.innerHTML = "";
};

shopList.addEventListener("click", addToCart);

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

//     if (product.tags.includes(buscada)) {
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
//       category.innerText = product.tag;
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
