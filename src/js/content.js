import { getProducts } from "./axios.js";

const initializeDOMElements = () => {
  const marketplaceHtml = document.querySelector(".marketplace");
  const homeHtml = document.querySelector(".home");
  const allHtml = document.querySelector(".all");
  const marblesHtml = document.querySelector(".marbles");
  const granitesHtml = document.querySelector(".granites");
  const othersHtml = document.querySelector(".others");
  const productsListHtml = document.createElement("ul");

  return {
    marketplaceHtml,
    homeHtml,
    allHtml,
    marblesHtml,
    granitesHtml,
    othersHtml,
    productsListHtml,
  };
};

const initializeGlobalVariables = () => {
  let globalProducts = [];

  return {
    globalProducts,
  };
};

export const {
  marketplaceHtml,
  homeHtml,
  allHtml,
  marblesHtml,
  granitesHtml,
  othersHtml,
  productsListHtml,
} = initializeDOMElements();

export let { globalProducts } = initializeGlobalVariables();

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

const setDinamicHTML = (type) => {
  const categoryHtmls = [allHtml, marblesHtml, granitesHtml, othersHtml];
  categoryHtmls.forEach((Html) => Html.classList.remove("bold"));

  if (type === "initial") {
    allHtml.classList.add("bold");
  } else {
    eval(type + "Html.classList.add('bold')");
  }

  productsListHtml.classList.add("productsList");
  marketplaceHtml.innerHTML = "";
  marketplaceHtml.append(productsListHtml);
  marketplaceHtml.insertAdjacentHTML(
    "afterbegin",
    "<h1>Os melhores preços você só encontra aqui!!</h1>"
  );

  handleProducts();
};

const handleProducts = () => {
  getProducts()
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
    if (currentProduct.price <= 300) {
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
    }
  });
};

// Event listeners for category Htmls
homeHtml.addEventListener("click", () => setHTMLStructure("initial"));
allHtml.addEventListener("click", () => setHTMLStructure("all"));
marblesHtml.addEventListener("click", () => setHTMLStructure("marbles"));
granitesHtml.addEventListener("click", () => setHTMLStructure("granites"));
othersHtml.addEventListener("click", () => setHTMLStructure("others"));

// Initial setup
setupStaticHTML("initial");

// listaCompras.addEventListener("click", removerproduct);

// function removerproduct(event) {
//   total.innerHTML = "";

//   let remCar = event.target;

//   if (remCar.HtmlName == "H5") {
//     cont--;
//     let num = remCar.classList[0].slice(3);
//     let classe = "product" + num;
//     let product = document.getElementsByClassName(classe);
//     listaCompras.removeChild(product[0]);

//     for (let i = 0; i < data.length; i++) {
//       productAtual = data[i];

//       if (productAtual.id === Number(num)) {
//         soma -= productAtual.price;
//       }
//     }
//   } else {
//   }

//   somaTotal = "R$ " + soma.toFixed(2).replace(".", ",");
//   let totalCarrinho = document.createElement("li");
//   let totalTitulo = document.createElement("h3");
//   let totalValor = document.createElement("span");
//   let qtdCarrinho = document.createElement("li");
//   let qtdTitulo = document.createElement("h3");
//   let qtdValor = document.createElement("span");
//   totalTitulo.innerText = "Total";
//   totalValor.innerText = somaTotal;
//   qtdTitulo.innerText = "Quantidade";
//   qtdValor.innerText = cont;

//   total.append(qtdCarrinho, totalCarrinho);
//   qtdCarrinho.append(qtdTitulo, qtdValor);
//   totalCarrinho.append(totalTitulo, totalValor);

//   arrumarCarrinho();
// }

// function arrumarCarrinho() {
//   if (listaCompras.children.length === 0) {
//     vazio.insertAdjacentHTML(
//       "afterbegin",
//       `<h4>Carrinho vazio</h4>
//        <span>Adcione itens</span>`
//     );
//     total.innerHTML = "";
//   }
// }

// function criandoHtmls(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let productAtual = arr[i];
//     let nome = productAtual.nome
//       .toLowerCase()
//       .replace("á", "a")
//       .replace("ó", "o");
//     let chavesNome = nome.split(" ");
//     let palavrasChave = [];
//     palavrasChave.push(nome);

//     for (let j = 0; j < chavesNome.length; j++) {
//       let chaveNome = chavesNome[j];

//       palavrasChave.push(chaveNome);
//     }

//     palavrasChave.push(
//       "pedra",
//       productAtual.Html.toLowerCase().replace("á", "a")
//     );

//     productAtual.Htmls = palavrasChave;
//   }
// }

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
//     productAtual = arr[i];

//     if (productAtual.Htmls.includes(buscada)) {
//       resultadoBusca = true;
//       let itemList = document.createElement("li");
//       let figure = document.createElement("figure");
//       let image = document.createElement("img");
//       let category = document.createElement("h4");
//       let product = document.createElement("h2");
//       let description = document.createElement("p");
//       let price = document.createElement("span");
//       let addCarrinho = document.createElement("h3");

//       image.src = productAtual.img;
//       addCarrinho.id = productAtual.id;
//       category.innerText = productAtual.Html;
//       product.innerText = productAtual.nome;
//       description.innerText = productAtual.description;
//       price.innerText =
//         "R$ " + productAtual.price.toFixed(2).replace(".", ",") + "/m²";
//       addCarrinho.innerText = productAtual.textoBotao;

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
