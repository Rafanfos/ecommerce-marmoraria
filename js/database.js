// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/mármores/marmore-begebahia.jpg",
    nome: "Mármore Bege Bahia",
    descricao: "Um tom claro porém com tons terrosos, ideal para pias e mesas",
    preco: 250,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 2,
    img: "./img/mármores/marmore-brancoparana.jpg",
    nome: "Mármore Branco Paraná",
    descricao:
      "Branco com leves detalhes marrons ideal para cozinhas e banheiros.",
    preco: 300,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 3,
    img: "./img/mármores/marmore-carrara.jpg",
    nameItem: "Mármore Branco Carrara",
    description:
      "Claro, limpo e com leves detalhes, ideal para bancadas, pias e banheiros em geral ",
    value: 750,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 4,
    img: "./img/mármores/marmore-marromimperial.jpg",
    nameItem: "Mármore Marrom Imperial",
    description:
      "Um tom mais chamativo, e geométrico, ideal para bancadas e escadas.",
    value: 900,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 5,
    img: "./img/mármores/marmore-nero-marquina.jpg",
    nameItem: "Mármore Nero Marquina",
    description:
      "Um tom escuro e elegante, ideal para acabamentos em banheiros bicromáticos, como em pias e divisórias.",
    value: 1000,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 6,
    img: "./img/mármores/marmore-pighes.jpg",
    nameItem: "Mármore Pighes",
    description:
      "O branco mais limpo do meio ornamental, deixando o ambiente claro e luxuoso, ideal pra cozinhas e banheiros. ",
    value: 1000,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 7,
    img: "./img/mármores/marmore-rossoverona.jpg",
    nome: "Mármore Rosso Verona",
    descricao:
      "Tom terroso, dando um car clássico a cômodos como banheiros e cozinhas, e também em acabamento como escadas e pisos. ",
    preco: 800,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 8,
    img: "./img/mármores/marmore-travertinonacional.jpg",
    nome: "Mármore Travertino Nacional",
    descricao:
      "Um suave tom terroso, combina muito bem com cores claras de móveis de cozinhas e banheiros.",
    preco: 389,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 9,
    img: "./img/mármores/marmore-travertinoromano.jpg",
    nome: "Mármore Travertino Romano",
    descricao:
      "Tom claro de bege, dando um ar clássico porém luxoso, em qualquer cómodo, ideal para pisos, revestimentos, escadas e áreas de piscina.",
    preco: 700,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  {
    id: 10,
    img: "./img/mármores/marmore-travertinoverona.jpg",
    nome: "Mármore Travertino Verona",
    descricao:
      "Um tom claro muito utilizado em conjunto com seu parente Rosso Verona, a combinação do dois torna qualquer ambiente um luxo.",
    preco: 800,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Mármore"],
  },
  ,
  {
    id: 11,
    img: "./img/granito/granito-azulestelar.jpg",
    nome: "Granito Azul Estelar",
    descricao:
      "Um tom diferente, porém dispojado, chama atenção em qualquer acabamento, ideal para pias.",
    preco: 900,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 12,
    img: "./img/granito/granito-branco-dallas.png",
    nome: "Granito Branco Dallas",
    descricao: "Simples e discreto, um tom claro. Ideal para mesas e bancadas.",
    preco: 220,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 13,
    img: "./img/granito/granito-brancoitaunas.png",
    nome: "Granito Branco Itaúnas",
    descricao: "Tons pásteis, discreto uniforme, encaixa em qualquer ambiente.",
    preco: 220,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 14,
    img: "./img/jaqueta.svimg/granito/granito-brancosiena.pngg",
    nome: "Granito Branco Siena",
    descricao:
      "Ideal para ambientes claros, um tom limpo e uniforme. Ideal para rodapés, nichos e rodabancas.",
    preco: 220,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 15,
    img: "./img/granito/granito-cafeimperial.jpg",
    nome: "Granito Café Imperial",
    descricao:
      "Tons terrosos mais escuro, combina muito bem móveis em tons de marrom mais escuros. Ideal para cozinhas, e revestimentos de paredes e escadas.",
    preco: 325,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 16,
    img: "./img/granito/granito-imperialsilver.jpg",
    nome: "Granito Imperial Silver",
    descricao:
      "Um tom diferente, de cinza claro e texturas diferenciadas, dando clareza e limpeza a qualquer ambiente.",
    preco: 325,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 17,
    img: ".img/granito/granito-ocreitabira.jpg",
    nome: "Granito Ocrei Itabira",
    descricao:
      "Tons acizentados, mais escuros, com geometrias bem características. Ideal para lareiras e pias.",
    preco: 195,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 18,
    img: "./img/granito/granito-pretoabsoluto.jpg",
    nome: "Granito Preto Absoluto",
    descricao:
      "Um tom escuro, que confere alto ínidce de impermebailidade, e o toque de luxo. Ideal para ambientes com móveis pretos ou brancos.",
    preco: 900,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 19,
    img: "./img/granito/granito-preto-saogabriel.jpg",
    nome: "Granito Preto São Gabriel",
    descricao:
      "Um tom escuro, com certa geometria, assim como seu imrão também combina com abientes de móveis brancos ou pretos.",
    preco: 330,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 20,
    img: "./img/granito/granito-verdeubatuba.jpg",
    nome: "Granito verde Ubatuba",
    descricao:
      "Uma opção mais barata, que confere um tom chique. Ideal para bancadas.",
    preco: 110,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Granito"],
  },
  {
    id: 20,
    img: "./img/outros/ardosia-cinza.png",
    nome: "Ardósia Cinza",
    descricao: "Um tom discreto e de fácil limpeza, ideal para pisos.",
    preco: 35,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Outros"],
  },
  {
    id: 20,
    img: "./img/outros/ardosia-verde.jpg",
    nome: "Ardósia Verde",
    descricao:
      "Uma cor bonita e discreta. Ideal para pisos em ambientes externos, e pias em ambientes internos",
    preco: 44,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Outros"],
  },
  {
    id: 20,
    img: "./img/outros/ardosia-preta.jpg",
    nome: "Ardósia Preta",
    descricao:
      "Tons escuros, conferem um ar moderno e luxuoso. Ideal para pisos, e revestimentos em cozinhas e banheiros.",
    preco: 130,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Outros"],
  },
  {
    id: 20,
    img: "./img/outros/arenito-telado.jpg",
    nome: "Arenito Telado",
    descricao:
      "Uma placa de arenito, ideal para muros, revestimentos em áreas de piscina e churrasco.",
    preco: 110,
    textoBotao: "Adicionar ao carrinho",
    tag: ["Outros"],
  },
];
