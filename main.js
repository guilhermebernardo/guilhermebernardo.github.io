/* =====================================================
   TOLENT IMPORTS — main.js
   ===================================================== */

'use strict';

const WA_NUMBER = '5512991510752';

/* =====================================================
   HELPERS
   ===================================================== */
function fmt(n) {
  return 'R$ ' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function getDiscount(p) {
  return p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
}

/* =====================================================
   CATÁLOGO
   Ordem: Conjuntos → Polos → Moletons → Calças →
          Shorts → Camisetas → Tênis → Acessórios → Sport
   Dentro de cada grupo: maior desconto primeiro,
   itens vendidos ao final do grupo.
   ===================================================== */
const PRODUCTS = [

  /* ══════════════════════════════════════════════════
     CONJUNTOS
  ══════════════════════════════════════════════════ */
  {
    id: 1, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 979.90, originalPrice: 1489.90,
    name: 'Conjunto Tracksuit Djokovic Preto',
    images: [
      'masculino/lacoste/lacoste-djokovic-tracksuit-preto-2.jpg',
      'masculino/lacoste/lacoste-djokovic-tracksuit-preto-1.jpg',
    ],
    description: 'Tracksuit Lacoste × Djokovic em preto total com detalhes brancos — a sofisticação das quadras Grand Slam em cada detalhe do tecido técnico.',
  },
  {
    id: 2, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 979.90, originalPrice: 1489.90,
    name: 'Conjunto Tracksuit Djokovic Azul',
    images: [
      'masculino/lacoste/lacoste-djokovic-tracksuit-azul-1.jpg',
      'masculino/lacoste/lacoste-djokovic-tracksuit-azul-2.jpg',
    ],
    description: 'Tracksuit Lacoste × Djokovic em azul cobalto com corte atlético de alta performance — edição limitada para quem joga no mais alto nível.',
  },
  {
    id: 3, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 649.41, originalPrice: 749.90,
    name: 'Conjunto Wimbledon Azul Celeste',
    images: ['masculino/lacoste/Conjunto Wimbledon Azul Celeste.jpeg'],
    description: 'Conjunto polo e short Lacoste ultra-premium em azul celeste. Polo com padrão xadrez jacquard e colarinho branco, combinado com short coordenado — uma homenagem refinada às lendárias quadras de Wimbledon.',
  },
  {
    id: 4, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto'],
    price: 849.90, originalPrice: 889.90,
    name: 'Conjunto Lacoste Sport Branco',
    images: [
      'masculino/lacoste/lacoste-conjunto-branco-2.jpg',
      'masculino/lacoste/lacoste-conjunto-branco-1.jpg',
      'masculino/lacoste/lacoste-conjunto-branco-3.jpg',
    ],
    description: 'Conjunto branco de corte esportivo com acabamento impecável — a pureza do branco Lacoste em sua expressão mais completa.',
  },
  {
    id: 6, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto'],
    price: 889.90,
    name: 'Conjunto Lacoste Sport Verde',
    images: [
      'masculino/lacoste/lacoste-conjunto-sport-verde-1.jpg',
      'masculino/lacoste/lacoste-conjunto-sport-verde-2.jpg',
    ],
    description: 'Conjunto coordenado em verde vibrante com silhueta atlética — presença marcante nas quadras e além delas.',
  },
  {
    id: 7, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto'],
    price: 889.90,
    name: 'Conjunto Lacoste Sport Azul',
    images: [
      'masculino/lacoste/lacoste-conjunto-azul-1.jpg',
      'masculino/lacoste/lacoste-conjunto-azul-2.jpg',
    ],
    description: 'Conjunto em azul meia-noite com corte contemporâneo — o sportswear francês elevado ao seu estado mais refinado.',
  },
  {
    id: 8, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 389.90,
    name: 'Lacoste Sport Roxa',
    images: [
      'masculino/lacoste/lacoste-conjunto-sport-roxo-1.jpg',
      'masculino/lacoste/lacoste-conjunto-sport-roxo-2.jpg',
    ],
    description: 'Camisa esportivo em roxo com corte atlético e acabamento premium — ousadia cromática com a precisão técnica da Maison.',
  },
  {
    id: 9, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto'],
    sold: true,
    price: 889.90,
    name: 'Conjunto Monograma Lacoste',
    images: ['masculino/lacoste/lacoste-conjunto-monograma-azul.jpeg'],
    description: 'Conjunto de duas peças Lacoste em jacquard monograma azul powder. Jaqueta de gola alta com zíper e calça jogger afinada, ambas com faixas laterais brancas em contraste. Uma obra-prima da elegância esportiva francesa.',
  },
  {
    id: 81, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 979.90, originalPrice: 1629.90,
    name: 'Conjunto Tracksuit x Daniil Medvedev Branco e Preto',
    images: [
      'masculino/lacoste/lacoste-tracksuit-medvedev-branco-preto-1.jpg',
      'masculino/lacoste/lacoste-tracksuit-medvedev-branco-preto-2.jpg',
      'masculino/lacoste/lacoste-tracksuit-medvedev-branco-preto-3.jpg',
      'masculino/lacoste/lacoste-tracksuit-medvedev-branco-preto-4.jpg',
    ],
    description: 'Tracksuit Lacoste × Daniil Medvedev em branco e preto. Jaqueta e calça em tecido técnico de alta performance com design da collab — a expressão máxima do tênis de elite.',
  },
  {
    id: 82, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 979.90, originalPrice: 1629.90,
    name: 'Conjunto Tracksuit x Daniil Medvedev Azul Marinho',
    images: [
      'masculino/lacoste/lacoste-tracksuit-medvedev-azul-marinho-1.jpg',
      'masculino/lacoste/lacoste-tracksuit-medvedev-azul-marinho-2.jpg',
      'masculino/lacoste/lacoste-tracksuit-medvedev-azul-marinho-3.jpg',
    ],
    description: 'Tracksuit Lacoste × Daniil Medvedev em azul marinho total. Construção em duas peças com tecido de performance e detalhes da collab — edição limitada para quem joga no mais alto nível.',
  },
  {
    id: 83, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 779.90, originalPrice: 1559.90,
    name: 'Conjunto x Novak Djokovic Azul Marinho',
    images: [
      'masculino/lacoste/lacoste-conjunto-novak-azul-1.jpg',
      'masculino/lacoste/lacoste-conjunto-novak-azul-2.jpg',
      'masculino/lacoste/lacoste-conjunto-novak-azul-3.jpg',
      'masculino/lacoste/lacoste-conjunto-novak-azul-4.jpg',
    ],
    description: 'Conjunto Lacoste × Novak Djokovic em azul marinho. Polo e short coordenados com tecido Ultra Dry e emblema da collab — a coleção definitiva para fãs do lendário tenista.',
  },
  {
    id: 84, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 909.90, originalPrice: 1509.90,
    name: 'Conjunto Tennis Logo Stripe Cream',
    images: [
      'masculino/lacoste/lacoste-tracksuit-logo-stripe-cream-1.jpg',
      'masculino/lacoste/lacoste-tracksuit-logo-stripe-cream-2.jpg',
      'masculino/lacoste/lacoste-tracksuit-logo-stripe-cream-3.jpg',
    ],
    description: 'Tracksuit Lacoste Tennis com listras e logo em cream. Jaqueta full-zip e calça coordenada com tecido técnico de alta performance — elegância de quadra reinterpretada para o urbano.',
  },

  /* ══════════════════════════════════════════════════
     POLOS
  ══════════════════════════════════════════════════ */
  {
    id: 10, brand: 'Lacoste', gender: 'feminino',
    tags: ['polo', 'sport'],
    price: 534.90, originalPrice: 959.90,
    name: 'Polo Tennis Termorregulador Verde',
    images: [
      'feminino/lacoste/lacoste-polo-tennis-verde-1.jpg',
      'feminino/lacoste/lacoste-polo-tennis-verde-2.jpg',
    ],
    description: 'Polo feminino de tênis com tecnologia termorreguladora em verde e branco — performance de Grand Slam com a elegância atemporal da Maison.',
  },
  {
    id: 11, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 399.90, originalPrice: 469.90,
    name: 'Polo Colorblock Marrom Piqué',
    images: [
      'masculino/lacoste/lacoste-polo-colorblock-pique-1.jpg',
      'masculino/lacoste/lacoste-polo-colorblock-pique-2.jpg',
    ],
    description: 'Polo em petit piqué com design colorblock de precisão — a modernidade das cores em harmonia com a construção clássica que define a Lacoste.',
  },
  {
    id: 12, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 429.90, originalPrice: 469.90,
    name: 'Polo Golf Colorblock Azul',
    images: [
      'masculino/lacoste/lacoste-polo-golf-colorblock-1.jpg',
      'masculino/lacoste/lacoste-polo-golf-colorblock-2.jpg',
    ],
    description: 'Polo de golf em blocos de cor com tecido de alta performance — precisão técnica e estilo inconfundível para dominar fairways e além.',
  },
  {
    id: 13, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 370.41, originalPrice: 389.90,
    name: 'Polo L.12.12 Azul Marinho',
    images: [
      'masculino/lacoste/lacoste-polo-l1212-1.jpg',
      'masculino/lacoste/lacoste-polo-l1212-2.jpg',
    ],
    description: 'O lendário polo L.12.12 — criado em 1933, reinventado para hoje. O modelo que deu origem à cultura polo permanece incontestável.',
  },
  {
    id: 14, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 370.41, originalPrice: 389.90,
    name: 'Polo L.12.12 Vermelho',
    images: [
      'masculino/lacoste/lacoste-polo-l1212-vermelho-2.jpg',
      'masculino/lacoste/lacoste-polo-l1212-vermelho-1.jpg',
    ],
    description: 'O L.12.12 em vermelho cardinal com presença marcante — a mesma construção centenária em piqué, agora com uma cor que exige atenção.',
  },
  {
    id: 15, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 370.41, originalPrice: 389.90,
    name: 'Polo Azul Piqué Fit',
    images: [
      'masculino/lacoste/lacoste-polo-azul-pique-2.jpg',
      'masculino/lacoste/lacoste-polo-azul-pique-3.jpg',
      'masculino/lacoste/lacoste-polo-azul-pique-1.jpg',
    ],
    description: 'Polo em piqué azul de corte slim — construção precisa em algodão premium que define a silhueta com elegância esportiva.',
  },
  {
    id: 16, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 389.90,
    name: 'Polo Roland Garros Laranja',
    images: ['masculino/lacoste/lacoste-polo-roland-garros-laranja.jpeg'],
    description: 'Polo edição limitada Lacoste × Novak Djokovic Roland Garros em laranja queimado. Piqué de performance ultraleve com proteção UV e padrão jacquard nas mangas — peça de coleção nascida no saibro de Paris.',
  },
  {
    id: 17, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 489.90,
    name: 'Polo Piqué Estampado',
    images: [
      'masculino/lacoste/lacoste-polo-pique-estampado-1.jpg',
      'masculino/lacoste/lacoste-polo-pique-estampado-2.jpg',
      'masculino/lacoste/lacoste-polo-pique-estampado-3.jpg',
    ],
    description: 'Polo em piqué premium com estampa exclusiva — a elegância do crocodilo reinterpretada com grafismo contemporâneo.',
  },
  {
    id: 18, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo Made in France Listrado',
    images: [
      'masculino/lacoste/lacoste-polo-made-france-stripe-1.jpg',
      'masculino/lacoste/lacoste-polo-made-france-stripe-2.jpg',
    ],
    description: 'Feito em França com algodão piqué de excelência — listras precisas e gola em contraste que definem o refinamento clássico Lacoste.',
  },
  {
    id: 19, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo Branco Piqué Fit',
    images: [
      'masculino/lacoste/lacoste-polo-classic-branco-2.jpg',
      'masculino/lacoste/lacoste-polo-classic-branco-1.jpg',
    ],
    description: 'O polo branco clássico Lacoste em algodão piqué imaculado — atemporal, infalível e inegavelmente sofisticado.',
  },
  {
    id: 20, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 249.90,
    name: 'T-Shirt Jersey Paris Branco',
    images: [
      'masculino/lacoste/lacoste-polo-paris-branco-1.jpg',
      'masculino/lacoste/lacoste-polo-paris-branco-2.jpg',
    ],
    description: 'Camisa Lacoste Paris em branco imaculado — edição que homenageia a capital da moda com o piqué inconfundível da tradição Lacoste.',
  },
  {
    id: 21, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 189.90,
    name: 'Polo Tommy Signature Stripe',
    images: ['masculino/tommy-hilfiger/tommy-polo-signature-stripe.jpeg'],
    description: 'Polo piqué clássico Tommy Hilfiger em azul marinho com icônica fita tricolor vermelha e branca nos ombros. Construção em algodão premium com logo bordado no peito — um ícone preppy reinventado para o homem moderno.',
  },
  {
    id: 22, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo L.12.12 Preto',
    images: [
      'masculino/lacoste/lacoste-polo-l1212-preto-1.jpg',
      'masculino/lacoste/lacoste-polo-l1212-preto-2.jpg',
    ],
    description: 'O clássico L.12.12 em preto total — autoridade e elegância esportiva numa peça que se tornou patrimônio cultural da moda masculina.',
  },
  {
    id: 23, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo L.12.12 Branco',
    images: [
      'masculino/lacoste/lacoste-polo-l1212-branco-1.jpg',
      'masculino/lacoste/lacoste-polo-l1212-branco-2.jpg',
    ],
    description: 'O L.12.12 em branco — a versão mais pura do polo original que René Lacoste criou para libertar o movimento nas quadras de tênis.',
  },
  {
    id: 123, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 249.90, originalPrice: 419.90,
    name: 'Polo Embroidered Logo Preto',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-embroidered-preto-1.jpg',
      'masculino/tommy-hilfiger/tommy-polo-embroidered-preto-2.jpg',
    ],
    description: 'Polo Tommy Hilfiger com logo bordado em preto. Piqué de algodão premium com corte regular — o clássico americano com assinatura tricolor no peito.',
  },
  {
    id: 124, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 189.90, originalPrice: 469.90,
    name: 'Polo Long-Sleeve Pilot Blue',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-longsleeve-pilotblue-1.jpg',
      'masculino/tommy-hilfiger/tommy-polo-longsleeve-pilotblue-2.jpg',
    ],
    description: 'Polo Tommy manga longa em pilot blue. Regular Fit com piqué macio e logo discreto — sofisticação casual para dias mais frescos com a elegância preppy.',
  },
  {
    id: 125, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 179.90, originalPrice: 449.90,
    name: 'Polo Monotype Logo Deep Indigo',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-monotype-deepindigo-1.jpg',
      'masculino/tommy-hilfiger/tommy-polo-monotype-deepindigo-2.jpg',
    ],
    description: 'Polo Tommy com monotype logo em deep indigo. Regular Fit com piqué de algodão e estampa exclusiva — a herança Tommy em tom sofisticado.',
  },
  {
    id: 126, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 199.90, originalPrice: 399.90,
    name: 'Polo Smooth Cotton',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-smooth-cotton-1.jpg',
      'masculino/tommy-hilfiger/tommy-polo-smooth-cotton-2.jpg',
    ],
    description: 'Polo Tommy em algodão liso de toque macio. Regular Fit com construção precisa e logo bordado — o essencial do guarda-roupa masculino americano.',
  },
  {
    id: 127, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 209.90, originalPrice: 419.90,
    name: 'Polo Smooth Cotton Navy',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-smooth-cotton-navy-1.jpg',
      'masculino/tommy-hilfiger/tommy-polo-smooth-cotton-navy-2.jpg',
    ],
    description: 'Polo Tommy Smooth Cotton em navy. Algodão premium de toque suave com corte regular — o polo definitivo para quem valoriza simplicidade e qualidade.',
  },
  {
    id: 128, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 209.90, originalPrice: 419.90,
    name: 'Polo Wicking Fresh White',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-wicking-white-1.jpg',
      'masculino/tommy-hilfiger/tommy-polo-wicking-white-2.jpg',
    ],
    description: 'Polo Tommy com tecnologia wicking em fresh white. Tecido que absorve a umidade com corte regular — frescor e elegância para os dias mais quentes.',
  },
  {
    id: 129, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 209.90, originalPrice: 449.90,
    name: 'Polo Wicking Pique Medium Red',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-wicking-red-1.jpg',
      'masculino/tommy-hilfiger/tommy-polo-wicking-red-2.jpg',
    ],
    description: 'Polo Tommy Wicking Pique em medium red. Tecido técnico de controle de umidade com piqué premium — cor vibrante com performance de alto nível.',
  },
  {
    id: 130, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 189.90, originalPrice: 399.90,
    name: 'Polo Stretch Pique Branco',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-stretch-branco-1.jpg',
      'masculino/tommy-hilfiger/tommy-polo-stretch-branco-2.jpg',
    ],
    description: 'Polo Tommy Slim Fit Stretch em branco. Piqué com elastano para mobilidade total e corte afinado — o polo que se ajusta ao corpo com elegância.',
  },
  {
    id: 131, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 189.90, originalPrice: 399.90,
    name: 'Polo Stretch Pique Preto',
    images: [
      'masculino/tommy-hilfiger/tommy-polo-stretch-preto-1.jpg',
    ],
    description: 'Polo Tommy Stretch Pique em preto total. Slim Fit com tecido elástico de alta performance — versatilidade escura com a assinatura Tommy.',
  },

  /* ══════════════════════════════════════════════════
     MOLETONS
  ══════════════════════════════════════════════════ */
  {
    id: 24, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 489.41, originalPrice: 589.90,
    name: 'Moletom Branco Premium',
    images: [
      'masculino/lacoste/lacoste-moletom-branco-1.jpg',
      'masculino/lacoste/lacoste-moletom-branco-2.jpg',
    ],
    description: 'Moletom em branco opaco de malha pesada — o conforto do algodão escovado com a assinatura inconfundível do crocodilo.',
  },
  {
    id: 25, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 489.41, originalPrice: 589.90,
    name: 'Moletom Preto Premium',
    images: [
      'masculino/lacoste/lacoste-moletom-preto-1.jpg',
      'masculino/lacoste/lacoste-moletom-preto-2.jpg',
    ],
    description: 'Moletom em preto total com detalhes discretos em relevo — a força do estilo noturno Lacoste em sua forma mais essencial.',
  },
  {
    id: 26, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 509.90, originalPrice: 549.90,
    name: 'Tech Fleece Verde',
    images: [
      'masculino/lacoste/lacoste-tech-fleece-verde-1.jpg',
      'masculino/lacoste/lacoste-tech-fleece-verde-2.jpg',
      'masculino/lacoste/lacoste-tech-fleece-verde-3.jpg',
    ],
    description: 'Tech fleece em verde com tecnologia de dupla camada — calor leve e silhueta aerodinâmica para quem vive em movimento.',
  },
  {
    id: 27, brand: 'Hugo Boss', gender: 'masculino',
    tags: ['moletom'],
    price: 670.41, originalPrice: 689.90,
    name: 'Moletom Zip Boss Cinza Escuro',
    images: ['masculino/hugo-boss/Moletom Zip Boss Green \u2014 Cinza.jpeg'],
    description: 'Moletom com zíper BOSS em cinza pedra com faixas contrastantes em relevo nos ombros. Interior escovado macio com puxador de zíper com marca — onde o DNA atlético encontra o artesanato de luxo.',
  },
  {
    id: 28, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 470.41, originalPrice: 489.90,
    name: 'Moletom Zip Premium Verde',
    images: ['masculino/lacoste/lacoste-moletom-zip-verde.jpeg'],
    description: 'Moletom com zíper completo em verde sálvia de malha pesada escovada. Emblema do crocodilo Lacoste no punho, com ribana de precisão no cós e mangas — silhueta atlética refinada para o guarda-roupa contemporâneo.',
  },
  {
    id: 30, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom', 'sport'],
    price: 589.90,
    name: 'Sweatshirt Tênis Colorblock',
    images: [
      'masculino/lacoste/lacoste-sweatshirt-colorblock-1.jpg',
      'masculino/lacoste/lacoste-sweatshirt-colorblock-2.jpg',
    ],
    description: 'Moletom com zíper em blocos de cor inspirados nas quadras — performance e estilo que transitam do esporte ao urbano com naturalidade.',
  },
  {
    id: 31, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 199.90,
    name: 'Suéter Vermelho',
    images: [
      'masculino/lacoste/lacoste-sueter-vermelho-1.jpg',
      'masculino/lacoste/lacoste-sueter-vermelho-2.jpg',
    ],
    description: 'Suéter em vermelho cardinal com logo bordado — presença cromática intensa com o refinamento têxtil que define a tradição Lacoste.',
  },
  {
    id: 111, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 759.90,
    name: 'Tech Fleece Hoodie Preto',
    images: [
      'masculino/nike/nike-tech-fleece-hoodie-preto-1.jpg',
      'masculino/nike/nike-tech-fleece-hoodie-preto-2.jpg',
      'masculino/nike/nike-tech-fleece-hoodie-preto-3.jpg',
    ],
    description: 'Nike Tech Fleece Full-Zip Windrunner em preto. Tecido de dupla camada para calor leve com zíper completo e capuz ajustável — a evolução do moletom para o guarda-roupa de luxo.',
  },
  {
    id: 112, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 519.90, originalPrice: 759.90,
    name: 'Tech Fleece Hoodie Cave Stone',
    images: [
      'masculino/nike/nike-tech-fleece-hoodie-cavestone-1.jpg',
      'masculino/nike/nike-tech-fleece-hoodie-cavestone-2.jpg',
    ],
    description: 'Tech Fleece em Cave Stone com capuz preto. Silhueta estruturada com tecnologia de isolamento térmico — o hoodie premium em tonalidade earth-tone.',
  },
  {
    id: 113, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 759.90,
    name: 'Tech Fleece Hoodie Dark Grey Heather',
    images: [
      'masculino/nike/nike-tech-fleece-hoodie-cinza-1.jpg',
      'masculino/nike/nike-tech-fleece-hoodie-cinza-2.jpg',
      'masculino/nike/nike-tech-fleece-hoodie-cinza-3.jpg',
    ],
    description: 'Tech Fleece em Dark Grey Heather com detalhes em preto. Construção premium com bolsos laterais e punhos ribbed — o clássico urbano em cinza melange.',
  },
  {
    id: 114, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 759.90,
    name: 'Tech Fleece Hoodie Vermelho',
    images: [
      'masculino/nike/nike-tech-fleece-hoodie-azul-1.jpg',
      'masculino/nike/nike-tech-fleece-hoodie-azul-2.jpg',
    ],
    description: 'Tech Fleece em azul com zíper completo. Silhueta moderna com capuz estruturado e bolsos laterais — conforto tech para quem se move com intenção.',
  },
  {
    id: 115, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 759.90,
    name: 'Tech Fleece Hoodie Verde',
    images: [
      'masculino/nike/nike-tech-fleece-hoodie-verde-1.jpg',
      'masculino/nike/nike-tech-fleece-hoodie-verde-2.jpg',
    ],
    description: 'Tech Fleece em verde com tecnologia de isolamento térmico de ponta. Zíper Windrunner, capuz ajustável e acabamento premium — a peça definitiva do streetwear de luxo.',
  },
  {
    id: 116, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 519.90, originalPrice: 759.90,
    name: 'Tech Fleece Hoodie Promoção',
    images: [
      'masculino/nike/nike-tech-fleece-hoodie-promo-1.jpg',
      'masculino/nike/nike-tech-fleece-hoodie-promo-2.jpg',
    ],
    description: 'Tech Fleece Windrunner em promoção. O mesmo hoodie premium com preço acessível — oportunidade imperdível para quem exige o melhor do streetwear.',
  },
  {
    id: 117, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['moletom'],
    price: 299.90, originalPrice: 609.90,
    name: 'Colorblock Fleece Hoodie Navy',
    images: [
      'masculino/tommy-hilfiger/tommy-hoodie-colorblock-navy-1.jpg',
      'masculino/tommy-hilfiger/tommy-hoodie-colorblock-navy-2.jpg',
    ],
    description: 'Moletom Tommy Hilfiger com colorblock em navy. Fleece escovado macio com capuz e bolsos frontais — o casual premium com a assinatura tricolor icônica.',
  },
  {
    id: 118, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['moletom'],
    price: 219.90, originalPrice: 569.90,
    name: 'Varsity Logo Fleece Sweatstone Branco',
    images: [
      'masculino/tommy-hilfiger/tommy-moletom-varsity-branco-1.jpg',
      'masculino/tommy-hilfiger/tommy-moletom-varsity-branco-2.jpg',
    ],
    description: 'Sweatstone Tommy Hilfiger Varsity em branco óptico com logo bordado. Fleece premium com gola careca e punhos ribbed — o essencial do casual elevado.',
  },
  {
    id: 119, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['moletom'],
    price: 219.90, originalPrice: 569.90,
    name: 'Varsity Logo Fleece Sweatstone Stone',
    images: [
      'masculino/tommy-hilfiger/tommy-moletom-varsity-stone-1.jpg',
      'masculino/tommy-hilfiger/tommy-moletom-varsity-stone-2.jpg',
    ],
    description: 'Sweatstone Tommy Hilfiger em stone com logo Varsity. Construção premium em fleece com acabamento macio — versatilidade Tommy para o dia a dia com estilo.',
  },

  /* ══════════════════════════════════════════════════
     CALÇAS
  ══════════════════════════════════════════════════ */
  {
    id: 32, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca'],
    price: 527.90, originalPrice: 879.90,
    name: 'Calça Estampada Azul e Branco',
    images: [
      'masculino/lacoste/lacoste-calca-estampada-azulbranco-1.jpg',
      'masculino/lacoste/lacoste-calca-estampada-azulbranco-2.jpg',
      'masculino/lacoste/lacoste-calca-estampada-azulbranco-3.jpg',
    ],
    description: 'Calça de moletom com estampa monograma em azul e branco — streetwear de alto nível com o DNA da Maison em cada centímetro do tecido.',
  },
  {
    id: 33, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca'],
    price: 527.90, originalPrice: 879.90,
    name: 'Calça Estampada Marinho e Vermelho',
    images: [
      'masculino/lacoste/lacoste-calca-estampada-marinho-1.jpg',
    ],
    description: 'Calça de moletom em marinho e vermelho com estampa exclusiva — contraste vibrante com o acabamento premium que a Lacoste assina.',
  },
  {
    id: 34, brand: 'Lacoste', gender: 'feminino',
    tags: ['calca'],
    price: 509.41, originalPrice: 599.90,
    name: 'Calça Flared Monograma Azul',
    images: [
      'feminino/lacoste/lacoste-calca-monograma-azul-1.jpg',
      'feminino/lacoste/lacoste-calca-monograma-azul-2.jpg',
      'feminino/lacoste/lacoste-calca-monograma-azul-3.jpg',
    ],
    description: 'Calça flared feminina em azul com monograma all-over — silhueta alongada e presença marcante com a identidade inconfundível da Maison.',
  },
  {
    id: 35, brand: 'Lacoste', gender: 'feminino',
    tags: ['calca'],
    price: 509.41, originalPrice: 599.90,
    name: 'Calça Flared Monograma Marrom',
    images: [
      'feminino/lacoste/lacoste-calca-monograma-marrom-1.jpg',
      'feminino/lacoste/lacoste-calca-monograma-marrom-2.jpg',
    ],
    description: 'Calça flared em marrom terroso com monograma Lacoste — a sofisticação dos tons neutros com o corte generoso que define a feminilidade contemporânea.',
  },
  {
    id: 36, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca'],
    price: 559.41, originalPrice: 659.90,
    name: 'Calça Jogger Monograma',
    images: ['masculino/lacoste/lacoste-calca-jogger-monograma.jpeg'],
    description: 'Calça jogger Lacoste em jacquard monograma azul celeste. Cós elástico com cordão, detalhamento de faixas em dourado e marinho — lazer elegante redefinido para quem se move com intenção e estilo.',
  },
  {
    id: 37, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca'],
    price: 464.90,
    name: 'Calça Jogger Verde',
    images: [
      'masculino/lacoste/lacoste-calca-verde-1.jpg',
      'masculino/lacoste/lacoste-calca-verde-2.jpg',
    ],
    description: 'Calça jogger em verde sálvia com detalhes em contraste — conforto de alto padrão para quem não abre mão do estilo no dia a dia.',
  },
  {
    id: 120, brand: 'Nike', gender: 'masculino',
    tags: ['calca'],
    price: 659.90,
    name: 'Tech Fleece Jogger Dark Grey Heather',
    images: [
      'masculino/nike/nike-tech-fleece-jogger-cinza-2.jpg',
      'masculino/nike/nike-tech-fleece-jogger-cinza-1.jpg',
      'masculino/nike/nike-tech-fleece-jogger-cinza-3.jpg',
    ],
    description: 'Nike Tech Fleece Jogger em Dark Grey Heather com detalhes em preto. Tecido de dupla camada com cós elástico e punhos afunilados — a calça definitiva do streetwear contemporâneo.',
  },

  /* ══════════════════════════════════════════════════
     SHORTS
  ══════════════════════════════════════════════════ */
  {
    id: 38, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 329.90, originalPrice: 613.90,
    name: 'Short Tennis Ultra Dry Marinho',
    images: [
      'masculino/lacoste/lacoste-short-tennis-marinho-1.jpg',
      'masculino/lacoste/lacoste-short-tennis-marinho-2.jpg',
    ],
    description: 'Short Ultra Dry em azul marinho com tecnologia de evaporação rápida — feito para as quadras, perfeito para qualquer movimento.',
  },
  {
    id: 39, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 329.90, originalPrice: 613.90,
    name: 'Short Tennis Ultra Dry Roxo',
    images: [
      'masculino/lacoste/lacoste-short-tennis-roxo-1.jpg',
      'masculino/lacoste/lacoste-short-tennis-roxo-2.jpg',
    ],
    description: 'Short Ultra Dry em roxo com fabric de secagem instantânea — ousadia cromática com a performance técnica que o tênis de elite exige.',
  },
  {
    id: 40, brand: 'Lacoste', gender: 'masculino',
    tags: ['short'],
    price: 399.90, originalPrice: 449.90,
    name: 'Short Monograma Bege',
    images: [
      'masculino/lacoste/lacoste-short-monograma-bege-1.jpg',
      'masculino/lacoste/lacoste-short-monograma-bege-2.jpg',
      'masculino/lacoste/lacoste-short-monograma-bege-3.jpg',
    ],
    description: 'Short leve em monograma bege, marrom e branco — sofisticação de tons neutros com o padrão exclusivo da Maison em cada detalhe.',
  },
  {
    id: 41, brand: 'Lacoste', gender: 'masculino',
    tags: ['short'],
    price: 399.90, originalPrice: 449.90,
    name: 'Short Monograma Azul',
    images: [
      'masculino/lacoste/lacoste-short-monograma-azul-1.jpg',
      'masculino/lacoste/lacoste-short-monograma-azul-2.jpg',
      'masculino/lacoste/lacoste-short-monograma-azul-3.jpg',
    ],
    description: 'Short leve em monograma azul e branco — o padrão icônico Lacoste em tecido ultra-leve para os dias mais quentes do ano.',
  },
  {
    id: 42, brand: 'Lacoste', gender: 'masculino',
    tags: ['short'],
    price: 419.90, originalPrice: 449.90,
    name: 'Short Linho Colorblock Fleece',
    images: [
      'masculino/lacoste/lacoste-short-colorblock-1.jpg',
      'masculino/lacoste/lacoste-short-colorblock-2.jpg',
      'masculino/lacoste/lacoste-short-colorblock-3.jpg',
    ],
    description: 'Short em fleece com blocos de cor em contraste — conforto premium e estilo de quadra para usar do treino ao dia a dia.',
  },
  {
    id: 43, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 299.90,
    name: 'Short Sport Lacoste Azul',
    images: ['masculino/lacoste/Short Sport Lacoste Azul.jpeg'],
    description: 'Short de performance Lacoste Sport em azul royal. Tecido de secagem rápida, vivos brancos nos bolsos e emblema de crocodilo bordado — feito para as quadras, com a elegância de quem domina qualquer ambiente.',
  },
  {
    id: 69, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 589.90, originalPrice: 719.90,
    name: 'Short Tennis x Novak Djokovic Azul Marinho',
    images: [
      'masculino/lacoste/lacoste-short-novak-azul-marinho-1.jpg',
      'masculino/lacoste/lacoste-short-novak-azul-marinho-2.jpg',
      'masculino/lacoste/lacoste-short-novak-azul-marinho-3.jpg',
    ],
    description: 'Short de tênis Lacoste × Novak Djokovic em azul marinho. Tecido ultra-leve de secagem rápida com corte atlético de alta performance — edição limitada da collab mais icônica das quadras.',
  },
  {
    id: 70, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 589.90, originalPrice: 719.90,
    name: 'Short Tennis x Novak Djokovic Branco e Marrom',
    images: [
      'masculino/lacoste/lacoste-short-novak-branco-marrom-1.jpg',
      'masculino/lacoste/lacoste-short-novak-branco-marrom-2.jpg',
      'masculino/lacoste/lacoste-short-novak-branco-marrom-3.jpg',
    ],
    description: 'Short de tênis Lacoste × Novak Djokovic em branco e marrom. Tecido de performance com detalhes em contraste — a elegância das quadras com a assinatura inconfundível da Maison.',
  },
  {
    id: 71, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 589.90, originalPrice: 719.90,
    name: 'Short Tennis x Novak Djokovic Azul Marinho e Verde',
    images: [
      'masculino/lacoste/lacoste-short-novak-azul-verde-1.jpg',
      'masculino/lacoste/lacoste-short-novak-azul-verde-2.jpg',
      'masculino/lacoste/lacoste-short-novak-azul-verde-3.jpg',
    ],
    description: 'Short de tênis Lacoste × Novak Djokovic em azul marinho e verde. Construção leve e respirável com emblema bordado — performance Grand Slam com o refinamento francês.',
  },
  {
    id: 72, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 589.90, originalPrice: 719.90,
    name: 'Short Tennis x Novak Djokovic Laranja e Branco',
    images: [
      'masculino/lacoste/lacoste-short-novak-laranja-branco-1.jpg',
      'masculino/lacoste/lacoste-short-novak-laranja-branco-2.jpg',
      'masculino/lacoste/lacoste-short-novak-laranja-branco-3.jpg',
    ],
    description: 'Short de tênis Lacoste × Novak Djokovic em laranja e branco. Cor vibrante com tecido técnico de secagem rápida — ousadia cromática com a precisão da Maison.',
  },

  /* ══════════════════════════════════════════════════
     POLOS — NOVAS CHEGADAS
  ══════════════════════════════════════════════════ */
  {
    id: 73, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 839.90, originalPrice: 1019.90,
    name: 'Polo Classic Fit Monogram Azul',
    images: [
      'masculino/lacoste/lacoste-polo-monogram-azul-1.jpg',
      'masculino/lacoste/lacoste-polo-monogram-azul-2.jpg',
      'masculino/lacoste/lacoste-polo-monogram-azul-3.jpg',
    ],
    description: 'Polo Lacoste Classic Fit com monograma em azul. Algodão piqué premium com corte preciso — o DNA da Maison em sua expressão mais atemporal.',
  },
  {
    id: 74, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 549.90, originalPrice: 909.90,
    name: 'Polo Tennis x Daniil Medvedev Azul e Roxo',
    images: [
      'masculino/lacoste/lacoste-polo-medvedev-azul-roxo-1.jpg',
      'masculino/lacoste/lacoste-polo-medvedev-azul-roxo-2.jpg',
      'masculino/lacoste/lacoste-polo-medvedev-azul-roxo-3.jpg',
    ],
    description: 'Polo Lacoste × Daniil Medvedev em azul marinho e roxo. Tecido Ultra Dry de secagem rápida com design da collab — performance de elite com o estilo inconfundível da Maison.',
  },
  {
    id: 75, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 589.90, originalPrice: 989.90,
    name: 'Polo Tennis x Novak Djokovic On Court Noir',
    images: [
      'masculino/lacoste/lacoste-polo-novak-oncourt-preto-1.jpg',
      'masculino/lacoste/lacoste-polo-novak-oncourt-preto-2.jpg',
      'masculino/lacoste/lacoste-polo-novak-oncourt-preto-3.jpg',
    ],
    description: 'Polo Lacoste × Novak Djokovic On Court em preto total. Piqué de alta performance com detalhes da collab — a peça definitiva para quem domina as quadras.',
  },
  {
    id: 76, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 429.90, originalPrice: 629.90,
    name: 'Polo Tennis x Novak Djokovic Noir',
    images: [
      'masculino/lacoste/lacoste-polo-novak-preto-1.jpg',
      'masculino/lacoste/lacoste-polo-novak-preto-2.jpg',
      'masculino/lacoste/lacoste-polo-novak-preto-3.jpg',
    ],
    description: 'Polo Lacoste × Novak Djokovic em preto. Tecido leve com corte atlético e emblema bordado — a essência do tênis de alta costura em formato polo.',
  },
  {
    id: 77, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 349.90, originalPrice: 699.90,
    name: 'Polo Golf UV Protect Azul e Violeta',
    images: [
      'masculino/lacoste/lacoste-polo-golf-uv-azul-violeta-1.jpg',
      'masculino/lacoste/lacoste-polo-golf-uv-azul-violeta-2.jpg',
    ],
    description: 'Polo Lacoste Golf com proteção UV em azul e violeta. Regular Fit com tecido respirável de alta tecnologia — elegância nos fairways com conforto premium.',
  },
  {
    id: 78, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 309.90, originalPrice: 629.90,
    name: 'Polo Tennis Ultra Dry Branded Stripe Verde Cáqui',
    images: [
      'masculino/lacoste/lacoste-polo-ultra-dry-stripe-verde-1.jpg',
      'masculino/lacoste/lacoste-polo-ultra-dry-stripe-verde-2.jpg',
      'masculino/lacoste/lacoste-polo-ultra-dry-stripe-verde-3.jpg',
    ],
    description: 'Polo Lacoste Ultra Dry com listras e badge em verde cáqui. Tecido de secagem rápida com emblema em destaque — o sportswear francês em sua forma mais acessível.',
  },
  {
    id: 79, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 399.90, originalPrice: 799.90,
    name: 'Polo Tennis Ultra Dry Printed Slim Fit Roxo',
    images: [
      'masculino/lacoste/lacoste-polo-ultra-dry-printed-roxo-1.jpg',
      'masculino/lacoste/lacoste-polo-ultra-dry-printed-roxo-2.jpg',
      'masculino/lacoste/lacoste-polo-ultra-dry-printed-roxo-3.jpg',
    ],
    description: 'Polo Lacoste Ultra Dry com estampa exclusiva em roxo. Slim Fit com tecido Ultra Dry de evaporação acelerada — performance e estilo em perfeita sintonia.',
  },
  {
    id: 80, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 399.90, originalPrice: 799.90,
    name: 'Polo Tennis Ultra Dry Printed Slim Fit Verde Cáqui',
    images: [
      'masculino/lacoste/lacoste-polo-ultra-dry-printed-verde-1.jpg',
      'masculino/lacoste/lacoste-polo-ultra-dry-printed-verde-2.jpg',
    ],
    description: 'Polo Lacoste Ultra Dry com estampa em verde cáqui. Slim Fit com construção técnica de secagem instantânea — para quem exige performance sem abrir mão do estilo.',
  },

  /* ══════════════════════════════════════════════════
     SHORTS — NOVAS CHEGADAS
  ══════════════════════════════════════════════════ */
  {
    id: 85, brand: 'Lacoste', gender: 'masculino',
    tags: ['short'],
    price: 299.90, originalPrice: 509.90,
    name: 'Short Cotton Fleece Colorblock Branco e Marrom',
    images: [
      'masculino/lacoste/lacoste-short-colorblock-branco-marrom-1.jpg',
      'masculino/lacoste/lacoste-short-colorblock-branco-marrom-2.jpg',
    ],
    description: 'Short Lacoste em cotton fleece com colorblock em branco, marrom e marrom claro. Conforto premium com corte relaxado — o luxo casual em sua forma mais refinada.',
  },
  {
    id: 86, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 289.90, originalPrice: 579.90,
    name: 'Short Tennis Ultra Dry Badge Accent Branco e Azul Marinho',
    images: [
      'masculino/lacoste/lacoste-short-tennis-badge-branco-azul-1.jpg',
      'masculino/lacoste/lacoste-short-tennis-badge-branco-azul-2.jpg',
      'masculino/lacoste/lacoste-short-tennis-badge-branco-azul-3.jpg',
    ],
    description: 'Short Lacoste Tennis Ultra Dry com badge accent em branco e azul marinho. Tecido de secagem rápida com emblema em destaque — herência de quadra com tecnologia de ponta.',
  },

  /* ══════════════════════════════════════════════════
     CAMISETAS
  ══════════════════════════════════════════════════ */
  {
    id: 44, brand: 'Lacoste', gender: 'masculino',
    tags: ['camiseta', 'sport'],
    price: 299.90, originalPrice: 559.90,
    name: 'Camiseta Medvedev Azul',
    images: [
      'masculino/lacoste/lacoste-medvedev-tshirt-azul-1.jpg',
      'masculino/lacoste/lacoste-medvedev-tshirt-azul-2.jpg',
    ],
    description: 'Camiseta da collab Lacoste × Daniil Medvedev em azul técnico — leveza e precisão de quem compete no mais alto nível do tênis mundial.',
  },
  {
    id: 45, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['camiseta'],
    price: 589.90,
    name: 'Camiseta LV Graffiti',
    images: [
      'masculino/louis-vuitton/lv-camiseta-graffiti-preta-3.jpeg',
      'masculino/louis-vuitton/lv-camiseta-graffiti-preta-2.jpeg',
      'masculino/louis-vuitton/lv-camiseta-graffiti-preta-1.jpeg',
    ],
    description: 'Camiseta em algodão premium com grafismo do monograma LV e caligrafia artística multicolorida. Disponível em detalhe frontal, no cabide e em duo preto + branco — arte e luxo em perfeita harmonia.',
  },
  {
    id: 46, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['camiseta'],
    price: 589.90,
    name: 'Camiseta Louis Graffiti',
    images: [
      'masculino/louis-vuitton/lv-camiseta-louis-graffiti-2.jpeg',
      'masculino/louis-vuitton/lv-camiseta-louis-graffiti-1.jpeg',
    ],
    description: 'Camiseta "Louis Vuitton" Graffiti preta com lettering em gradiente azul-verde e fleurs de monograma multicoloridas. Detalhe e frente/verso em sequência — a dualidade entre artesanato de topo e atitude urbana que define a LV moderna.',
  },
  {
    id: 47, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['camiseta'],
    price: 589.90,
    name: 'Camiseta Monograma Clássica LV',
    images: [
      'masculino/louis-vuitton/lv-camiseta-monograma-classica-2.jpeg',
      'masculino/louis-vuitton/lv-camiseta-monograma-classica-1.jpeg',
    ],
    description: 'Camiseta Louis Vuitton com monograma LV clássico em preto spray, em foto de coleção e produto limpo de estúdio. O básico que nunca é básico — a essência da Maison em algodão premium de alto gramado.',
  },
  {
    id: 48, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['camiseta'],
    price: 589.90,
    name: 'Camisa Monograma Multicolorida Louis Vuitton',
    images: [
      'masculino/louis-vuitton/lv-look-completo-1.jpeg',
      'masculino/louis-vuitton/lv-look-completo-2.jpeg',
      'masculino/louis-vuitton/lv-camiseta-monograma-branca.jpeg',
    ],
    description: 'Camiseta monograma branca multicolorida. O equilíbrio perfeito entre o heritage da Maison e a atitude do estilo urbano de luxo.',
  },
  {
    id: 49, brand: 'Lacoste', gender: 'masculino',
    tags: ['camiseta', 'sport'],
    price: 229.90,
    name: 'Camiseta Djokovic Verde',
    images: [
      'masculino/lacoste/lacoste-djokovic-tshirt-verde-1.jpg',
      'masculino/lacoste/lacoste-djokovic-tshirt-verde-2.jpg',
    ],
    description: 'Camiseta da collab Lacoste × Novak Djokovic em verde tênis — leveza técnica e grafismo exclusivo da parceria mais icônica das quadras.',
  },
  {
    id: 121, brand: 'Nike', gender: 'masculino',
    tags: ['camiseta'],
    price: 159.90,
    name: 'Pro Dri-FIT Slim T-Shirt',
    images: [
      'masculino/nike/nike-pro-drifit-tshirt-1.jpg',
      'masculino/nike/nike-pro-drifit-tshirt-2.jpg',
    ],
    description: 'Nike Pro Dri-FIT Slim em tecido técnico de compressão. Silhueta ajustada com tecnologia de controle de umidade — performance atlética com o minimalismo Nike.',
  },
  {
    id: 122, brand: 'Nike', gender: 'masculino',
    tags: ['camiseta'],
    price: 159.90,
    name: 'Pro Dri-FIT Slim Tank Top',
    images: [
      'masculino/nike/nike-pro-drifit-tanktop-1.jpg',
      'masculino/nike/nike-pro-drifit-tanktop-2.jpg',
    ],
    description: 'Tank top Nike Pro Dri-FIT Slim com tecido respirável de compressão. Liberdade de movimento total com tecnologia de secagem rápida — essencial para quem treina com intensidade.',
  },

  /* ══════════════════════════════════════════════════
     TÊNIS
  ══════════════════════════════════════════════════ */
  {
    id: 50, brand: 'Lacoste', gender: 'masculino',
    tags: ['tenis'],
    price: 569.90, originalPrice: 669.90,
    name: 'Tênis L003 Neo Shot Verde',
    images: [
      'masculino/lacoste/lacoste-tenis-verde-1.jpg',
      'masculino/lacoste/lacoste-tenis-verde-2.jpg',
    ],
    description: 'Tênis em couro verde com solado vulcanizado e monograma bordado — a herança das quadras traduzida em calçado de rua inconfundível.',
  },
  {
    id: 51, brand: 'Lacoste', gender: 'feminino',
    tags: ['tenis'],
    price: 569.90, originalPrice: 669.90,
    name: 'Tênis Lacoste Feminino',
    images: [
      'feminino/lacoste/lacoste-tenis-feminino-1.jpg',
      'feminino/lacoste/lacoste-tenis-feminino-2.jpg',
    ],
    description: 'Tênis feminino Lacoste em couro premium com silhueta refinada — a elegância esportiva francesa reinterpretada para o guarda-roupa contemporâneo.',
  },
  {
    id: 52, brand: 'Lacoste', gender: 'masculino',
    tags: ['tenis'],
    price: 429.90, originalPrice: 499.90,
    name: 'Tênis Branco Masculino',
    images: [
      'masculino/lacoste/lacoste-tenis-branco-1.jpg',
      'masculino/lacoste/lacoste-tenis-branco-2.jpg',
      'masculino/lacoste/lacoste-tenis-branco-3.jpg',
      'masculino/lacoste/lacoste-tenis-branco-4.jpg',
      'masculino/lacoste/lacoste-tenis-branco-5.jpg',
    ],
    description: 'O clássico tênis branco Lacoste em couro liso com solado icônico — peça atemporal que eleva qualquer look com eficiência silenciosa.',
  },
  {
    id: 53, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 1389.90, 
    name: 'LV Trainer Preto e Branco',
    images: ['masculino/louis-vuitton/lv-trainer-preto-branco.jpeg'],
    description: 'O icônico LV Trainer em couro preto monograma em relevo com cadarço branco. Um tênis que redefine o luxo das ruas com a precisão artesanal da Maison Louis Vuitton — o objeto de desejo do streetwear de alto luxo.',
  },
  {
    id: 54, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 1389.90,
    name: 'LV Trainer Denim Azul',
    images: ['masculino/louis-vuitton/lv-trainer-denim-azul.jpeg'],
    description: 'LV Trainer na coloração denim azul com monograma LV em relevo e detalhes brancos. Uma fusão da herança francesa centenária com a cultura streetwear contemporânea — para quem escreve suas próprias regras.',
  },
  {
    id: 55, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 1389.90,
    name: 'LV Trainer — 5 Colorways',
    images: ['masculino/louis-vuitton/lv-trainer-4-colorways.jpeg'],
    description: 'Coleção completa do LV Trainer em cinco variações: azul denim, azul multicolorido, marrom camelo, preto total e branco com vermelho. A diversidade criativa que define o universo Louis Vuitton — escolha sua assinatura.',
  },
  {
    id: 56, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 1389.90,
    name: 'LV Trainer — Coleção em Display',
    images: [
      'masculino/louis-vuitton/lv-trainer-display-1.jpeg',
      'masculino/louis-vuitton/lv-trainer-display-2.jpeg',
      'masculino/louis-vuitton/lv-trainer-display-3.jpeg',
    ],
    description: 'Trio de LV Trainers em exposição de coleção: camelo, azul denim e preto total. Fotografados em múltiplos ângulos para revelar cada detalhe artesanal — o tênis mais icônico do luxo contemporâneo em toda sua extensão.',
  },
  {
    id: 57, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 1389.90,
    name: 'LV Trainer Preto — Edição Completa',
    images: [
      'masculino/louis-vuitton/lv-trainer-preto-detalhe-2.jpeg',
      'masculino/louis-vuitton/lv-trainer-preto-unboxing.jpeg',
      'masculino/louis-vuitton/lv-trainer-preto-detalhe-1.jpeg',
      'masculino/louis-vuitton/lv-trainer-preto-detalhe-3.jpeg',
      'masculino/louis-vuitton/lv-trainer-preto-boutique.jpeg',
    ],
    description: 'LV Trainer preto em couro monograma, documentado do unboxing ao detalhe: dustbag em algodão, caixa laranja icônica e boutique oficial. A experiência completa do luxo — do primeiro toque ao último olhar.',
  },
  {
    id: 58, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 1389.90,
    name: 'LV Trainer — Boutique Display',
    images: ['masculino/louis-vuitton/lv-trainer-boutique-display.jpeg'],
    description: 'Vista da prateleira de boutique Louis Vuitton com LV Trainers em azul denim e preto monograma. A experiência de compra como extensão do luxo da peça — o ambiente que merece a coleção.',
  },
  {
    id: 59, brand: 'Hermès', gender: 'masculino',
    tags: ['tenis'],
    price: 889.90,
    name: 'Sandália Chypre Preta',
    images: ['masculino/hermes/hermes-sandalia-chypre-preta.jpeg'],
    description: 'A icônica sandália Chypre da Hermès em couro negro mate com palmilha em couro goffrado. Silhueta de corte limpo com fivela ajustável — o calçado definitivo do luxo discreto, construído à mão por mestres artesãos em Paris.',
  },
  {
    id: 87, brand: 'Lacoste', gender: 'masculino',
    tags: ['tenis'],
    price: 579.90, originalPrice: 959.90,
    name: 'Tênis L003 Neo Shot Branco Off White',
    images: [
      'masculino/lacoste/lacoste-tenis-l003-branco-offwhite-1.jpg',
    ],
    description: 'Tênis Lacoste L003 Neo Shot em branco off-white. Solado vulcanizado com silhueta retrô e emblema do crocodilo — o clássico das quadras reinterpretado para as ruas.',
  },
  {
    id: 88, brand: 'Lacoste', gender: 'masculino',
    tags: ['tenis'],
    price: 599.90, originalPrice: 999.90,
    name: 'Tênis L-Guard Breaker CT Trail Preto',
    images: [
      'masculino/lacoste/lacoste-tenis-lguard-preto-1.jpg',
      'masculino/lacoste/lacoste-tenis-lguard-preto-2.jpg',
    ],
    description: 'Tênis Lacoste L-Guard Breaker CT Trail em preto total. Construção robusta com solado de tração agressiva — performance de trilha com a elegância inconfundível da Maison.',
  },
  {
    id: 89, brand: 'Lacoste', gender: 'masculino',
    tags: ['tenis'],
    price: 489.90, originalPrice: 809.90,
    name: 'Tênis Carnaby Golf Leather Branco',
    images: [
      'masculino/lacoste/lacoste-tenis-carnaby-golf-branco-1.jpg',
      'masculino/lacoste/lacoste-tenis-carnaby-golf-branco-2.jpg',
    ],
    description: 'Tênis Lacoste Carnaby Golf em couro branco. Design clássico de golf com solado de tração otimizada — a tradição das quadras em couro premium.',
  },
  {
    id: 90, brand: 'Lacoste', gender: 'masculino',
    tags: ['tenis'],
    price: 489.90, originalPrice: 809.90,
    name: 'Tênis Carnaby Golf Leather Azul Marinho e Branco',
    images: [
      'masculino/lacoste/lacoste-tenis-carnaby-golf-azul-branco-1.jpg',
      'masculino/lacoste/lacoste-tenis-carnaby-golf-azul-branco-2.jpg',
    ],
    description: 'Tênis Lacoste Carnaby Golf em couro azul marinho e branco. Elegância de fairway com construção premium e tração de performance — o golf shoe definitivo.',
  },
  /* ══════════════════════════════════════════════════
     NIKE — TÊNIS NOVAS CHEGADAS
  ══════════════════════════════════════════════════ */
  {
    id: 91, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 709.90,
    name: 'Air Jordan 1 Low Preto',
    images: [
      'masculino/nike/nike-jordan1-low-preto-1.jpg',
      'masculino/nike/nike-jordan1-low-preto-2.jpg',
    ],
    description: 'O icônico Air Jordan 1 Low em preto total. Couro premium com sola de borracha e swoosh em contraste — o clássico das quadras que transcendeu para as ruas.',
  },
  {
    id: 92, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 569.90, originalPrice: 779.90,
    name: 'Air Jordan 1 Low SE Roxo',
    images: [
      'masculino/nike/nike-jordan1-low-se-roxo-1.jpg',
      'masculino/nike/nike-jordan1-low-se-roxo-2.jpg',
    ],
    description: 'Air Jordan 1 Low SE em roxo com detalhes premium. Edição limitada com construção em couro e sola Air — herança Jordan com atitude contemporânea.',
  },
  {
    id: 93, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 569.90, originalPrice: 779.90,
    name: 'Air Force 1 \'07 LV8 Preto',
    images: [
      'masculino/nike/nike-af1-lv8-preto-1.jpg',
      'masculino/nike/nike-af1-lv8-preto-2.jpg',
    ],
    description: 'Nike Air Force 1 \'07 LV8 em preto com detalhes exclusivos. Couro premium com sola Air e swoosh em contraste — o ícone streetwear em sua forma mais refinada.',
  },
  {
    id: 94, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 569.90, originalPrice: 779.90,
    name: 'Air Force 1 \'07 LV8 Branco',
    images: [
      'masculino/nike/nike-af1-lv8-branco-1.jpg',
    ],
    description: 'AF1 \'07 LV8 em branco imaculado com acabamentos premium. O tênis que definiu o streetwear de luxo — agora em versão limitada.',
  },
  {
    id: 95, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 709.90,
    name: 'Air Force 1 \'07 Preto',
    images: [
      'masculino/nike/nike-af1-preto-1.jpg',
      'masculino/nike/nike-af1-preto-2.jpg',
    ],
    description: 'O lendário Air Force 1 \'07 em preto total. Couro liso com sola Air e swoosh tonal — a base de qualquer guarda-roupa masculino de excelência.',
  },
  {
    id: 96, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 709.90,
    name: 'Air Force 1 \'07 Branco',
    images: [
      'masculino/nike/nike-af1-branco-1.jpg',
      'masculino/nike/nike-af1-branco-2.jpg',
    ],
    description: 'O AF1 \'07 em branco imaculado. O tênis mais versátil já criado — limpo, clássico e inegavelmente premium.',
  },
  {
    id: 97, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 629.90, originalPrice: 899.90,
    name: 'Air Max Phoenix Preto',
    images: [
      'masculino/nike/nike-airmax-phoenix-preto-1.jpg',
      'masculino/nike/nike-airmax-phoenix-preto-2.jpg',
    ],
    description: 'Nike Air Max Phoenix em preto com unidade Air Max visível. Amortecimento responsivo com silhueta moderna — conforto e estilo em cada passada.',
  },
  {
    id: 98, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 1169.90,
    name: 'Air Max Plus 3 Preto',
    images: [
      'masculino/nike/nike-airmax-plus3-preto-1.jpg',
      'masculino/nike/nike-airmax-plus3-preto-2.jpg',
    ],
    description: 'O Air Max Plus 3 em preto total com as icônicas barras Tuned Air. Design futurista com amortecimento de próxima geração — o TN que define tendências.',
  },
  {
    id: 99, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 779.90, originalPrice: 1119.90,
    name: 'Air Max Plus Azul Claro',
    images: [
      'masculino/nike/nike-airmax-plus-azul-claro-1.jpg',
      'masculino/nike/nike-airmax-plus-azul-claro-3.jpg',
      'masculino/nike/nike-airmax-plus-azul-claro-2.jpg',
    ],
    description: 'Nike Air Max Plus em azul claro com gradientes de cor nas barras laterais. Tuned Air com design ousado — onde a engenharia encontra a arte urbana.',
  },
  {
    id: 100, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 819.90, originalPrice: 1169.90,
    name: 'Air Max Plus Azul e Branco',
    images: [
      'masculino/nike/nike-airmax-plus-azul-branco-1.jpg',
      'masculino/nike/nike-airmax-plus-azul-branco-2.jpg',
    ],
    description: 'Air Max Plus em azul e branco com barras Tuned Air em gradiente. A versão mais fresca e luminosa do clássico TN — para dias de sol com atitude.',
  },
  {
    id: 101, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 1119.90,
    name: 'Air Max Plus Preto e Azul',
    images: [
      'masculino/nike/nike-airmax-plus-preto-azul-1.jpg',
      'masculino/nike/nike-airmax-plus-preto-azul-2.jpg',
    ],
    description: 'Air Max Plus em preto com detalhes em azul royal. Construção robusta com amortecimento Tuned Air — poder visual e conforto absoluto.',
  },
  {
    id: 102, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 1119.90,
    name: 'Air Max Plus Full Preto',
    images: [
      'masculino/nike/nike-airmax-plus-full-preto-1.jpg',
      'masculino/nike/nike-airmax-plus-full-preto-2.jpg',
    ],
    description: 'O TN em preto total — a versão mais stealth e dominante do Air Max Plus. Para quem prefere que o estilo fale em sussurros.',
  },
  {
    id: 103, brand: 'Nike', gender: 'feminino',
    tags: ['tenis'],
    price: 1119.90,
    name: 'Air Max Plus SE Feminino Preto e Prata',
    images: [
      'feminino/nike/nike-airmax-plus-se-preto-prata-1.jpg',
      'feminino/nike/nike-airmax-plus-se-preto-prata-2.jpg',
    ],
    description: 'Air Max Plus SE feminino em preto e prata. Edição especial com detalhes metálicos e silhueta refinada — o TN que eleva qualquer look.',
  },
  {
    id: 104, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 779.90, originalPrice: 1119.90,
    name: 'Air Max Plus VII Preto e Laranja',
    images: [
      'masculino/nike/nike-airmax-plus7-preto-laranja-1.jpg',
      'masculino/nike/nike-airmax-plus7-preto-laranja-2.jpg',
    ],
    description: 'Air Max Plus VII em preto com laranja vibrante. A sétima geração do ícone com amortecimento Tuned Air aprimorado — evolução contínua do design urbano.',
  },
  {
    id: 105, brand: 'Nike', gender: 'feminino',
    tags: ['tenis'],
    price: 749.90, originalPrice: 1069.90,
    name: 'Air Max Plus Feminino Rosa',
    images: [
      'feminino/nike/nike-airmax-plus-feminino-rosa-1.jpg',
      'feminino/nike/nike-airmax-plus-feminino-rosa-2.jpg',
    ],
    description: 'Air Max Plus feminino em rosa com barras Tuned Air em gradiente. O ícone streetwear reinterpretado para o guarda-roupa feminino com ousadia e elegância.',
  },
  {
    id: 106, brand: 'Nike', gender: 'feminino',
    tags: ['tenis'],
    price: 779.90, originalPrice: 1119.90,
    name: 'Air Max Plus Feminino Full Preto',
    images: [
      'feminino/nike/nike-airmax-plus-feminino-preto-2.jpg',
      'feminino/nike/nike-airmax-plus-feminino-preto-3.jpg',
      'feminino/nike/nike-airmax-plus-feminino-preto-1.jpg',
    ],
    description: 'Air Max Plus feminino em preto total. Silhueta robusta com amortecimento de elite — o TN que domina as ruas com presença inconfundível.',
  },
  {
    id: 107, brand: 'Nike', gender: 'feminino',
    tags: ['tenis'],
    price: 1239.90,
    name: 'Air Max Plus Feminino Rosa e Preto',
    images: [
      'feminino/nike/nike-airmax-plus-feminino-rosa-preto-1.jpg',
      'feminino/nike/nike-airmax-plus-feminino-rosa-preto-2.jpg',
    ],
    description: 'Air Max Plus feminino em rosa e preto. O contraste perfeito entre doçura e atitude — o TN mais exclusivo da coleção feminina.',
  },
  {
    id: 108, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 629.90, originalPrice: 899.90,
    name: 'Dunk Low GORE-TEX Cinza',
    images: [
      'masculino/nike/nike-dunk-low-goretex-cinza-1.jpg',
      'masculino/nike/nike-dunk-low-goretex-cinza-2.jpg',
    ],
    description: 'Nike Dunk Low com membrane GORE-TEX em cinza. Resistente à água com o perfil clássico do Dunk — estilo de quadra pronto para qualquer clima.',
  },
  {
    id: 109, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 629.90, originalPrice: 899.90,
    name: 'Shox R4 Branco e Preto',
    images: [
      'masculino/nike/nike-shox-r4-branco-preto-1.jpg',
      'masculino/nike/nike-shox-r4-branco-preto-2.jpg',
    ],
    description: 'O futurista Nike Shox R4 em branco e preto. Colunas Shox para amortecimento responsivo — design que parece ter saído de 2030.',
  },
  {
    id: 110, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 379.90,
    name: 'Tiempo Maestro Chuteira Preto',
    images: [
      'masculino/nike/nike-tiempo-maestro-preto-1.jpg',
      'masculino/nike/nike-tiempo-maestro-preto-2.jpg',
    ],
    description: 'Chuteira Nike Tiempo Maestro em couro preto com travas multi-ground. Toque clássico em couro com tecnologia moderna — para quem domina a bola com elegância.',
  },

  /* ══════════════════════════════════════════════════
     ACESSÓRIOS
  ══════════════════════════════════════════════════ */
  {
    id: 60, brand: 'Christian Dior', gender: 'feminino',
    tags: ['acessorio'],
    price: 389.90,
    name: 'Bolsa Lady Dior Preta',
    images: ['feminino/dior/dior-bolsa-lady-dior-preta.jpeg'],
    description: 'A lendária Lady Dior em bordado toile de jouy preto e branco com alça removível. Bordados elaborados com padrão exclusivo, ferragens douradas e charm "D.I.O.R." — um objeto de desejo absoluto, símbolo da haute couture parisiense.',
  },
  {
    id: 61, brand: 'Lacoste', gender: 'masculino',
    tags: ['acessorio'],
    price: 389.90,
    name: 'Boné Branco Lacoste',
    images: [
      'masculino/lacoste/lacoste-bone-branco-1.jpg',
      'masculino/lacoste/lacoste-bone-branco-2.jpg',
      'masculino/lacoste/lacoste-bone-branco-3.jpg',
    ],
    description: 'Boné estruturado em branco com crocodilo bordado em verde — o acessório que completa o look com a elegância característica da Maison.',
  },
  {
    id: 62, brand: 'Lacoste', gender: 'masculino',
    tags: ['acessorio'],
    price: 419.90,
    name: 'Bolsa Preta Lacoste',
    images: [
      'masculino/lacoste/lacoste-bolsa-preta-1.jpg',
      'masculino/lacoste/lacoste-bolsa-preta-2.jpg',
    ],
    description: 'Bolsa em nylon premium preto com ferragens douradas e crocodilo em relevo — acessório funcional com a sofisticação que a Maison assina.',
  },
  {
    id: 63, brand: 'Lacoste', gender: 'masculino',
    tags: ['acessorio'],
    price: 384.90,
    name: 'Chapéu Bucket Piqué',
    images: [
      'masculino/lacoste/lacoste-chapeu-bucket-1.jpg',
      'masculino/lacoste/lacoste-chapeu-bucket-2.jpg',
    ],
    description: 'Chapéu bucket em piqué unissex com aba estruturada e crocodilo bordado — o acessório de verão que equilibra funcionalidade e estilo Lacoste.',
  },

  /* ══════════════════════════════════════════════════
     SPORT (peças exclusivamente sport / corta-ventos)
  ══════════════════════════════════════════════════ */
  {
    id: 64, brand: 'Lacoste', gender: 'masculino',
    tags: ['sport'],
    sold: true,
    price: 749.41, originalPrice: 889.90,
    name: 'Jaqueta Metasport Cobalt',
    images: ['masculino/lacoste/Jaqueta Metasport Cobalt.jpeg'],
    description: 'Jaqueta full-zip Lacoste METASPORT em azul cobalto. Tecido elástico de performance com proteção UV, silhueta de gola alta e emblema de crocodilo em amarelo vibrante — estilo de quadra de próxima geração.',
  },
  {
    id: 65, brand: 'Lacoste', gender: 'masculino',
    tags: ['sport'],
    sold: true,
    price: 889.90,
    name: 'Jaqueta Sport Branca',
    images: ['masculino/lacoste/lacoste-jaqueta-sport-branca.jpeg'],
    description: 'Jaqueta de performance Lacoste Sport em branco off-white. Tecido leve e elástico, vivos em preto ao longo das laterais e gola, com icônico emblema de crocodilo — criada para as quadras modernas e para além delas.',
  },
  {
    id: 66, brand: 'Lacoste', gender: 'masculino',
    tags: ['sport'],
    sold: true,
    price: 889.90,
    name: 'Conjunto Corta-Vento com Logo',
    images: ['masculino/lacoste/lacoste-corta-vento-azul.jpeg'],
    description: 'Corta-vento com capuz Lacoste em azul marinho com marca em verde sálvia no peito. Shell leve e dobrável que oferece proteção eficiente com estilo esportivo clássico — sempre pronto para o próximo movimento.',
  },
  {
    id: 67, brand: 'Hugo Boss', gender: 'masculino',
    tags: ['sport'],
    price: 719.90,
    name: 'Moletom Zip Boss Cinza Claro',
    images: ['masculino/hugo-boss/Corta-Vento Boss Mapa Abstrato.jpeg'],
    description: 'Moletom com capuz BOSS com estampa abstrata de mapa urbano em off-white e cinza. Shell leve premium com zíper preto e logo bordado no peito — onde a arte contemporânea encontra a utilidade executiva.',
  },
  {
    id: 68, brand: 'Lacoste', gender: 'masculino',
    tags: ['sport'],
    price: 389.90,
    name: 'Lacoste Sport Verde Musgo',
    images: [
      'masculino/lacoste/lacoste-sport-verde-1.jpg',
      'masculino/lacoste/lacoste-sport-verde-2.jpg',
    ],
    description: 'Peça sport em verde com construção técnica de alto desempenho — onde a funcionalidade das quadras encontra o design de Maison.',
  },
];

