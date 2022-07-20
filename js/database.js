// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/mármores/marmore-begebahia.jpg",
    nome: "Mármore Bege Bahia",
    descricao: "Um tom claro porém com tons terrosos, ideal para pias e mesas",
    preco: 250,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 2,
    img: "./img/mármores/marmore-brancoparana.jpg",
    nome: "Mármore Branco Paraná",
    descricao:
      "Branco com leves detalhes marrons ideal para cozinhas e banheiros.",
    preco: 300,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 3,
    img: "./img/mármores/marmore-carrara.jpg",
    nome: "Mármore Branco Carrara",
    descricao:
      "Claro, limpo e com leves detalhes, ideal para bancadas, pias e banheiros em geral ",
    preco: 750,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 4,
    img: "./img/mármores/marmore-marromimperial.jpg",
    nome: "Mármore Marrom Imp",
    descricao: "Um tom chamativo e geométrico, ideal para bancadas e escadas.",
    preco: 900,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 5,
    img: "./img/mármores/marmore-nero-marquina.jpg",
    nome: "Mármore Nero Marquina",
    descricao:
      "Escuro e elegante, ideal para acabamentos em banheiros bicromáticos.",
    preco: 1000,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 6,
    img: "./img/mármores/marmore-pighes.jpg",
    nome: "Mármore Pighes",
    descricao:
      "O branco mais limpo do meio ornamental, deixando o ambiente claro e luxuoso.",
    preco: 1000,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 7,
    img: "./img/mármores/marmore-rossoverona.jpg",
    nome: "Mármore Rosso Ver",
    descricao:
      "Tom terroso e clássico, ideal para escadas, pisos, bancadas e banheiros. ",
    preco: 800,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 8,
    img: "./img/mármores/marmore-travertinonacional.jpg",
    nome: "Mármore Travertino Nac",
    descricao:
      "Um suave tom terroso, combina com cores claras de cozinhas e banheiros.",
    preco: 389,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 9,
    img: "./img/mármores/marmore-travertinoromano.jpg",
    nome: "Mármore Travertino Rom",
    descricao:
      "Tom claro de bege, clássico, porém luxoso, revestimentos, escadas e áreas de piscina.",
    preco: 700,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 10,
    img: "./img/mármores/marmore-travertinoverona.jpg",
    nome: "Mármore Travertino Ver",
    descricao:
      "Claro e muito utilizado em conjunto com seu parente Rosso Verona.",
    preco: 800,
    textoBotao: "Adicionar ao carrinho",
    tag: "Mármores",
  },
  {
    id: 11,
    img: "./img/granito/granito-azulestelar.jpg",
    nome: "Granito Azul Estelar",
    descricao:
      "Um tom diferente e chamativo, porém dispojado, ideal para pias.",
    preco: 900,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 12,
    img: "./img/granito/granito-branco-dallas.png",
    nome: "Granito Branco Dallas",
    descricao: "Simples e discreto, um tom claro. Ideal para mesas e bancadas.",
    preco: 220,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 13,
    img: "./img/granito/granito-brancoitaunas.png",
    nome: "Granito Branco Itaúnas",
    descricao:
      "Uma mistura de cores claras e tons pásteis, discreto uniforme, encaixa em qualquer ambiente.",
    preco: 220,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 14,
    img: "./img/granito/granito-brancosiena.png",
    nome: "Granito Branco Siena",
    descricao:
      "Um tom limpo e uniforme. Ideal para rodapés, nichos e rodabancas.",
    preco: 220,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 15,
    img: "./img/granito/granito-cafeimperial.jpg",
    nome: "Granito Café Imperial",
    descricao:
      "Tons terrosos escuros. Ideal para cozinhas, e revestimentos de paredes e escadas.",
    preco: 325,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 16,
    img: "./img/granito/granito-imperialsilver.jpg",
    nome: "Granito Imperial Silver",
    descricao:
      "Um cinza claro de texturas diferenciadas, dando clareza e limpeza a qualquer ambiente.",
    preco: 325,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 17,
    img: "./img/granito/granito-ocreitabira.jpg",
    nome: "Granito Ocrei Itabira",
    descricao:
      "Tons acizentados e escuros, geometrias bem definidas. Ideal para lareiras e pias.",
    preco: 195,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 18,
    img: "./img/granito/granito-pretoabsoluto.jpg",
    nome: "Granito Preto Abs",
    descricao:
      "Um tom escuro, que confere impermebailidade. Traz luxo a qualquer cômodo.",
    preco: 900,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 19,
    img: "./img/granito/granito-preto-saogabriel.jpg",
    nome: "Granito Preto S. Gabriel",
    descricao:
      "Um tom escuro e geométrico, combina com ambientes claros e escuros.",
    preco: 330,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 20,
    img: "./img/granito/granito-verdeubatuba.jpg",
    nome: "Granito verde Ubatuba",
    descricao:
      "Uma opção mais barata, que confere um tom chique. Ideal para bancadas.",
    preco: 110,
    textoBotao: "Adicionar ao carrinho",
    tag: "Granitos",
  },
  {
    id: 21,
    img: "./img/outros/ardosia-cinza.png",
    nome: "Ardósia Cinza",
    descricao: "Um tom discreto e de fácil limpeza, ideal para pisos externos.",
    preco: 35,
    textoBotao: "Adicionar ao carrinho",
    tag: "Outros",
  },
  {
    id: 22,
    img: "./img/outros/ardosia-verde.jpg",
    nome: "Ardósia Verde",
    descricao:
      "Bonita e discreta. Usada tanto em ambientes internos quanto externos.",
    preco: 44,
    textoBotao: "Adicionar ao carrinho",
    tag: "Outros",
  },
  {
    id: 23,
    img: "./img/outros/ardosia-preta.jpg",
    nome: "Ardósia Preta",
    descricao:
      "Tons escuros, conferem um ar luxuoso. Ideal para pisos, e revestimentos internos.",
    preco: 130,
    textoBotao: "Adicionar ao carrinho",
    tag: "Outros",
  },
  {
    id: 24,
    img: "./img/outros/arenito-telado.jpg",
    nome: "Arenito Telado",
    descricao:
      "Uma placa de arenito, ideal para muros, revestimentos em áreas de piscina e churrasco.",
    preco: 110,
    textoBotao: "Adicionar ao carrinho",
    tag: "Outros",
  },
];
