// Banco de dados dos produtos

const data = [
  {
    id: 1,
    path: "marmore-begebahia.jpg",
    nome: "Mármore Bege Bahia",
    descricao: "Um tom claro porém com tons terrosos, ideal para pias e mesas",
    preco: 250,

    categoria: "Mármores",
  },
  {
    id: 2,
    path: "marmore-brancoparana.jpg",
    nome: "Mármore Branco Paraná",
    descricao:
      "Branco com leves detalhes marrons ideal para cozinhas e banheiros.",
    preco: 300,

    categoria: "Mármores",
  },
  {
    id: 3,
    path: "marmore-carrara.jpg",
    nome: "Mármore Branco Carrara",
    descricao:
      "Claro, limpo e com leves detalhes, ideal para bancadas, pias e banheiros em geral ",
    preco: 750,

    categoria: "Mármores",
  },
  {
    id: 4,
    path: "./path/mármores/marmore-marromimperial.jpg",
    nome: "Mármore Marrom Imp",
    descricao: "Um tom chamativo e geométrico, ideal para bancadas e escadas.",
    preco: 900,

    categoria: "Mármores",
  },
  {
    id: 5,
    path: "./path/mármores/marmore-nero-marquina.jpg",
    nome: "Mármore Nero Marquina",
    descricao:
      "Escuro e elegante, ideal para acabamentos em banheiros bicromáticos.",
    preco: 1000,

    categoria: "Mármores",
  },
  {
    id: 6,
    path: "./path/mármores/marmore-pighes.jpg",
    nome: "Mármore Pighes",
    descricao:
      "O branco mais limpo do meio ornamental, deixando o ambiente claro e luxuoso.",
    preco: 1000,

    categoria: "Mármores",
  },
  {
    id: 7,
    path: "./path/mármores/marmore-rossoverona.jpg",
    nome: "Mármore Rosso Ver",
    descricao:
      "Tom terroso e clássico, ideal para escadas, pisos, bancadas e banheiros. ",
    preco: 800,

    categoria: "Mármores",
  },
  {
    id: 8,
    path: "./path/mármores/marmore-travertinonacional.jpg",
    nome: "Mármore Travertino Nac",
    descricao:
      "Um suave tom terroso, combina com cores claras de cozinhas e banheiros.",
    preco: 389,

    categoria: "Mármores",
  },
  {
    id: 9,
    path: "./path/mármores/marmore-travertinoromano.jpg",
    nome: "Mármore Travertino Rom",
    descricao:
      "Tom claro de bege, clássico, porém luxoso, revestimentos, escadas e áreas de piscina.",
    preco: 700,

    categoria: "Mármores",
  },
  {
    id: 10,
    path: "./path/mármores/marmore-travertinoverona.jpg",
    nome: "Mármore Travertino Ver",
    descricao:
      "Claro e muito utilizado em conjunto com seu parente Rosso Verona.",
    preco: 800,

    categoria: "Mármores",
  },
  {
    id: 11,
    path: "granito-azulestelar.jpg",
    nome: "Granito Azul Estelar",
    descricao:
      "Um tom diferente e chamativo, porém dispojado, ideal para pias.",
    preco: 900,

    categoria: "Granitos",
  },
  {
    id: 12,
    path: "./path/granito/granito-branco-dallas.png",
    nome: "Granito Branco Dallas",
    descricao: "Simples e discreto, um tom claro. Ideal para mesas e bancadas.",
    preco: 220,

    categoria: "Granitos",
  },
  {
    id: 13,
    path: "./path/granito/granito-brancoitaunas.png",
    nome: "Granito Branco Itaúnas",
    descricao:
      "Uma mistura de cores claras e tons pásteis, discreto uniforme, encaixa em qualquer ambiente.",
    preco: 220,

    categoria: "Granitos",
  },
  {
    id: 14,
    path: "./path/granito/granito-brancosiena.png",
    nome: "Granito Branco Siena",
    descricao:
      "Um tom limpo e uniforme. Ideal para rodapés, nichos e rodabancas.",
    preco: 220,
    categoria: "Granitos",
  },
  {
    id: 15,
    path: "./path/granito/granito-cafeimperial.jpg",
    nome: "Granito Café Imperial",
    descricao:
      "Tons terrosos escuros. Ideal para cozinhas, e revestimentos de paredes e escadas.",
    preco: 325,

    categoria: "Granitos",
  },
  {
    id: 16,
    path: "./path/granito/granito-imperialsilver.jpg",
    nome: "Granito Imperial Silver",
    descricao:
      "Um cinza claro de texturas diferenciadas, dando clareza e limpeza a qualquer ambiente.",
    preco: 325,

    categoria: "Granitos",
  },
  {
    id: 17,
    path: "./path/granito/granito-ocreitabira.jpg",
    nome: "Granito Ocrei Itabira",
    descricao:
      "Tons acizentados e escuros, geometrias bem definidas. Ideal para lareiras e pias.",
    preco: 195,

    categoria: "Granitos",
  },
  {
    id: 18,
    path: "./path/granito/granito-pretoabsoluto.jpg",
    nome: "Granito Preto Abs",
    descricao:
      "Um tom escuro, que confere impermebailidade. Traz luxo a qualquer cômodo.",
    preco: 900,

    categoria: "Granitos",
  },
  {
    id: 19,
    path: "./path/granito/granito-preto-saogabriel.jpg",
    nome: "Granito Preto S. Gabriel",
    descricao:
      "Um tom escuro e geométrico, combina com ambientes claros e escuros.",
    preco: 330,

    categoria: "Granitos",
  },
  {
    id: 20,
    path: "./path/granito/granito-verdeubatuba.jpg",
    nome: "Granito verde Ubatuba",
    descricao:
      "Uma opção mais barata, que confere um tom chique. Ideal para bancadas.",
    preco: 110,

    categoria: "Granitos",
  },
  {
    id: 21,
    path: "./path/outros/ardosia-cinza.png",
    nome: "Ardósia Cinza",
    descricao: "Um tom discreto e de fácil limpeza, ideal para pisos externos.",
    preco: 35,

    categoria: "Outros",
  },
  {
    id: 22,
    path: "./path/outros/ardosia-verde.jpg",
    nome: "Ardósia Verde",
    descricao:
      "Bonita e discreta. Usada tanto em ambientes internos quanto externos.",
    preco: 44,

    categoria: "Outros",
  },
  {
    id: 23,
    path: "./path/outros/ardosia-preta.jpg",
    nome: "Ardósia Preta",
    descricao:
      "Tons escuros, conferem um ar luxuoso. Ideal para pisos, e revestimentos internos.",
    preco: 130,

    categoria: "Outros",
  },
  {
    id: 24,
    path: "./path/outros/arenito-telado.jpg",
    nome: "Arenito Telado",
    descricao:
      "Uma placa de arenito, ideal para muros, revestimentos em áreas de piscina e churrasco.",
    preco: 110,

    categoria: "Outros",
  },
];