/* =====================================================
   BRAND & CATEGORY LISTS
   ===================================================== */
const BRANDS_BY_GENDER = {
  masculino: ['Lacoste', 'Louis Vuitton', 'Nike', 'Hugo Boss', 'Tommy Hilfiger', 'Hermès'],
  feminino:  ['Lacoste', 'Christian Dior'],
};

const CATEGORIES = [
  { id: 'polo',      label: 'Polos' },
  { id: 'moletom',   label: 'Moletons' },
  { id: 'conjunto',  label: 'Conjuntos' },
  { id: 'calca',     label: 'Calças' },
  { id: 'short',     label: 'Shorts' },
  { id: 'tenis',     label: 'Tênis' },
  { id: 'sport',     label: 'Lacoste Sport' },
  { id: 'camiseta',  label: 'Camisetas' },
  { id: 'acessorio', label: 'Acessórios' },
];

/* Ordem de agrupamento na aba "Todos" */
const CATEGORY_ORDER = ['conjunto', 'polo', 'moletom', 'calca', 'short', 'camiseta', 'tenis', 'acessorio', 'sport'];

function getPrimaryCategory(p) {
  for (const cat of CATEGORY_ORDER) {
    if (p.tags.includes(cat)) return cat;
  }
  return 'sport';
}

