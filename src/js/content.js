import { getProducts } from "./axios.js";

const initializeDOMElements = () => {
  const marketplaceTag = document.querySelector(".marketplace");
  const homeTag = document.querySelector(".home");
  const allTag = document.querySelector(".all");
  const marblesTag = document.querySelector(".marbles");
  const granitesTag = document.querySelector(".granites");
  const othersTag = document.querySelector(".others");
  const productsListTag = document.createElement("ul");

  return {
    marketplaceTag,
    homeTag,
    allTag,
    marblesTag,
    granitesTag,
    othersTag,
    productsListTag,
  };
};

const initializeGlobalVariables = () => {
  let globalProducts = [];

  return {
    globalProducts,
  };
};

export const {
  marketplaceTag,
  homeTag,
  allTag,
  marblesTag,
  granitesTag,
  othersTag,
  productsListTag,
} = initializeDOMElements();

export let { globalProducts } = initializeGlobalVariables();

const setupStaticHTML = () => {
  marketplaceTag.innerHTML = "";
  productsListTag.classList.add("productsList");
  marketplaceTag.append(productsListTag);
  marketplaceTag.insertAdjacentHTML(
    "afterbegin",
    "<h1>Os melhores preços você só encontra aqui!!</h1>"
  );

  setDinamicHTML("initial");
};

const setDinamicHTML = (type) => {
  const categoryTags = [allTag, marblesTag, granitesTag, othersTag];
  categoryTags.forEach((tag) => tag.classList.remove("bold"));

  if (type === "initial") {
    allTag.classList.add("bold");
  } else {
    eval(type + "Tag.classList.add('bold')");
  }

  productsListTag.classList.add("productsList");
  marketplaceTag.innerHTML = "";
  marketplaceTag.append(productsListTag);
  marketplaceTag.insertAdjacentHTML(
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
  productsListTag.innerHTML = "";

  productsData.forEach((currentProduct) => {
    if (currentProduct.price <= 300) {
      const itemList = document.createElement("li");
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      const category = document.createElement("h4");
      const product = document.createElement("h2");
      const description = document.createElement("p");
      const price = document.createElement("span");
      const addToCart = document.createElement("h3");

      image.src = currentProduct.path;
      addToCart.id = currentProduct._id;
      category.innerText = currentProduct.category;
      product.innerText = currentProduct.name;
      description.innerText = currentProduct.description;
      price.innerText =
        "R$ " + currentProduct.price.toFixed(2).replace(".", ",") + "/m²";
      addToCart.innerText = "Adicionar no carrinho";

      productsListTag.append(itemList);
      itemList.append(figure, category, product, description, price, addToCart);
      figure.append(image);
    }
  });
};

// Event listeners for category tags
homeTag.addEventListener("click", () => setHTMLStructure("initial"));
allTag.addEventListener("click", () => setHTMLStructure("all"));
marblesTag.addEventListener("click", () => setHTMLStructure("marbles"));
granitesTag.addEventListener("click", () => setHTMLStructure("granites"));
othersTag.addEventListener("click", () => setHTMLStructure("others"));

// Initial setup
setupStaticHTML("initial");

// listaCompras.addEventListener("click", removerproduct);

// function removerproduct(event) {
//   total.innerHTML = "";

//   let remCar = event.target;

//   if (remCar.tagName == "H5") {
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

// function criandoTags(arr) {
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
//       productAtual.tag.toLowerCase().replace("á", "a")
//     );

//     productAtual.tags = palavrasChave;
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

//     if (productAtual.tags.includes(buscada)) {
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
//       category.innerText = productAtual.tag;
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
