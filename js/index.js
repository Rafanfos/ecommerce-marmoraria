const vitrine = document.querySelector(".vitrine");
listarProdutos(data);
criandoTags(data);

const home = document.querySelector(".home");

home.addEventListener("click", function () {
  vitrine.innerHTML = "";

  listarProdutos(data);
});

function listarProdutos(arr) {
  const listaProdutos = document.createElement("ul");
  listaProdutos.classList.add("listaProdutos");
  vitrine.append(listaProdutos);

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

const tudo = document.querySelector(".tudo");

tudo.addEventListener("click", function () {
  vitrine.innerHTML = "";

  listarTudo(data);
});

function listarTudo(arr) {
  const listaProdutos = document.createElement("ul");
  listaProdutos.classList.add("listaProdutos");
  vitrine.append(listaProdutos);
  vitrine.insertAdjacentHTML("afterbegin", "<h1>Todos os produtos</h1>");
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

const marmores = document.querySelector(".marmores");

marmores.addEventListener("click", function () {
  vitrine.innerHTML = "";

  listarMarmores(data);
});

function listarMarmores(arr) {
  const listaProdutos = document.createElement("ul");
  listaProdutos.classList.add("listaProdutos");
  vitrine.append(listaProdutos);
  vitrine.insertAdjacentHTML("afterbegin", "<h1>Mármores</h1>");

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

const granitos = document.querySelector(".granitos");

granitos.addEventListener("click", function () {
  vitrine.innerHTML = "";

  listarGranitos(data);
});

function listarGranitos(arr) {
  const listaProdutos = document.createElement("ul");
  listaProdutos.classList.add("listaProdutos");
  vitrine.append(listaProdutos);
  vitrine.insertAdjacentHTML("afterbegin", "<h1>Granitos</h1>");
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

const outros = document.querySelector(".outros");

outros.addEventListener("click", function () {
  vitrine.innerHTML = "";

  listarOutros(data);
});

function listarOutros(arr) {
  const listaProdutos = document.createElement("ul");
  listaProdutos.classList.add("listaProdutos");
  vitrine.append(listaProdutos);
  vitrine.insertAdjacentHTML("afterbegin", "<h1>Outros</h1>");
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

const listaCompras = document.querySelector(".listaCompras");
const total = document.querySelector(".total");
const vazio = document.querySelector(".vazio");
let soma = 0;
let cont = 0;

vitrine.addEventListener("click", adcionarCarrinho);

function adcionarCarrinho(event) {
  vazio.innerHTML = "";
  let addCar = event.target;

  if (addCar.tagName == "H3") {
    cont++;
    total.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      let produtoAtual = data[i];
      if (produtoAtual.id == addCar.id) {
        soma += produtoAtual.preco;

        let itemCarrinho = document.createElement("li");
        let imagem = document.createElement("img");
        let produto = document.createElement("h4");
        let preco = document.createElement("span");
        let remover = document.createElement("h5");

        imagem.src = produtoAtual.img;
        itemCarrinho.classList.add("produto" + produtoAtual.id);
        remover.classList.add("rem" + produtoAtual.id);
        produto.innerText = produtoAtual.nome;
        preco.innerText =
          "R$ " + produtoAtual.preco.toFixed(2).replace(".", ",") + "/m²";
        remover.innerText = "Remover";

        listaCompras.append(itemCarrinho);
        itemCarrinho.append(imagem, produto, preco, remover);
      }
    }
    somaTotal = "R$ " + soma.toFixed(2).replace(".", ",");
    let totalCarrinho = document.createElement("li");
    let totalTitulo = document.createElement("h3");
    let totalValor = document.createElement("span");
    let qtdCarrinho = document.createElement("li");
    let qtdTitulo = document.createElement("h3");
    let qtdValor = document.createElement("span");
    totalTitulo.innerText = "Total";
    totalValor.innerText = somaTotal;
    qtdTitulo.innerText = "Quantidade";
    qtdValor.innerText = cont;

    total.append(qtdCarrinho, totalCarrinho);
    qtdCarrinho.append(qtdTitulo, qtdValor);
    totalCarrinho.append(totalTitulo, totalValor);
  }
}

listaCompras.addEventListener("click", removerProduto);

function removerProduto(event) {
  total.innerHTML = "";

  let remCar = event.target;

  if (remCar.tagName == "H5") {
    cont--;
    let num = remCar.classList[0].slice(3);
    let classe = "produto" + num;
    let produto = document.getElementsByClassName(classe);
    listaCompras.removeChild(produto[0]);

    for (let i = 0; i < data.length; i++) {
      produtoAtual = data[i];

      if (produtoAtual.id === Number(num)) {
        soma -= produtoAtual.preco;
      }
    }
  } else {
  }

  somaTotal = "R$ " + soma.toFixed(2).replace(".", ",");
  let totalCarrinho = document.createElement("li");
  let totalTitulo = document.createElement("h3");
  let totalValor = document.createElement("span");
  let qtdCarrinho = document.createElement("li");
  let qtdTitulo = document.createElement("h3");
  let qtdValor = document.createElement("span");
  totalTitulo.innerText = "Total";
  totalValor.innerText = somaTotal;
  qtdTitulo.innerText = "Quantidade";
  qtdValor.innerText = cont;

  total.append(qtdCarrinho, totalCarrinho);
  qtdCarrinho.append(qtdTitulo, qtdValor);
  totalCarrinho.append(totalTitulo, totalValor);

  arrumarCarrinho();
}

function arrumarCarrinho() {
  if (listaCompras.children.length === 0) {
    vazio.insertAdjacentHTML(
      "afterbegin",
      `<h4>Carrinho vazio</h4>
       <span>Adcione itens</span>`
    );
    total.innerHTML = "";
  }
}

function criandoTags(arr) {
  for (let i = 0; i < arr.length; i++) {
    let produtoAtual = arr[i];
    let nome = produtoAtual.nome
      .toLowerCase()
      .replace("á", "a")
      .replace("ó", "o");
    let chavesNome = nome.split(" ");
    let palavrasChave = [];
    palavrasChave.push(nome);

    for (let j = 0; j < chavesNome.length; j++) {
      let chaveNome = chavesNome[j];

      palavrasChave.push(chaveNome);
    }

    palavrasChave.push(
      "pedra",
      produtoAtual.tag.toLowerCase().replace("á", "a")
    );

    produtoAtual.tags = palavrasChave;
  }
}

const botaoBusca = document.querySelector(".lupa");
const palavraBusca = document.querySelector(".inputBusca");

botaoBusca.addEventListener("click", function () {
  vitrine.innerHTML = "";

  busca(data);
});

function busca(arr) {
  const listaProdutos = document.createElement("ul");
  listaProdutos.classList.add("listaProdutos");
  vitrine.append(listaProdutos);
  let buscada = palavraBusca.value
    .toLowerCase()
    .replace("á", "a")
    .replace("ó", "o");
  let resultadoBusca = false;

  for (let i = 0; i < data.length; i++) {
    produtoAtual = arr[i];

    if (produtoAtual.tags.includes(buscada)) {
      resultadoBusca = true;
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
  if (resultadoBusca === true) {
    vitrine.insertAdjacentHTML(
      "afterbegin",
      "<h1>Foram encontrados os resultados...</h1>"
    );
  } else {
    vitrine.insertAdjacentHTML(
      "afterbegin",
      "<h1>Não foi encontrado nenhum resultado.</h1>"
    );
  }
}