/* =====================================================
   STATE
   ===================================================== */
let activeGender   = 'masculino';
let activeBrand    = 'all';
let activeCategory = 'all';
let activeSort     = 'default'; // 'default' | 'price-asc' | 'price-desc'

/* =====================================================
   UTILITÁRIOS
   ===================================================== */
function encodeImg(file) {
  return 'images/' + file.split('/').map(encodeURIComponent).join('/');
}

function buildWhatsAppURL(name, brand, price) {
  const msg = encodeURIComponent(
    `Olá! Vi o site da Tolent Imports e tenho interesse na peça: *${name}* da marca *${brand}* (${fmt(price)}). Poderia me passar mais informações?`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

/* =====================================================
   FILTROS — MARCA
   ===================================================== */
function buildBrandFilters(gender) {
  const bar = document.querySelector('.filter-bar');
  const brands = BRANDS_BY_GENDER[gender];
  bar.innerHTML = `<button class="filter-btn ${activeBrand === 'all' ? 'active' : ''}" data-filter="all">Todos</button>`;
  brands.forEach(b => {
    const label = b === 'Christian Dior' ? 'Dior' : b;
    bar.innerHTML += `<button class="filter-btn ${activeBrand === b ? 'active' : ''}" data-filter="${b}">${label}</button>`;
  });
  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeBrand = btn.dataset.filter;
      renderProducts();
    });
  });
}

