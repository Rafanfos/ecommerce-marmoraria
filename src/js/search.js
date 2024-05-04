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
