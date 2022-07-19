const vitrine = document.querySelector(".vitrine");
const listaProdutos = document.querySelector("ul");
listarProdutos(data);

const home = document.querySelector(".home");

home.addEventListener("click", function () {
  listaProdutos.innerHTML = "";

  listarProdutos(data);
});

const tudo = document.querySelector(".tudo");

tudo.addEventListener("click", function () {
  listaProdutos.innerHTML = "";

  listarTudo(data);
});

const marmores = document.querySelector(".marmores");

marmores.addEventListener("click", function () {
  listaProdutos.innerHTML = "";

  listarMarmores(data);
});

const granitos = document.querySelector(".granitos");

granitos.addEventListener("click", function () {
  listaProdutos.innerHTML = "";

  listarGranitos(data);
});

const outros = document.querySelector(".outros");

outros.addEventListener("click", function () {
  listaProdutos.innerHTML = "";

  listarOutros(data);
});

function listarProdutos(arr) {
  
    vitrine.insertAdjacentHTML(
    "afterbegin",
    "<h1>Os melhores preços você só encontra aqui!!</h1>"
  );

  for (let i = 0; i < arr.length; i++) {
    let produtoAtual = arr[i];
    if (produtoAtual.preco <= 300) {
      let itemLista = document.createElement("li");
      let figura = document.createElement("figure");
      let imagem = document.createElement("img");
      let categoria = document.createElement("h4");
      let produto = document.createElement("h2");
      let descricao = document.createElement("p");
      let preco = document.createElement("span");
      let addCarrinho = document.createElement("h3");

      imagem.src = produtoAtual.img;
      addCarrinho.id = produtoAtual.id;
      categoria.innerText = produtoAtual.tag;
      produto.innerText = produtoAtual.nome;
      descricao.innerText = produtoAtual.descricao;
      preco.innerText =
        "R$ " + produtoAtual.preco.toFixed(2).replace(".", ",") + "/m²";
      addCarrinho.innerText = produtoAtual.textoBotao;

      listaProdutos.append(itemLista);
      itemLista.append(
        figura,
        categoria,
        produto,
        descricao,
        preco,
        addCarrinho
      );
      figura.append(imagem);
    }
  }
}

function listarTudo(arr) {
    vitrine.insertAdjacentHTML(
        "afterbegin",
        "<h1>Os melhores preços você só encontra aqui!!</h1>"
  for (let i = 0; i < arr.length; i++) {
    let produtoAtual = arr[i];
    let itemLista = document.createElement("li");
    let figura = document.createElement("figure");
    let imagem = document.createElement("img");
    let categoria = document.createElement("h4");
    let produto = document.createElement("h2");
    let descricao = document.createElement("p");
    let preco = document.createElement("span");
    let addCarrinho = document.createElement("h3");

    imagem.src = produtoAtual.img;
    addCarrinho.id = produtoAtual.id;
    categoria.innerText = produtoAtual.tag;
    produto.innerText = produtoAtual.nome;
    descricao.innerText = produtoAtual.descricao;
    preco.innerText =
      "R$ " + produtoAtual.preco.toFixed(2).replace(".", ",") + "/m²";
    addCarrinho.innerText = produtoAtual.textoBotao;

    listaProdutos.append(itemLista);
    itemLista.append(figura, categoria, produto, descricao, preco, addCarrinho);
    figura.append(imagem);
  }
}

function listarMarmores(arr) {
  for (let i = 0; i < arr.length; i++) {
    let produtoAtual = arr[i];
    if (produtoAtual.tag === "Mármores") {
      let itemLista = document.createElement("li");
      let figura = document.createElement("figure");
      let imagem = document.createElement("img");
      let categoria = document.createElement("h4");
      let produto = document.createElement("h2");
      let descricao = document.createElement("p");
      let preco = document.createElement("span");
      let addCarrinho = document.createElement("h3");

      imagem.src = produtoAtual.img;
      addCarrinho.id = produtoAtual.id;
      categoria.innerText = produtoAtual.tag;
      produto.innerText = produtoAtual.nome;
      descricao.innerText = produtoAtual.descricao;
      preco.innerText =
        "R$ " + produtoAtual.preco.toFixed(2).replace(".", ",") + "/m²";
      addCarrinho.innerText = produtoAtual.textoBotao;

      listaProdutos.append(itemLista);
      itemLista.append(
        figura,
        categoria,
        produto,
        descricao,
        preco,
        addCarrinho
      );
      figura.append(imagem);
    }
  }
}

function listarGranitos(arr) {
  for (let i = 0; i < arr.length; i++) {
    let produtoAtual = arr[i];
    if (produtoAtual.tag === "Granitos") {
      let itemLista = document.createElement("li");
      let figura = document.createElement("figure");
      let imagem = document.createElement("img");
      let categoria = document.createElement("h4");
      let produto = document.createElement("h2");
      let descricao = document.createElement("p");
      let preco = document.createElement("span");
      let addCarrinho = document.createElement("h3");

      imagem.src = produtoAtual.img;
      addCarrinho.id = produtoAtual.id;
      categoria.innerText = produtoAtual.tag;
      produto.innerText = produtoAtual.nome;
      descricao.innerText = produtoAtual.descricao;
      preco.innerText =
        "R$ " + produtoAtual.preco.toFixed(2).replace(".", ",") + "/m²";
      addCarrinho.innerText = produtoAtual.textoBotao;

      listaProdutos.append(itemLista);
      itemLista.append(
        figura,
        categoria,
        produto,
        descricao,
        preco,
        addCarrinho
      );
      figura.append(imagem);
    }
  }
}

function listarOutros(arr) {
  for (let i = 0; i < arr.length; i++) {
    let produtoAtual = arr[i];
    if (produtoAtual.tag === "Outros") {
      let itemLista = document.createElement("li");
      let figura = document.createElement("figure");
      let imagem = document.createElement("img");
      let categoria = document.createElement("h4");
      let produto = document.createElement("h2");
      let descricao = document.createElement("p");
      let preco = document.createElement("span");
      let addCarrinho = document.createElement("h3");

      imagem.src = produtoAtual.img;
      addCarrinho.id = produtoAtual.id;
      categoria.innerText = produtoAtual.tag;
      produto.innerText = produtoAtual.nome;
      descricao.innerText = produtoAtual.descricao;
      preco.innerText =
        "R$ " + produtoAtual.preco.toFixed(2).replace(".", ",") + "/m²";
      addCarrinho.innerText = produtoAtual.textoBotao;

      listaProdutos.append(itemLista);
      itemLista.append(
        figura,
        categoria,
        produto,
        descricao,
        preco,
        addCarrinho
      );
      figura.append(imagem);
    }
  }
}