/* =====================================================
   FILTROS — CATEGORIA
   ===================================================== */
function buildCategoryFilters() {
  const bar = document.querySelector('.category-bar');
  if (!bar) return;
  bar.innerHTML = `<button class="filter-btn cat-btn ${activeCategory === 'all' ? 'active' : ''}" data-cat="all">Todas</button>`;
  CATEGORIES.forEach(c => {
    bar.innerHTML += `<button class="filter-btn cat-btn ${activeCategory === c.id ? 'active' : ''}" data-cat="${c.id}">${c.label}</button>`;
  });
  bar.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderProducts();
    });
  });
}

/* =====================================================
   ORDENAÇÃO — PREÇO
   ===================================================== */
function buildSortControls() {
  const bar = document.querySelector('.sort-bar');
  if (!bar) return;

  const options = [
    { id: 'default',    label: 'Destaque' },
    { id: 'price-asc',  label: 'Menor Preço' },
    { id: 'price-desc', label: 'Maior Preço' },
  ];

  bar.innerHTML = `<span class="sort-label">Ordenar:</span>` +
    options.map(o =>
      `<button class="filter-btn sort-btn ${activeSort === o.id ? 'active' : ''}" data-sort="${o.id}">${o.label}</button>`
    ).join('');

  bar.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSort = btn.dataset.sort;
      renderProducts();
    });
  });
}

