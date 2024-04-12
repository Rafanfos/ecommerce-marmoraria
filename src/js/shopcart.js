import { marketplaceTag } from "./content.js";

const initializeDOMElements = () => {
  const shopList = document.querySelector(".shopList");
  const total = document.querySelector(".total");
  const empty = document.querySelector(".empty");

  let sum = 0;
  let count = 0;

  return {
    shopList,
    total,
    empty,
    sum,
    count,
  };
};

const { shopList, total, empty, sum, count } = initializeDOMElements();

const addToCart = (event) => {
  let addCar = event.target;

  if (addCar.tagName === "H3") {
    empty.innerHTML = "";
    total.innerHTML = "";
    count++;

    for (let i = 0; i < data.length; i++) {
      let productAtual = data[i];
      if (productAtual.id == addCar.id) {
        sum += productAtual.price;

        let itemCarrinho = document.createElement("li");
        let image = document.createElement("img");
        let product = document.createElement("h4");
        let price = document.createElement("span");
        let remover = document.createElement("h5");

        image.src = productAtual.img;
        itemCarrinho.classList.add("product" + productAtual.id);
        remover.classList.add("rem" + productAtual.id);
        product.innerText = productAtual.nome;
        price.innerText =
          "R$ " + productAtual.price.toFixed(2).replace(".", ",") + "/m²";
        remover.innerText = "Remover";

        listaCompras.append(itemCarrinho);
        itemCarrinho.append(image, product, price, remover);
      }
    }
    sumTotal = "R$ " + sum.toFixed(2).replace(".", ",");
    let totalCarrinho = document.createElement("li");
    let totalTitulo = document.createElement("h3");
    let totalValor = document.createElement("span");
    let qtdCarrinho = document.createElement("li");
    let qtdTitulo = document.createElement("h3");
    let qtdValor = document.createElement("span");
    totalTitulo.innerText = "Total";
    totalValor.innerText = sumTotal;
    qtdTitulo.innerText = "Quantidade";
    qtdValor.innerText = count;

    total.append(qtdCarrinho, totalCarrinho);
    qtdCarrinho.append(qtdTitulo, qtdValor);
    totalCarrinho.append(totalTitulo, totalValor);
  }
};

marketplaceTag.addEventListener("click", addToCart);