/* =====================================================
   GENDER TABS
   ===================================================== */
document.querySelectorAll('.gender-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.gender-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeGender   = tab.dataset.gender;
    activeBrand    = 'all';
    activeCategory = 'all';
    buildBrandFilters(activeGender);
    buildCategoryFilters();
    renderProducts();
  });
});

/* =====================================================
   HERO GENDER BUTTONS
   ===================================================== */
document.querySelectorAll('.hero-gender-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const gender = btn.dataset.gender;
    document.querySelectorAll('.gender-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.gender === gender);
    });
    activeGender   = gender;
    activeBrand    = 'all';
    activeCategory = 'all';
    buildBrandFilters(activeGender);
    buildCategoryFilters();
    renderProducts();
  });
});

/* =====================================================
   RENDERIZAR PRODUTOS
   ===================================================== */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  let list = PRODUCTS.filter(p => p.gender === activeGender);
  if (activeBrand    !== 'all') list = list.filter(p => p.brand === activeBrand);
  if (activeCategory !== 'all') list = list.filter(p => p.tags.includes(activeCategory));

  /* — Ordenação — */
  if (activeSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else {
    /* Destaque: agrupa por categoria (só em "Todas"), vendidos ao final,
       depois maior desconto primeiro */
    list.sort((a, b) => {
      if (activeCategory === 'all') {
        const catA = CATEGORY_ORDER.indexOf(getPrimaryCategory(a));
        const catB = CATEGORY_ORDER.indexOf(getPrimaryCategory(b));
        if (catA !== catB) return catA - catB;
      }
      /* Não-vendidos antes de vendidos */
      const soldDiff = (a.sold ? 1 : 0) - (b.sold ? 1 : 0);
      if (soldDiff !== 0) return soldDiff;
      /* Maior desconto primeiro */
      return getDiscount(b) - getDiscount(a);
    });
  }

  if (!list.length) {
    grid.innerHTML = '<p style="text-align:center;color:var(--grey);grid-column:1/-1;padding:60px 0;">Nenhuma peça encontrada para esta categoria.</p>';
    return;
  }

  list.forEach((product, i) => {
    const multi = product.images.length > 1;

    const dotsHTML = multi
      ? `<div class="carousel-dots">${product.images.map((_, idx) =>
          `<span class="carousel-dot${idx === 0 ? ' active' : ''}"></span>`).join('')}</div>`
      : '';

    const arrowsHTML = multi
      ? `<button class="carousel-btn carousel-prev" aria-label="Anterior">&#8249;</button>
         <button class="carousel-btn carousel-next" aria-label="Próximo">&#8250;</button>`
      : '';

    const discountPct = getDiscount(product);
    const priceHTML = product.originalPrice
      ? `<div class="card-price">
           <span class="price-original">${fmt(product.originalPrice)}</span>
           <span class="price-current">${fmt(product.price)}</span>
           <span class="price-badge">-${discountPct}%</span>
         </div>`
      : `<div class="card-price"><span class="price-current">${fmt(product.price)}</span></div>`;

    const soldHTML = product.sold
      ? `<div class="sold-overlay" aria-label="Produto vendido">
           <div class="sold-badge">VENDIDO</div>
         </div>`
      : '';

    const card = document.createElement('article');
    card.className = 'product-card' + (product.sold ? ' is-sold' : '');
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver ${product.name} — ${product.brand}`);
    card.style.transitionDelay = `${(i % 3) * 0.08}s`;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${encodeImg(product.images[0])}"
          alt="${product.name} — ${product.brand}" loading="lazy" />
        ${arrowsHTML}
        ${dotsHTML}
        ${soldHTML}
        <div class="card-hover-overlay">
          <div class="card-view-btn">${product.sold ? 'Ver Detalhes' : 'Ver Detalhes'}</div>
        </div>
      </div>
      <div class="card-info">
        <p class="card-brand">${product.brand}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        ${priceHTML}
        ${product.sold ? '<p class="card-sold-tag">— Peça esgotada —</p>' : ''}
      </div>
    `;

    let cardIdx = 0;
    if (multi) {
      const imgEl = card.querySelector('.card-img');
      const dots  = card.querySelectorAll('.carousel-dot');
      const prev  = card.querySelector('.carousel-prev');
      const next  = card.querySelector('.carousel-next');
      function cardGoTo(n) {
        cardIdx = ((n % product.images.length) + product.images.length) % product.images.length;
        imgEl.src = encodeImg(product.images[cardIdx]);
        dots.forEach((d, k) => d.classList.toggle('active', k === cardIdx));
      }
      prev.addEventListener('click', e => { e.stopPropagation(); cardGoTo(cardIdx - 1); });
      next.addEventListener('click', e => { e.stopPropagation(); cardGoTo(cardIdx + 1); });
      dots.forEach((dot, k) => dot.addEventListener('click', e => { e.stopPropagation(); cardGoTo(k); }));
    }

    card.addEventListener('click', () => openModal(product, cardIdx));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(product, cardIdx); }
    });

    grid.appendChild(card);
    requestAnimationFrame(() => setTimeout(() => card.classList.add('visible'), 60 + i * 70));
  });
}

/* =====================================================
   MODAL + MODAL CAROUSEL
   ===================================================== */
const modalOverlay = document.getElementById('modalOverlay');
const modalImg     = document.getElementById('modalImg');
const modalBrand   = document.getElementById('modalBrand');
const modalName    = document.getElementById('modalName');
const modalDesc    = document.getElementById('modalDesc');
const modalCta     = document.getElementById('modalCta');
const modalPrev    = document.getElementById('modalPrev');
const modalNext    = document.getElementById('modalNext');
const modalDots    = document.getElementById('modalDots');

let _mImages  = [];
let _mCurrent = 0;

function openModal(product, startIdx = 0) {
  _mImages  = product.images;
  _mCurrent = startIdx;

  modalBrand.textContent = product.brand;
  modalName.textContent  = product.name;
  modalDesc.textContent  = product.description;
  modalCta.href = buildWhatsAppURL(product.name, product.brand, product.price);

  const modalPriceEl = document.getElementById('modalPrice');
  if (modalPriceEl) {
    const disc = getDiscount(product);
    if (product.originalPrice) {
      modalPriceEl.innerHTML = `<span class="price-original">${fmt(product.originalPrice)}</span> <span class="price-current">${fmt(product.price)}</span> <span class="price-badge">-${disc}%</span>`;
    } else {
      modalPriceEl.innerHTML = `<span class="price-current">${fmt(product.price)}</span>`;
    }
  }

  modalDots.innerHTML = _mImages.map((_, i) =>
    `<span class="modal-dot${i === startIdx ? ' active' : ''}"></span>`
  ).join('');
  modalDots.querySelectorAll('.modal-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => modalGoTo(i));
  });

  const multi = _mImages.length > 1;
  modalPrev.classList.toggle('visible', multi);
  modalNext.classList.toggle('visible', multi);
  modalImg.src = encodeImg(_mImages[startIdx]);
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}

function modalGoTo(n) {
  _mCurrent = ((n % _mImages.length) + _mImages.length) % _mImages.length;
  modalImg.src = encodeImg(_mImages[_mCurrent]);
  modalDots.querySelectorAll('.modal-dot').forEach((d, i) =>
    d.classList.toggle('active', i === _mCurrent)
  );
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modalImg.src = ''; }, 460);
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modalPrev.addEventListener('click', () => modalGoTo(_mCurrent - 1));
modalNext.addEventListener('click', () => modalGoTo(_mCurrent + 1));
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
modalCta.addEventListener('click', () => setTimeout(closeModal, 300));

/* =====================================================
   KEYBOARD NAVIGATION
   ===================================================== */
document.addEventListener('keydown', e => {
  if (!modalOverlay.classList.contains('open')) return;
  if (e.key === 'Escape')     closeModal();
  if (e.key === 'ArrowLeft')  modalGoTo(_mCurrent - 1);
  if (e.key === 'ArrowRight') modalGoTo(_mCurrent + 1);
});

/* =====================================================
   NAVBAR — scroll shrink + hamburger
   ===================================================== */
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 70);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* =====================================================
   HERO PARALLAX
   ===================================================== */
const heroLogo = document.getElementById('heroLogo');
window.addEventListener('scroll', () => {
  if (!heroLogo) return;
  const y = window.scrollY;
  if (y < window.innerHeight) heroLogo.style.transform = `translateY(${y * 0.22}px)`;
}, { passive: true });

/* =====================================================
   SCROLL REVEAL
   ===================================================== */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* =====================================================
   SMOOTH SCROLL
   ===================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - (navbar.offsetHeight + 12);
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* =====================================================
   INIT
   ===================================================== */
buildBrandFilters('masculino');
buildCategoryFilters();
buildSortControls();
renderProducts();
