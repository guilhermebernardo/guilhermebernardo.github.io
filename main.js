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
     TESTE DE PAGAMENTO — REMOVER APÓS VALIDAR
  ══════════════════════════════════════════════════ */

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
    sold: true,
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
    sold: true,
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
    sold: true,
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
    price: 2389.90,
    sold: true,
    name: 'LV Trainer Denim Azul',
    images: ['masculino/louis-vuitton/lv-trainer-denim-azul.jpeg'],
    description: 'LV Trainer na coloração denim azul com monograma LV em relevo e detalhes brancos. Uma fusão da herança francesa centenária com a cultura streetwear contemporânea — para quem escreve suas próprias regras.',
  },
  {
    id: 59, brand: 'Hermès', gender: 'masculino',
    tags: ['tenis'],
    price: 2889.90,
    sold: true,
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
    sold: true,
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
    sold: true,
    price: 4389.90,
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

  /* ══════════════════════════════════════════════════
     NIKE — NOVAS CHEGADAS
  ══════════════════════════════════════════════════ */
  {
    id: 260, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 289.90, originalPrice: 320.00,
    name: 'Club Fleece Hoodie Azul Court',
    images: [
      'masculino/nike/nike-club-fleece-court-blue-1.webp',
      'masculino/nike/nike-club-fleece-court-blue-2.webp',
    ],
    description: 'Moletom Nike Club Fleece em azul court com capuz e bolso canguru — o conforto definitivo do fleece premium com o Swoosh no peito.',
  },
  {
    id: 261, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 269.90, originalPrice: 320.00,
    name: 'Club Fleece Hoodie Laranja',
    images: [
      'masculino/nike/nike-club-fleece-orange-1.webp',
    ],
    description: 'Moletom Nike Club Fleece em laranja vibrante com capuz e bolso canguru — cor de impacto com o conforto inconfundível do fleece Nike.',
  },
  {
    id: 262, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 269.90, originalPrice: 320.00,
    name: 'Club Pullover Fleece Hoodie Vermelho',
    images: [
      'masculino/nike/nike-club-fleece-red-1.webp',
      'masculino/nike/nike-club-fleece-red-2.webp',
    ],
    description: 'Moletom pullover Nike Club Fleece em vermelho intenso com capuz e bolso canguru — clássico reinventado com o calor e o estilo que a Nike entrega.',
  },
  {
    id: 263, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 289.90, originalPrice: 320.00,
    name: 'Club Pullover Fleece Hoodie World Indigo',
    images: [
      'masculino/nike/nike-club-fleece-indigo-1.webp',
      'masculino/nike/nike-club-fleece-indigo-2.webp',
    ],
    description: 'Moletom pullover Nike Club Fleece em World Indigo — azul profundo com toque suave de fleece premium e o icônico logo bordado.',
  },
  {
    id: 264, brand: 'Nike', gender: 'masculino',
    tags: ['calca'],
    price: 269.90, originalPrice: 300.00,
    name: 'Club Jogger Laranja',
    images: [
      'masculino/nike/nike-club-joggers-orange-1.webp',
    ],
    description: 'Calça jogger Nike Club em laranja com elástico e punhos afunilados — movimento sem restrições com a qualidade de construção que a Nike assina.',
  },
  {
    id: 265, brand: 'Nike', gender: 'masculino',
    tags: ['calca'],
    price: 269.90, originalPrice: 300.00,
    name: 'Club Jogger World Indigo',
    images: [
      'masculino/nike/nike-club-joggers-indigo-1.webp',
      'masculino/nike/nike-club-joggers-indigo-2.webp',
    ],
    description: 'Calça jogger Nike Club em World Indigo com elástico e punhos afunilados — o azul profundo que combina com qualquer look casual.',
  },
  {
    id: 266, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 359.90, originalPrice: 400.00,
    name: 'Solo Swoosh Hoodie Roxo',
    images: [
      'masculino/nike/nike-solo-swoosh-purple-1.webp',
      'masculino/nike/nike-solo-swoosh-purple-2.webp',
    ],
    description: 'Moletom Nike Solo Swoosh em roxo com o grande Swoosh bordado na frente — declaração de estilo com fleece de alta gramatura e silhueta relaxada.',
  },
  {
    id: 267, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 359.90, originalPrice: 440.00,
    name: 'Stranger Things 5 Vecna Oversized Hoodie',
    images: [
      'masculino/nike/nike-stranger-things-vecna-1.webp',
      'masculino/nike/nike-stranger-things-vecna-2.webp',
    ],
    description: 'Collab exclusiva Nike × Stranger Things 5 — moletom oversized em cinza escuro com estampa do vilão Vecna. Edição limitada para quem domina o Mundo Invertido e as ruas.',
  },

  /* ══════════════════════════════════════════════════
     JORDAN — NOVAS CHEGADAS
  ══════════════════════════════════════════════════ */
  {
    id: 270, brand: 'Jordan', gender: 'masculino',
    tags: ['camiseta'],
    price: 169.90,
    name: 'Brooklyn Jumpman T-Shirt Gym Red',
    images: [
      'masculino/jordan/jordan-jumpman-tshirt-red-1.webp',
      'masculino/jordan/jordan-jumpman-tshirt-red-2.webp',
    ],
    description: 'Camiseta Jordan Brooklyn Jumpman em vermelho gym com gráfico icônico — algodão premium com o DNA das quadras e o estilo das ruas de Brooklyn.',
  },
  {
    id: 271, brand: 'Jordan', gender: 'masculino',
    tags: ['calca'],
    price: 339.90, originalPrice: 380.00,
    name: 'Brooklyn Oversized Graphic Pants',
    images: [
      'masculino/jordan/jordan-graphic-pants-1.webp',
      'masculino/jordan/jordan-graphic-pants-2.webp',
    ],
    description: 'Calça Jordan Brooklyn de corte oversized em preto com grafismo Gym Red — silhueta larga e arrojada com o estilo de quadra que define a cultura Jordan.',
  },

  /* ══════════════════════════════════════════════════
     HOODRICH
  ══════════════════════════════════════════════════ */
  {
    id: 272, brand: 'Hoodrich', gender: 'masculino',
    tags: ['moletom'],
    price: 389.90, originalPrice: 600.00,
    name: 'Dark Oversized Hoodie Glacier Lake',
    images: [
      'masculino/hoodrich/hoodrich-dark-hoodie-glacier-1.webp',
      'masculino/hoodrich/hoodrich-dark-hoodie-glacier-2.webp',
    ],
    description: 'Moletom oversized Hoodrich em azul Glacier Lake — streetwear britânico de alto impacto com silhueta ampla e logo bordado. A estética das ruas de Londres em cada detalhe.',
  },

  /* ══════════════════════════════════════════════════
     SUPPLY & DEMAND
  ══════════════════════════════════════════════════ */
  {
    id: 273, brand: 'Supply & Demand', gender: 'masculino',
    tags: ['calca'],
    price: 389.90, originalPrice: 440.00,
    name: 'Slater Jeans Mid Wash Denim',
    images: [
      'masculino/supply-demand/sd-slater-jeans-midwash-1.webp',
      'masculino/supply-demand/sd-slater-jeans-midwash-2.webp',
    ],
    description: 'Jeans Supply & Demand Slater em lavagem média — corte contemporâneo com desgastes sutis e tecido denim premium. O casual refinado que não abre mão do estilo.',
  },

  /* ══════════════════════════════════════════════════
     VICTORIA'S SECRET — FRAGRÂNCIAS (3 por R$ 189,90)
  ══════════════════════════════════════════════════ */
  {
    id: 200, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Amber Romance',
    images: [
      'feminino/victorias-secret/vs-body-amber-romance-lotion.avif',
      'feminino/victorias-secret/vs-body-amber-romance-shimmer-lotion.avif',
      'feminino/victorias-secret/vs-body-amber-romance-shimmer-mist.avif',
    ],
    description: 'Fragrância floral almiscarada com notas de rosa, sândalo e baunilha âmbar. Disponível em Loção, Shimmer Loção e Shimmer Mist. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90 (mix de produtos liberado).',
  },
  {
    id: 201, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Aqua Kiss',
    images: [
      'feminino/victorias-secret/vs-body-aqua-kiss-lotion.avif',
      'feminino/victorias-secret/vs-body-aqua-kiss-shimmer-mist.avif',
    ],
    description: 'Fragrância aquática e refrescante com notas de brisa marinha e flores brancas. Disponível em Loção e Shimmer Mist. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90 (mix de produtos liberado).',
  },
  {
    id: 202, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Bare Vanilla',
    images: [
      'feminino/victorias-secret/vs-body-bare-vanilla-lotion.avif',
      'feminino/victorias-secret/vs-body-bare-vanilla-shimmer-lotion.avif',
      'feminino/victorias-secret/vs-body-bare-vanilla-shimmer-mist.avif',
    ],
    description: 'Fragrância quente e sensual com notas de baunilha pura e sândalo cremoso — a favorita atemporal da Victoria\'s Secret. Disponível em Loção, Shimmer Loção e Shimmer Mist. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 203, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Coconut Passion',
    images: [
      'feminino/victorias-secret/vs-body-coconut-passion-lotion.avif',
      'feminino/victorias-secret/vs-body-coconut-passion-shimmer-lotion.avif',
      'feminino/victorias-secret/vs-body-coconut-passion-shimmer-mist.avif',
    ],
    description: 'Fragrância tropical irresistível com notas de coco tostado e sândalo doce — pele hidratada e com aquele brilho dos dias de praia. Disponível em Loção, Shimmer Loção e Shimmer Mist. R$129,90 a unidade — PROMOÇÃO: 3 por R$189,90.',
  },
  {
    id: 204, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Gelato Oasis',
    images: [
      'feminino/victorias-secret/vs-body-gelato-oasis-lotion.avif',
      'feminino/victorias-secret/vs-body-gelato-oasis-mist.avif',
    ],
    description: 'Fragrância refrescante e adocicada inspirada num oásis de gelato — notas frutadas e florais que evocam verões perfeitos. Disponível em Loção e Body Mist. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 205, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Isla Hibiscus',
    images: [
      'feminino/victorias-secret/vs-body-isla-hibiscus-lotion.avif',
      'feminino/victorias-secret/vs-body-isla-hibiscus-mist.avif',
    ],
    description: 'Fragrância tropical e floral com hibisco vibrante e notas de água de coco — a leveza das ilhas em cada aplicação. Disponível em Loção e Body Mist. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 206, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Love Spell',
    images: [
      'feminino/victorias-secret/vs-body-love-spell-lotion.avif',
      'feminino/victorias-secret/vs-body-love-spell-shimmer-lotion.avif',
      'feminino/victorias-secret/vs-body-love-spell-shimmer-mist.avif',
    ],
    description: 'Fragrância romántica e floral com pêssego e cereja sobre base de jasmim e sândalo — um encanto irresistível. Disponível em Loção, Shimmer Loção e Shimmer Mist. R$129,90 a unidade — PROMOÇÃO: 3 por R$189,90.',
  },
  {
    id: 207, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Midnight Blooms',
    images: [
      'feminino/victorias-secret/vs-body-midnight-blooms-lotion.avif',
      'feminino/victorias-secret/vs-body-midnight-bloom-shimmer-mist.avif',
    ],
    description: 'Fragrância misteriosa e floral com flores que desabrocham à meia-noite — pétalas escuras sobre base quente e almiscarada. Disponível em Loção e Shimmer Mist. R$129,90 a unidade — PROMOÇÃO: 3 por R$189,90.',
  },
  {
    id: 208, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Piña Tropicale',
    images: [
      'feminino/victorias-secret/vs-body-pina-tropicale-lotion.avif',
      'feminino/victorias-secret/vs-body-pina-tropicale-mist.avif',
    ],
    description: 'Fragrância tropical e efervescente com abacaxi suculento e notas de coco e baunilha — férias em cada spritz. Disponível em Loção e Body Mist. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 209, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Pitaya Paradise',
    images: [
      'feminino/victorias-secret/vs-body-pitaya-paradise-lotion.avif',
      'feminino/victorias-secret/vs-body-pitaya-paradise-mist.avif',
    ],
    description: 'Fragrância exótica e vibrante com pitaya, frutos tropicais e base floral — energia e frescor que duram o dia todo. Disponível em Loção e Body Mist. R$129,90 a unidade — PROMOÇÃO: 3 por R$189,90.',
  },
  {
    id: 210, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Pure Seduction',
    images: [
      'feminino/victorias-secret/vs-body-pure-seduction-lotion.avif',
      'feminino/victorias-secret/vs-body-pure-seduction-shimmer-lotion.avif',
      'feminino/victorias-secret/vs-body-pure-seduction-shimmer-mist.avif',
    ],
    description: 'Fragrância sensual e frutada com ameixa vermelha e freesia — o perfume da sedução pura. Disponível em Loção, Shimmer Loção e Shimmer Mist. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 211, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Velvet Petals',
    images: [
      'feminino/victorias-secret/vs-body-velvet-petals-lotion.avif',
      'feminino/victorias-secret/vs-body-velvet-petals-shimmer-lotion.avif',
      'feminino/victorias-secret/vs-body-velvet-petals-shimmer-mist.avif',
    ],
    description: 'Fragrância floral aveludada com pétalas de rosas sobre base quente de sândalo e almíscar — feminilidade em sua expressão mais pura. Disponível em Loção, Shimmer Loção e Shimmer Mist. R$129,90 a unidade — PROMOÇÃO: 3 por R$189,90.',
  },

  /* ══════════════════════════════════════════════════
     VICTORIA'S SECRET — CALCINHAS
  ══════════════════════════════════════════════════ */
  {
    id: 220, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 84.90,
    name: 'Cotton Exploded Logo Boyshort',
    images: [
      'feminino/victorias-secret/vs-calcinha-cotton-exploded-1.avif',
      'feminino/victorias-secret/vs-calcinha-cotton-exploded-2.avif',
    ],
    description: 'Calcinha boyshort em algodão com logo explodido em relevo — conforto máximo e cobertura total com o estilo assinado VS. R$84,90 cada — PROMOÇÃO: 5 por R$209,90 (mix de modelos liberado).',
  },
  {
    id: 221, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 99.90,
    name: 'Cotton SoSoft Modal Boyshort',
    images: [
      'feminino/victorias-secret/vs-calcinha-sosoft-modal-1.avif',
      'feminino/victorias-secret/vs-calcinha-sosoft-modal-2.avif',
    ],
    description: 'Calcinha boyshort em modal ultra-fino SoSoft™ — segunda pele incrivelmente macia com logo VS em relevo. R$99,90 cada — PROMOÇÃO: 5 por R$209,90 (mix de modelos liberado).',
  },
  {
    id: 222, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 129.90,
    name: 'Dream Angels Lace Brazilian',
    images: [
      'feminino/victorias-secret/vs-calcinha-dream-lace-660-1.avif',
      'feminino/victorias-secret/vs-calcinha-dream-lace-660-2.avif',
      'feminino/victorias-secret/vs-calcinha-dream-lace-937-1.avif',
      'feminino/victorias-secret/vs-calcinha-dream-lace-937-2.avif',
    ],
    description: 'Calcinha brasileira Dream Angels em renda delicada — silhueta sensual com cobertura perfeita. Disponível em diferentes cores. R$129,90 cada — PROMOÇÃO: 3 por R$259,90 (mix de modelos liberado).',
  },
  {
    id: 223, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 129.90,
    name: 'Dream Angels Lace-Trim Brazilian',
    images: [
      'feminino/victorias-secret/vs-calcinha-dream-trim-22-1.avif',
      'feminino/victorias-secret/vs-calcinha-dream-trim-22-2.avif',
      'feminino/victorias-secret/vs-calcinha-dream-trim-25-1.avif',
      'feminino/victorias-secret/vs-calcinha-dream-trim-25-2.avif',
    ],
    description: 'Calcinha brasileira Dream Angels com acabamento em renda — tecido leve com detalhe de renda na borda que eleva o look do dia a dia. Disponível em diferentes cores. R$129,90 cada — PROMOÇÃO: 3 por R$259,90.',
  },
  {
    id: 224, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 129.90,
    name: 'Dream Angels Sweet Melody Satin Flutter Brazilian',
    images: [
      'feminino/victorias-secret/vs-calcinha-dream-sweet-1.avif',
      'feminino/victorias-secret/vs-calcinha-dream-sweet-2.avif',
    ],
    description: 'Calcinha brasileira Dream Angels em cetim com motivo Sweet Melody e acabamento flutter — romanticismo e leveza num único modelo. R$129,90 cada — PROMOÇÃO: 3 por R$259,90 (mix de modelos liberado).',
  },
  {
    id: 225, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 169.90,
    name: 'Shine Strap Brazilian Panty',
    images: [
      'feminino/victorias-secret/vs-calcinha-shine-strap-1.avif',
      'feminino/victorias-secret/vs-calcinha-shine-strap-2.avif',
    ],
    description: 'Calcinha brasileira com alças brilhantes Shine Strap — detalhe metálico sofisticado que transforma o básico em peça de lingerie premium.',
  },
  {
    id: 226, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 169.90,
    name: 'Very Sexy Shine Strap Brazilian',
    images: [
      'feminino/victorias-secret/vs-calcinha-very-sexy-shine-1.avif',
      'feminino/victorias-secret/vs-calcinha-very-sexy-shine-2.avif',
    ],
    description: 'Calcinha brasileira Very Sexy com alças metalizadas Shine Strap — corte sedutor com o acabamento brilhante que é marca da linha Very Sexy.',
  },
  {
    id: 227, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 169.90,
    name: 'Very Sexy Scattered Shine Strap Crotchless Brazilian',
    images: [
      'feminino/victorias-secret/vs-calcinha-very-sexy-scattered-1.avif',
      'feminino/victorias-secret/vs-calcinha-very-sexy-scattered-2.avif',
    ],
    description: 'Calcinha brasileira crotchless Very Sexy com alças brilhantes espalhadas — ousadia máxima com o refinamento que só a Victoria\'s Secret entrega.',
  },
  {
    id: 228, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['calcinha'],
    price: 169.90,
    name: 'Very Sexy Shine Strap Lace Crotchless Brazilian',
    images: [
      'feminino/victorias-secret/vs-calcinha-very-sexy-lace-crotchless-1.avif',
      'feminino/victorias-secret/vs-calcinha-very-sexy-lace-crotchless-2.avif',
    ],
    description: 'Calcinha brasileira crotchless Very Sexy em renda com alças Shine Strap — a combinação perfeita entre a delicadeza da renda e o brilho sedutor da linha Very Sexy.',
  },

  /* ══════════════════════════════════════════════════
     VICTORIA'S SECRET — PIJAMAS & SLIP
  ══════════════════════════════════════════════════ */
  {
    id: 230, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['pijama'],
    price: 579.90,
    name: 'Signature Satin Pajama Long Set Marzipan Leopard',
    images: [
      'feminino/victorias-secret/vs-pijama-satin-leopard-1.avif',
      'feminino/victorias-secret/vs-pijama-satin-leopard-2.avif',
    ],
    description: 'Conjunto de pijama longo Signature Satin em estampa Marzipan Leopard — cetim macio e brilhante com botões perolados e calça de perna longa. Disponível em Short, Regular e Long.',
  },
  {
    id: 231, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['pijama'],
    price: 579.90,
    name: 'Signature Satin Pajama Long Set',
    images: [
      'feminino/victorias-secret/vs-pijama-satin-longo-1.avif',
      'feminino/victorias-secret/vs-pijama-satin-longo-2.avif',
      'feminino/victorias-secret/vs-pijama-satin-longo-gola-preta.avif',
      'feminino/victorias-secret/vs-pijama-satin-longo-p.avif',
    ],
    description: 'Conjunto de pijama longo Signature Satin — cetim de alta qualidade com botões perolados, gola clássica e calça de perna reta. Atemporalmente elegante para as noites mais sofisticadas.',
  },
  {
    id: 232, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['pijama'],
    price: 459.90,
    name: 'SoSoft Modal Short Pajama Set',
    images: [
      'feminino/victorias-secret/vs-pijama-sosoft-805-1.avif',
      'feminino/victorias-secret/vs-pijama-sosoft-805-2.avif',
      'feminino/victorias-secret/vs-pijama-sosoft-240-1.avif',
      'feminino/victorias-secret/vs-pijama-sosoft-240-2.avif',
    ],
    description: 'Conjunto de pijama curto SoSoft™ em modal ultra-fino — tecido incrivelmente macio que parece uma segunda pele. Blusa de manga curta e short coordenado. Disponível em diferentes cores.',
  },
  {
    id: 233, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['pijama'],
    price: 389.90,
    name: 'Heritage Stripe Satin Mini Slip',
    images: [
      'feminino/victorias-secret/vs-slip-heritage-1.avif',
      'feminino/victorias-secret/vs-slip-heritage-2.avif',
    ],
    description: 'Mini slip Heritage Stripe em cetim com listras icônicas da Victoria\'s Secret — feminilidade e elegância em cada detalhe. Perfeito para dentro ou fora do quarto.',
  },

  /* ══════════════════════════════════════════════════
     VICTORIA'S SECRET — BOLSA
  ══════════════════════════════════════════════════ */
  {
    id: 234, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['acessorio'],
    price: 389.90,
    name: 'Mini Crossbody Tote Bag',
    images: [
      'feminino/victorias-secret/vs-bolsa-mini-crossbody-1.avif',
      'feminino/victorias-secret/vs-bolsa-mini-crossbody-2.avif',
    ],
    description: 'Mini bolsa crossbody Victoria\'s Secret com logotipo assinado — compacta, elegante e com tira ajustável. O acessório perfeito para quem leva o estilo VS a qualquer lugar.',
  },

  /* ══════════════════════════════════════════════════
     GUESS — BOLSAS
  ══════════════════════════════════════════════════ */
  {
    id: 240, brand: 'Guess', gender: 'feminino',
    tags: ['acessorio'],
    price: 379.90, originalPrice: 520.00,
    name: 'Atabey Quilted Convertible Crossbody Preta',
    images: [
      'feminino/guess/guess-atabey-1.avif',
      'feminino/guess/guess-atabey-2.avif',
    ],
    description: 'Bolsa crossbody Guess Atabey em matelassê preto com alça removível — converte de clutch a crossbody em segundos. Ferragens douradas e logo G em relevo.',
  },
  {
    id: 241, brand: 'Guess', gender: 'feminino',
    tags: ['acessorio'],
    price: 389.90, originalPrice: 540.00,
    name: 'Carrie Quattro G Shoulder Bag',
    images: [
      'feminino/guess/guess-carrie-1.avif',
    ],
    description: 'Bolsa de ombro Guess Carrie com o padrão Quattro G assinado — couro sintético premium com ferragens douradas e espaço interno generoso.',
  },
  {
    id: 242, brand: 'Guess', gender: 'feminino',
    tags: ['acessorio'],
    price: 519.90, originalPrice: 620.00,
    name: 'Dita Multi Comp Debossed Peony Satchel',
    images: [
      'feminino/guess/guess-dita-1.avif',
    ],
    description: 'Satchel Guess Dita com relevo floral Peony e múltiplos compartimentos — estrutura sofisticada com o design fashion que a Guess domina.',
  },
  {
    id: 243, brand: 'Guess', gender: 'feminino',
    tags: ['acessorio'],
    price: 489.90, originalPrice: 580.00,
    name: 'Evie Hobo Bag Preta',
    images: [
      'feminino/guess/guess-evie-1.avif',
    ],
    description: 'Hobo bag Guess Evie em preto com alça de ombro — silhueta meia-lua com fecho de pressão e interior forrado. O casual elegante da Guess.',
  },
  {
    id: 244, brand: 'Guess', gender: 'feminino',
    tags: ['acessorio'],
    price: 379.90, originalPrice: 520.00,
    name: 'Isemay Quilted Shoulder Bag',
    images: [
      'feminino/guess/guess-isemay-1.avif',
    ],
    description: 'Bolsa de ombro Guess Isemay em matelassê — capitonê delicado com ferragens douradas e alça ajustável. Compacta e elegante para o dia a dia.',
  },
  {
    id: 245, brand: 'Guess', gender: 'feminino',
    tags: ['acessorio'],
    price: 539.90, originalPrice: 640.00,
    name: 'Semay Quilted Shopper Preta',
    images: [
      'feminino/guess/guess-semay-shopper-1.avif',
    ],
    description: 'Shopper Guess Semay em matelassê preto — ampla, estruturada e com acabamento premium. A bolsa que eleva qualquer look com capacidade para o dia inteiro.',
  },

  /* ══════════════════════════════════════════════════
     MICHAEL KORS — BOLSAS
  ══════════════════════════════════════════════════ */
  {
    id: 250, brand: 'Michael Kors', gender: 'feminino',
    tags: ['acessorio'],
    price: 579.90, originalPrice: 1832.00,
    name: 'Mercer Medium Logo Accordion Crossbody Powder Blush',
    images: [
      'feminino/michael-kors/mk-mercer-1.jpeg',
    ],
    description: 'Crossbody Michael Kors Mercer em couro com logo assinado na cor Powder Blush Multicolor — compartimentos em sanfona, alça ajustável e ferragens douradas. Peça icônica com desconto exclusivo.',
  },
  {
    id: 251, brand: 'Michael Kors', gender: 'feminino',
    tags: ['acessorio'],
    price: 579.90, originalPrice: 2112.00,
    name: 'Soho Small Convertible Shoulder Bag Powder Blush',
    images: [
      'feminino/michael-kors/mk-soho-1.jpeg',
      'feminino/michael-kors/mk-soho-2.jpeg',
    ],
    description: 'Bolsa transversal Michael Kors Soho Small em couro suave Powder Blush — converte de shoulder a crossbody. Fecho magnético, interior forrado e hardware dourado clássico.',
  },
  {
    id: 252, brand: 'Michael Kors', gender: 'feminino',
    tags: ['acessorio'],
    price: 719.90, originalPrice: 2232.00,
    name: 'Voyager Large Color-Block Tote Powder Blush',
    images: [
      'feminino/michael-kors/mk-voyager-1.jpeg',
    ],
    description: 'Tote Michael Kors Voyager Large em couro bicolor Powder Blush Multicolor — espaçosa, estruturada e com logo Signature. A bolsa definitiva para quem vive com estilo e praticidade.',
  },

  /* ══════════════════════════════════════════════════
     CHRISTIAN DIOR — BELEZA
  ══════════════════════════════════════════════════ */
  {
    id: 253, brand: 'Christian Dior', gender: 'feminino',
    tags: ['acessorio'],
    price: 316.80,
    name: 'Hypnotic Poison Roller-Pearl',
    images: ['feminino/dior/dior-hypnotic-poison-roller-pearl.jpg'],
    description: 'Perfume Dior Hypnotic Poison em roller-pearl — fragrância sensual de amêndoa e baunilha com aplicador esférico para pontos de pulso. Ícone da maison em formato de bolso.',
  },
  {
    id: 254, brand: 'Christian Dior', gender: 'feminino',
    tags: ['acessorio'],
    price: 259.20,
    name: 'Lip Glow Oil Hydrating High-Shine Gloss Rosa',
    images: ['feminino/dior/dior-lip-glow-oil-1.jpg'],
    description: 'Óleo labial Dior Lip Glow Oil de alto brilho em Rosa — fórmula hidratante que realça a cor natural dos lábios com efeito glossy rosado e luminoso. Ícone de beleza da maison.',
  },
  {
    id: 285, brand: 'Christian Dior', gender: 'feminino',
    tags: ['acessorio'],
    price: 259.20,
    name: 'Lip Glow Oil Hydrating High-Shine Gloss Mocha Brilhante',
    images: ['feminino/dior/dior-lip-glow-oil-2.jpg'],
    description: 'Óleo labial Dior Lip Glow Oil em Mocha Brilhante — acabamento shimmer com brilho intenso e toque nudes quente. Hidratação luxuosa com a sofisticação da maison parisiense.',
  },
  {
    id: 255, brand: 'Christian Dior', gender: 'feminino',
    tags: ['acessorio'],
    price: 264.00,
    name: 'Rosy Glow Powder Blush Rosa',
    images: ['feminino/dior/dior-rosy-glow-blush-pink.jpg'],
    description: 'Blush Dior Rosy Glow em pó na tonalidade Rosa — tecnologia que reage à temperatura da pele e realça o frescor natural. Acabamento luminoso duradouro da maison.',
  },
  {
    id: 286, brand: 'Christian Dior', gender: 'feminino',
    tags: ['acessorio'],
    price: 264.00,
    name: 'Rosy Glow Powder Blush Toffee',
    images: ['feminino/dior/dior-rosy-glow-blush-toffee.jpg'],
    description: 'Blush Dior Rosy Glow em pó na tonalidade Toffee — dourado quente que realça o frescor natural da pele com acabamento luminoso sofisticado. Tecnologia exclusiva Dior.',
  },

  /* ══════════════════════════════════════════════════
     VICTORIA'S SECRET — BOLSAS
  ══════════════════════════════════════════════════ */
  {
    id: 256, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['acessorio'],
    price: 192.00, originalPrice: 384.00,
    name: 'Curve Mini Top-Handle Crossbody Bag Preta',
    images: ['feminino/victorias-secret/vs-curve-mini-tophandle-black.jpg'],
    description: 'Mini bolsa Victoria\'s Secret Curve com alça de mão e transversal em preto — estrutura compacta com fecho metálico dourado, perfeita para o dia a dia com estilo.',
  },
  {
    id: 257, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['acessorio'],
    price: 225.55, originalPrice: 383.76,
    name: 'Curve Mini Top-Handle Crossbody Bag Winter Wine',
    images: ['feminino/victorias-secret/vs-curve-mini-tophandle-winter-wine-1.jpg', 'feminino/victorias-secret/vs-curve-mini-tophandle-winter-wine-2.jpg'],
    description: 'Mini bolsa Victoria\'s Secret Curve em nylon Winter Wine — cor vinho exclusiva de inverno com alça dupla e acabamento metálico. Compacta, elegante e com ótimo desconto.',
  },
  {
    id: 258, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['acessorio'],
    price: 225.55, originalPrice: 455.76,
    name: 'Hat Box Crossbody Bag',
    images: ['feminino/victorias-secret/vs-hat-box-crossbody-1.jpg', 'feminino/victorias-secret/vs-hat-box-crossbody-2.jpg'],
    description: 'Bolsa crossbody Victoria\'s Secret Hat Box de formato circular — design icônico com alça ajustável e fecho de pressão. Silhueta retrô chic com preço de liquidação.',
  },
  {
    id: 259, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['acessorio'],
    price: 191.95, originalPrice: 455.76,
    name: 'Mini Bucket Crossbody Bag Red Lacquer',
    images: ['feminino/victorias-secret/vs-mini-bucket-crossbody-red-1.jpg', 'feminino/victorias-secret/vs-mini-bucket-crossbody-red-2.jpg'],
    description: 'Mini bucket bag Victoria\'s Secret em Red Lacquer — vermelho lacado vibrante com alça de corrente e fecho de cordão. O acessório statement da temporada com desconto imperdível.',
  },
  {
    id: 260, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['acessorio'],
    price: 139.20, originalPrice: 187.20,
    name: 'Shoulder Chain Strap Gold',
    images: ['feminino/victorias-secret/vs-shoulder-chain-strap-gold.jpg'],
    description: 'Alça de corrente dourada Victoria\'s Secret — intercambiável com diversas bolsas da marca para um toque glam instantâneo. Acabamento gold de alta qualidade.',
  },

  /* ══════════════════════════════════════════════════
     MICHAEL KORS — BOLSAS (CONTINUAÇÃO)
  ══════════════════════════════════════════════════ */
  {
    id: 261, brand: 'Michael Kors', gender: 'feminino',
    tags: ['acessorio'],
    price: 478.08, originalPrice: 2390.40,
    name: 'Avril Small Pebbled Leather Satchel Powder Blush',
    images: [
      'feminino/michael-kors/mk-avril-satchel-powder-blush-1.jpg',
      'feminino/michael-kors/mk-avril-satchel-powder-blush-2.jpg',
      'feminino/michael-kors/mk-avril-satchel-powder-blush-3.jpg',
    ],
    description: 'Satchel Michael Kors Outlet Avril em couro pebbled Powder Blush — estrutura compacta com alça de mão e ombro, múltiplos compartimentos e ferragens douradas. Desconto extraordinário de outlet.',
  },
  {
    id: 262, brand: 'Michael Kors', gender: 'feminino',
    tags: ['acessorio'],
    price: 417.55, originalPrice: 1910.40,
    name: 'Camille Large Satchel',
    images: ['feminino/michael-kors/mk-camille-large-satchel-1.jpg', 'feminino/michael-kors/mk-camille-large-satchel-2.jpg'],
    description: 'Satchel Michael Kors Camille Large — estrutura espaçosa em couro macio com alça de ombro ajustável e ferragens premium. A bolsa de trabalho com desconto exclusivo de outlet.',
  },

  /* ══════════════════════════════════════════════════
     CAROLINA HERRERA — FRAGRÂNCIAS
  ══════════════════════════════════════════════════ */
  {
    id: 263, brand: 'Carolina Herrera', gender: 'feminino',
    tags: ['fragrance'],
    price: 600.00,
    name: 'Good Girl Eau de Parfum with Jasmine',
    images: ['feminino/carolina-herrera/ch-good-girl.jpg'],
    description: 'Eau de Parfum Carolina Herrera Good Girl com Jasmin — fragrância feminina de contraste entre flores brancas sensuais e notas de cacau. No icônico frasco stiletto preto dourado.',
  },

  /* ══════════════════════════════════════════════════
     PRADA — FRAGRÂNCIAS
  ══════════════════════════════════════════════════ */
  {
    id: 264, brand: 'Prada', gender: 'feminino',
    tags: ['fragrance'],
    price: 609.60,
    name: 'Paradoxe Eau de Parfum',
    images: ['feminino/prada/prada-paradoxe.jpg'],
    description: 'Eau de Parfum Prada Paradoxe com White Musk & Amber — fragrância intensa e contemporânea que celebra a mulher multifacetada. Notas de neroli, musgo branco e âmbar seco.',
  },

  /* ══════════════════════════════════════════════════
     VERSACE — FRAGRÂNCIAS
  ══════════════════════════════════════════════════ */
  {
    id: 265, brand: 'Versace', gender: 'feminino',
    tags: ['fragrance'],
    price: 124.80, originalPrice: 192.00,
    name: 'Crystal Duo Mini Set',
    images: ['feminino/versace/versace-crystal-duo.jpg'],
    description: 'Set duo Versace Crystal com dois miniatures exclusivos — as fragrâncias Versace Crystal em formato presenteável. Edição limitada com desconto especial.',
  },

  /* ══════════════════════════════════════════════════
     YSL — BELEZA E FRAGRÂNCIAS
  ══════════════════════════════════════════════════ */
  {
    id: 266, brand: 'YSL', gender: 'feminino',
    tags: ['fragrance'],
    price: 216.00, originalPrice: 432.00,
    name: 'Mini Libre Duo Gift Set',
    images: ['feminino/ysl/ysl-mini-libre-duo.jpg'],
    description: 'Gift set duo YSL Libre em tamanho travel — dois miniatures do icônico perfume feminino com lavanda e laranja blossom. Presente luxuoso com desconto de 50%.',
  },
  {
    id: 267, brand: 'YSL', gender: 'feminino',
    tags: ['acessorio'],
    price: 259.20,
    name: 'Loveshine Plumping Lip Oil Gloss California Sunshine',
    images: ['feminino/ysl/ysl-loveshine-lip-oil-california-sunshine.jpg'],
    description: 'Lip oil YSL Loveshine com ácido hialurônico em California Sunshine — tom laranja vibrante e luminoso que volumiza e hidrata os lábios com alto brilho de alta costura.',
  },
  {
    id: 268, brand: 'YSL', gender: 'feminino',
    tags: ['acessorio'],
    price: 259.20,
    name: 'Loveshine Plumping Lip Oil Gloss Lucky Moonstone',
    images: ['feminino/ysl/ysl-loveshine-lip-oil-lucky-moonstone.jpg'],
    description: 'Lip oil YSL Loveshine com ácido hialurônico em Lucky Moonstone — pérola rosada translúcida que ilumina e volumiza os lábios com o brilho iridescente da maison.',
  },

  /* ══════════════════════════════════════════════════
     KÉRASTASE — CUIDADOS CAPILARES
  ══════════════════════════════════════════════════ */
  {
    id: 269, brand: 'Kérastase', gender: 'feminino',
    tags: ['acessorio'],
    price: 355.20,
    name: 'Genesis Discovery Set',
    images: ['feminino/kerastase/kerastase-genesis-discovery.jpg'],
    description: 'Kit Kérastase Genesis Discovery contra a queda capilar — conjunto de produtos premium para fortalecer e revitalizar cabelos fragilizados. Rotina completa da maison francesa.',
  },
  {
    id: 270, brand: 'Kérastase', gender: 'feminino',
    tags: ['acessorio'],
    price: 220.80,
    name: 'Mini Elixir Ultime Hydrating Hair Oil',
    images: ['feminino/kerastase/kerastase-mini-elixir.jpg'],
    description: 'Óleo capilar Kérastase Elixir Ultime mini — blend de óleos preciosos que nutre e adiciona brilho intenso sem pesar. Formato travel ideal para manutenção diária.',
  },

  /* ══════════════════════════════════════════════════
     THE ORDINARY — SKINCARE
  ══════════════════════════════════════════════════ */
  {
    id: 271, brand: 'The Ordinary', gender: 'feminino',
    tags: ['acessorio'],
    price: 100.80,
    name: 'The Acne Set',
    images: ['feminino/the-ordinary/the-ordinary-acne-set.jpg'],
    description: 'Kit The Ordinary para acne — conjunto de ativos clínicos selecionados para tratar e prevenir imperfeições: niacinamida, ácido salicílico e zinco. Skincare eficaz e acessível.',
  },

  /* ══════════════════════════════════════════════════
     KATE SPADE — BOLSAS
  ══════════════════════════════════════════════════ */
  {
    id: 272, brand: 'Kate Spade', gender: 'feminino',
    tags: ['acessorio'],
    price: 414.72, originalPrice: 696.00,
    name: 'Noelle Saffiano Leather Satchel Verde Claro',
    images: ['feminino/kate-spade/kate-spade-noelle-saffiano-1.jpg', 'feminino/kate-spade/kate-spade-noelle-saffiano-2.jpg'],
    description: 'Satchel Kate Spade Noelle em couro saffiano verde claro — estrutura elegante com alça dupla, acabamento metálico dourado e logo spade embossed. O charme Nova-iorquino da maison.',
  },

  /* ══════════════════════════════════════════════════
     LULULEMON — ACESSÓRIOS
  ══════════════════════════════════════════════════ */
  {
    id: 273, brand: 'Lululemon', gender: 'feminino',
    tags: ['acessorio'],
    price: 163.20,
    name: 'City Essentials Nano Shoulder Bag',
    images: ['feminino/lululemon/lululemon-city-essentials-nano-black.jpg', 'feminino/lululemon/lululemon-city-essentials-nano-ivory.jpg'],
    description: 'Mini bolsa de ombro Lululemon City Essentials Nano — compacta e versátil para o dia a dia ativo. Disponível em Black/Silver e Light Ivory/Gold com alça ajustável.',
  },

  /* ══════════════════════════════════════════════════
     FENTY BEAUTY — BELEZA
  ══════════════════════════════════════════════════ */
  {
    id: 274, brand: 'Fenty Beauty', gender: 'feminino',
    tags: ['acessorio'],
    price: 91.20, originalPrice: 182.40,
    name: 'Bright Fix Eye Brightener Concealer',
    images: [
      'feminino/fenty-beauty/fenty-bright-fix-golden-ivory.jpg',
      'feminino/fenty-beauty/fenty-bright-fix-honey.jpg',
      'feminino/fenty-beauty/fenty-bright-fix-toffee.jpg',
    ],
    description: 'Corretivo iluminador Fenty Beauty Bright Fix by Rihanna — fórmula de longa duração que ilumina e cobre imperfeições. Disponível nos tons Golden Ivory, Honey e Toffee.',
  },
  {
    id: 275, brand: 'Fenty Beauty', gender: 'feminino',
    tags: ['acessorio'],
    price: 86.40, originalPrice: 172.80,
    name: 'Gloss Bomb Stix High-Shine Gloss Stick Vermelho',
    images: ['feminino/fenty-beauty/fenty-gloss-bomb-stix-red.jpg'],
    description: 'Gloss labial sólido Fenty Beauty Gloss Bomb Stix em vermelho — fórmula em stick de aplicação prática com brilho intenso e hidratação. O hit de beleza de Rihanna.',
  },

  /* ══════════════════════════════════════════════════
     GIVENCHY — BELEZA
  ══════════════════════════════════════════════════ */
  {
    id: 276, brand: 'Givenchy', gender: 'feminino',
    tags: ['acessorio'],
    price: 216.00, originalPrice: 288.00,
    name: 'Le Rouge Sheer Velvet Matte Lipstick Rouge Graine',
    images: ['feminino/givenchy/givenchy-le-rouge-sheer-velvet-rouge-graine.jpg', 'feminino/givenchy/givenchy-le-rouge-sheer-velvet.jpg'],
    description: 'Batom Givenchy Le Rouge Sheer Velvet Matte em Rouge Graine — textura aveludada levíssima com cobertura matte e alta pigmentação. A elegância parisiense em vermelho intenso.',
  },
  {
    id: 277, brand: 'Givenchy', gender: 'feminino',
    tags: ['acessorio'],
    price: 216.00, originalPrice: 288.00,
    name: 'Le Rouge Sheer Velvet Matte Lipstick Beige Sable',
    images: ['feminino/givenchy/givenchy-le-rouge-sheer-velvet-beige-sable.jpg'],
    description: 'Batom Givenchy Le Rouge Sheer Velvet Matte em Beige Sablé — nude sofisticado com textura velvet de longa duração. O beige perfeito da maison parisiense para todos os tons de pele.',
  },

  /* ══════════════════════════════════════════════════
     VALENTINO — FRAGRÂNCIAS (MASCULINO)
  ══════════════════════════════════════════════════ */
  {
    id: 278, brand: 'Valentino', gender: 'masculino',
    tags: ['fragrance'],
    price: 220.80,
    name: 'Born In Roma Uomo Discovery Duo',
    images: ['masculino/valentino/valentino-born-in-roma-uomo.jpg'],
    description: 'Discovery duo Valentino Born In Roma Uomo — dois miniatures da fragrância masculina com notas de couro, madeira e especiarias. O espírito rebelde e romântico de Roma.',
  },

  /* ══════════════════════════════════════════════════
     JORDAN — MODA ESPORTIVA (MASCULINO)
  ══════════════════════════════════════════════════ */
  {
    id: 279, brand: 'Jordan', gender: 'masculino',
    tags: ['camiseta'],
    price: 648.00,
    name: 'Brasil 2026 Away Jersey Old Royal',
    images: ['masculino/jordan/jordan-brasil-away-jersey.jpg'],
    description: 'Camisa Jordan × Seleção Brasileira Away 2026 em Old Royal e preto — edição especial Copa do Mundo com tecnologia Dri-FIT e detalhes em dourado. Para os apaixonados pelo Brasil.',
  },

  /* ══════════════════════════════════════════════════
     NIKE — TÊNIS (MASCULINO)
  ══════════════════════════════════════════════════ */
  {
    id: 280, brand: 'Nike', gender: 'masculino',
    tags: ['tenis'],
    price: 1022.35,
    name: 'Brazil National Team 2026 Shox R4',
    images: ['masculino/nike/nike-brazil-shox-r4.jpg'],
    description: 'Tênis Nike Shox R4 edição Seleção Brasileira 2026 em preto — amortecimento Shox com colunas de mola e visual exclusivo Copa do Mundo. Estilo e performance com orgulho nacional.',
  },

  /* ══════════════════════════════════════════════════
     DYSON — ELETRODOMÉSTICOS
  ══════════════════════════════════════════════════ */
  {
    id: 281, brand: 'Dyson', gender: 'feminino',
    tags: ['acessorio'],
    price: 2979.90,
    name: 'Airstrait™ Dryer & Straightener Prussian Blue',
    images: ['feminino/dyson/dyson-airstrait.jpg'],
    description: 'Secador e chapinha Dyson Airstrait™ em Prussian Blue/Copper — seca e alisa simultaneamente sem calor extremo. Tecnologia Dyson para cabelos lisos e sedosos com proteção máxima.',
  },
  {
    id: 282, brand: 'Dyson', gender: 'feminino',
    tags: ['acessorio'],
    price: 3275.20,
    name: 'Airwrap i.d.™ Multi-Styler Prussian Blue',
    images: ['feminino/dyson/dyson-airwrap.jpg'],
    description: 'Multi-styler Dyson Airwrap i.d.™ em Prussian Blue/Rich Copper — molda, ondula e alisa com fluxo de ar Coanda sem calor extremo. O aparelho mais desejado de cabelo do mundo.',
  },

  /* ══════════════════════════════════════════════════
     APPLE — TECNOLOGIA
  ══════════════════════════════════════════════════ */
  {
    id: 283, brand: 'Apple', gender: 'feminino',
    tags: ['acessorio'],
    price: 5275.20,
    name: 'iPhone 16 Pro Max 256GB Desert Titanium (Seminovo com Caixa)',
    images: ['feminino/apple/iphone-16-pro-max.jpg'],
    description: 'Apple iPhone 16 Pro Max 256GB em Desert Titanium desbloqueado — usado em condição excelente. Chip A18 Pro, câmera 48MP ProRAW, tela Super Retina XDR de 6,9".',
  },
  {
    id: 284, brand: 'Apple', gender: 'feminino',
    tags: ['acessorio'],
    price: 7789.90,
    name: 'iPhone 17 Pro Max 256GB Cosmic Orange (Na Caixa)',
    images: ['feminino/apple/iphone-17-pro-max.jpg'],
    description: 'Apple iPhone 17 Pro Max 256GB Cosmic Orange novo e desbloqueado — o topo de linha Apple com câmera profissional de nova geração, chip A19 Pro e design em titânio cor exclusiva.',
  },
  {
    id: 287, brand: 'Apple', gender: 'masculino',
    tags: ['acessorio'],
    price: 5275.20,
    name: 'iPhone 16 Pro Max 256GB Desert Titanium (Recondicionado)',
    images: ['feminino/apple/iphone-16-pro-max.jpg'],
    description: 'Apple iPhone 16 Pro Max 256GB em Desert Titanium desbloqueado — recondicionado em condição excelente. Chip A18 Pro, câmera 48MP ProRAW, tela Super Retina XDR de 6,9".',
  },
  {
    id: 288, brand: 'Apple', gender: 'masculino',
    tags: ['acessorio'],
    price: 7789.90,
    name: 'iPhone 17 Pro Max 256GB Cosmic Orange',
    images: ['feminino/apple/iphone-17-pro-max.jpg'],
    description: 'Apple iPhone 17 Pro Max 256GB Cosmic Orange desbloqueado — o topo de linha Apple com câmera profissional de nova geração, chip A19 Pro e design em titânio cor exclusiva.',
  },

  /* ══════════════════════════════════════════════════
     VICTORIA'S SECRET — BODY SPLASH (MIST)
  ══════════════════════════════════════════════════ */
  {
    id: 289, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Bare Vanilla Fragrance Mist',
    images: ['feminino/victorias-secret/vs-body-bare-vanilla-mist.jpg'],
    description: 'Body splash Victoria\'s Secret Bare Vanilla — fragrância quente de baunilha pura em formato mist de longa duração. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 290, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Coconut Passion Fragrance Mist',
    images: ['feminino/victorias-secret/vs-body-coconut-passion-mist.jpg'],
    description: 'Body splash Victoria\'s Secret Coconut Passion — aroma tropical de coco tostado e sândalo em mist refrescante. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 291, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Gelato Oasis Fragrance Mist',
    images: ['feminino/victorias-secret/vs-body-gelato-oasis-mist.jpg'],
    description: 'Body splash Victoria\'s Secret Gelato Oasis — fragrância adocicada e frutada inspirada em oásis de verão, em spray refrescante. R$129,90 — PROMOÇÃO: 3 por R$189,90.',
  },
  {
    id: 292, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Isla Hibiscus Fragrance Mist',
    images: ['feminino/victorias-secret/vs-body-isla-hibiscus-mist.jpg'],
    description: 'Body splash Victoria\'s Secret Isla Hibiscus — floral tropical com hibisco vibrante e água de coco em mist leve e duradouro. R$129,90 — PROMOÇÃO: 3 por R$189,90.',
  },
  {
    id: 293, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Love Spell Fragrance Mist',
    images: ['feminino/victorias-secret/vs-body-love-spell-mist.jpg'],
    description: 'Body splash Victoria\'s Secret Love Spell — romântico floral de pêssego e jasmim em spray irresistível. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 294, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Midnight Blooms Fragrance Mist',
    images: ['feminino/victorias-secret/vs-body-midnight-blooms-mist.jpg'],
    description: 'Body splash Victoria\'s Secret Midnight Blooms — flores noturnas misteriosas sobre base almiscarada quente em mist de longa duração. R$129,90 — PROMOÇÃO: 3 por R$189,90.',
  },
  {
    id: 295, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Pina Tropicale Fragrance Mist',
    images: ['feminino/victorias-secret/vs-body-pina-tropicale-mist.jpg'],
    description: 'Body splash Victoria\'s Secret Piña Tropicale — abacaxi fresco e tropical em spray vibrante e duradouro. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },
  {
    id: 296, brand: "Victoria's Secret", gender: 'feminino',
    tags: ['fragrance'],
    price: 129.90,
    name: 'Body Splash Pure Seduction Fragrance Mist',
    images: ['feminino/victorias-secret/vs-body-pure-seduction-mist.jpg'],
    description: 'Body splash Victoria\'s Secret Pure Seduction — ameixa vermelha e fresia sedutora em mist leve e irresistível. R$129,90 a unidade — PROMOÇÃO: 3 quaisquer por R$189,90.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE MONOGRAM — AZUL
  ══════════════════════════════════════════════════ */

  {
    id: 298, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom', 'sport'],
    price: 1080.90,
    name: 'Jaqueta Monogram Lacoste Azul',
    images: ['masculino/lacoste/lacoste-monogram-jaqueta-azul.jpg'],
    description: 'Jaqueta Lacoste Monogram em azul — corte track jacket com padrão monograma jacquard, zíper metálico e silhueta atlética de alto padrão.',
  },
  {
    id: 299, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca', 'sport'],
    price: 1032.90,
    name: 'Calça Monogram Lacoste Azul',
    images: ['masculino/lacoste/lacoste-monogram-calca-azul.jpg'],
    description: 'Calça Lacoste Monogram em azul — tecido técnico com padrão monograma all-over, elástico ajustável e corte moderno para uso esportivo e casual.',
  },
  {
    id: 300, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 2889.90, originalPrice: 3952.00,
    name: 'Conjunto Jaqueta + Polo + Calça Monogram Lacoste Azul',
    images: [
      'masculino/lacoste/lacoste-monogram-jaqueta-azul.jpg',
      'masculino/lacoste/lacoste-monogram-polo-azul.jpg',
      'masculino/lacoste/lacoste-monogram-calca-azul.jpg',
    ],
    description: 'Conjunto completo Lacoste Monogram Azul — polo, jaqueta track e calça coordenadas em padrão monograma all-over. Três peças com identidade visual única, artesanato Lacoste e desconto exclusivo na compra do conjunto.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE MONOGRAM — BEGE
  ══════════════════════════════════════════════════ */
  {
    id: 301, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 839.90, originalPrice: 1019.90,
    name: 'Polo Monogram Lacoste Bege',
    images: ['masculino/lacoste/lacoste-monogram-polo-bege.jpg'],
    description: 'Polo Lacoste Monogram em bege — malha premium com padrão monograma all-over em tons neutros e sofisticados, acabamento impecável da Maison francesa.',
  },
  {
    id: 302, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom', 'sport'],
    price: 1079.90,
    name: 'Jaqueta Monogram Lacoste Bege',
    images: ['masculino/lacoste/lacoste-monogram-jaqueta-bege.jpg'],
    description: 'Jaqueta Lacoste Monogram em bege — track jacket com padrão monograma jacquard, zíper metálico e paleta de tons creme que eleva qualquer look.',
  },
  {
    id: 303, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca', 'sport'],
    price: 1032.90,
    name: 'Calça Monogram Lacoste Bege',
    images: ['masculino/lacoste/lacoste-monogram-calca-bege.jpg'],
    description: 'Calça Lacoste Monogram em bege — tecido técnico com padrão monograma all-over em creme neutro, elástico ajustável e corte moderno para o dia a dia refinado.',
  },
  {
    id: 304, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 2889.90, originalPrice: 3952.00,
    name: 'Conjunto Jaqueta + Polo + Calça Monogram Lacoste Bege',
    images: [
      'masculino/lacoste/lacoste-monogram-jaqueta-bege.jpg',
      'masculino/lacoste/lacoste-monogram-polo-bege.jpg',
      'masculino/lacoste/lacoste-monogram-calca-bege.jpg',
    ],
    description: 'Conjunto completo Lacoste Monogram Bege — polo, jaqueta track e calça coordenadas em padrão monograma all-over em tons creme e bege. Três peças com identidade visual única e desconto exclusivo na compra do conjunto.',
  },
];

/* =====================================================
   BRAND & CATEGORY LISTS
   ===================================================== */
const BRANDS_BY_GENDER = {
  masculino: ['Lacoste', 'Louis Vuitton', 'Nike', 'Jordan', 'Hugo Boss', 'Tommy Hilfiger', 'Hermès', 'Hoodrich', 'Supply & Demand', 'Valentino', 'Apple'],
  feminino:  ['Lacoste', 'Christian Dior', "Victoria's Secret", 'Guess', 'Michael Kors', 'Carolina Herrera', 'Prada', 'Versace', 'YSL', 'Kérastase', 'The Ordinary', 'Kate Spade', 'Lululemon', 'Fenty Beauty', 'Givenchy', 'Dyson', 'Apple'],
};

const CATEGORIES = [
  { id: 'polo',       label: 'Polos' },
  { id: 'moletom',    label: 'Moletons' },
  { id: 'conjunto',   label: 'Conjuntos' },
  { id: 'calca',      label: 'Calças' },
  { id: 'short',      label: 'Shorts' },
  { id: 'tenis',      label: 'Tênis' },
  { id: 'sport',      label: 'Lacoste Sport' },
  { id: 'camiseta',   label: 'Camisetas' },
  { id: 'acessorio',  label: 'Acessórios' },
  { id: 'fragrance',  label: 'Fragrâncias' },
  { id: 'calcinha',   label: 'Lingerie' },
  { id: 'pijama',     label: 'Pijamas' },
];

/* Ordem de agrupamento na aba "Todos" — varia por gênero */
const CATEGORY_ORDER = ['conjunto', 'polo', 'moletom', 'calca', 'short', 'camiseta', 'tenis', 'acessorio', 'fragrance', 'calcinha', 'pijama', 'sport'];
const FEMININE_CATEGORY_ORDER = ['pijama', 'fragrance', 'calcinha', 'acessorio', 'conjunto', 'polo', 'moletom', 'calca', 'short', 'camiseta', 'tenis', 'sport'];

function getCategoryOrder() {
  return activeGender === 'feminino' ? FEMININE_CATEGORY_ORDER : CATEGORY_ORDER;
}

function getPrimaryCategory(p) {
  for (const cat of getCategoryOrder()) {
    if (p.tags.includes(cat)) return cat;
  }
  return 'sport';
}

function getPromoTag(p) {
  if (p.brand === "Victoria's Secret" && p.tags.includes('fragrance')) return '3 por R$189,90';
  if (p.id === 220 || p.id === 221) return '5 por R$209,90';
  return null;
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
/* =====================================================
   SCROLL AO CATÁLOGO
   ===================================================== */
function scrollToCollection() {
  const target = document.getElementById('collection');
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - (navbar.offsetHeight + 12);
  window.scrollTo({ top, behavior: 'smooth' });
}

/* Previne clicks fantasmas ao deslizar a barra de filtros no mobile.
   No mobile: touchmove indica scroll → ignora o click subsequente.
   No desktop: apenas o evento click é usado. */
function attachScrollAwareFilter(bar, getBtn, onSelect) {
  let _didScroll = false;

  bar.addEventListener('touchstart', () => { _didScroll = false; }, { passive: true });
  bar.addEventListener('touchmove',  () => { _didScroll = true;  }, { passive: true });

  bar.addEventListener('touchend', e => {
    if (_didScroll) return; /* era scroll — deixa o click disparar, mas ele será ignorado */
    const btn = e.target.closest('[data-filter],[data-cat]');
    if (btn) {
      e.preventDefault(); /* bloqueia o click sintético */
      onSelect(btn);
    }
  });

  /* Fallback desktop / ignora click sintético pós-scroll mobile */
  bar.addEventListener('click', e => {
    if (_didScroll) { _didScroll = false; return; }
    const btn = getBtn(e.target);
    if (btn) onSelect(btn);
  });
}

function buildBrandFilters(gender) {
  const bar = document.querySelector('.filter-bar');
  const brands = BRANDS_BY_GENDER[gender];
  bar.innerHTML = `<button class="filter-btn" data-filter="all">Todos</button>`;
  brands.forEach(b => {
    const label = b === 'Christian Dior' ? 'Dior' : b;
    bar.innerHTML += `<button class="filter-btn" data-filter="${b}">${label}</button>`;
  });

  /* Marca botão ativo */
  bar.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.filter === activeBrand) btn.classList.add('active');
  });

  const selectBrand = btn => {
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeBrand = btn.dataset.filter;
    renderProducts();
  };

  attachScrollAwareFilter(
    bar,
    target => target.closest('[data-filter]'),
    selectBrand
  );
}

/* =====================================================
   FILTROS — CATEGORIA
   ===================================================== */
function buildCategoryFilters() {
  const bar = document.querySelector('.category-bar');
  if (!bar) return;
  bar.innerHTML = `<button class="filter-btn cat-btn" data-cat="all">Todas</button>`;
  CATEGORIES.forEach(c => {
    bar.innerHTML += `<button class="filter-btn cat-btn" data-cat="${c.id}">${c.label}</button>`;
  });

  /* Marca botão ativo */
  bar.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.cat === activeCategory) btn.classList.add('active');
  });

  const selectCat = btn => {
    bar.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    renderProducts();
  };

  attachScrollAwareFilter(
    bar,
    target => target.closest('[data-cat]'),
    selectCat
  );
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
  function selectGender() {
    document.querySelectorAll('.gender-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeGender   = tab.dataset.gender;
    activeBrand    = 'all';
    activeCategory = 'all';
    buildBrandFilters(activeGender);
    buildCategoryFilters();
    renderProducts();
  }
  /* touchstart para resposta imediata no mobile (sem delay de 300ms) */
  tab.addEventListener('touchstart', e => { e.preventDefault(); selectGender(); }, { passive: false });
  /* click como fallback para desktop e acessibilidade */
  tab.addEventListener('click', selectGender);
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
    /* Destaque: ordena por custo/benefício dentro de cada grupo,
       depois intercala vendidos a cada 3-5 disponíveis */
    const sortFn = (a, b) => {
      if (activeCategory === 'all') {
        const order = getCategoryOrder();
        const catA = order.indexOf(getPrimaryCategory(a));
        const catB = order.indexOf(getPrimaryCategory(b));
        if (catA !== catB) return catA - catB;
      }
      /* Maior desconto primeiro */
      const discDiff = getDiscount(b) - getDiscount(a);
      if (discDiff !== 0) return discDiff;
      /* Desempate: menor preço primeiro */
      return a.price - b.price;
    };

    const available = list.filter(p => !p.sold).sort(sortFn);
    const sold      = list.filter(p =>  p.sold).sort(sortFn);

    /* Intercala: 4, 3, 5, 4, 3, 5… disponíveis → 1 vendido */
    if (sold.length === 0) {
      list = available;
    } else {
      const gaps = [4, 3, 5];
      list = [];
      let ai = 0, si = 0, gi = 0;
      while (ai < available.length || si < sold.length) {
        const n = gaps[gi % gaps.length];
        list.push(...available.slice(ai, ai + n));
        ai += n;
        gi++;
        if (si < sold.length) list.push(sold[si++]);
      }
    }
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

    const promoTag = getPromoTag(product);
    const promoHTML = promoTag ? `<span class="promo-tag">★ ${promoTag}</span>` : '';

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
        ${promoHTML}
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

/* =====================================================
   CHECKOUT — PAGAMENTO ONLINE
   ===================================================== */
let _checkoutProduct = null;

const qtyInput  = document.getElementById('modalQty');
const qtyMinus  = document.getElementById('qtyMinus');
const qtyPlus   = document.getElementById('qtyPlus');
const payBtn          = document.getElementById('modalPayBtn');
const payLabel        = document.getElementById('modalPayLabel');
const payTotal        = document.getElementById('modalPayTotal');
const paySpinner      = document.getElementById('paySpinner');
const modalStep2      = document.getElementById('modalStep2');
const checkoutConfirm = document.getElementById('checkoutConfirm');
const confirmLabel    = document.getElementById('confirmLabel');
const confirmSpinner  = document.getElementById('confirmSpinner');
const buyerName       = document.getElementById('buyerName');
const buyerEmail      = document.getElementById('buyerEmail');
const buyerPhone      = document.getElementById('buyerPhone');

function updatePayTotal() {
  if (!_checkoutProduct) return;
  const qty   = parseInt(qtyInput.value, 10) || 1;
  const total = (_checkoutProduct.price * qty).toFixed(2)
    .replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  payTotal.textContent = 'R$ ' + total;
}

function setFieldError(input, hasError) {
  input.classList.toggle('field-error', hasError);
}

function validateForm() {
  const name  = buyerName.value.trim();
  const email = buyerEmail.value.trim();
  const phone = buyerPhone.value.trim().replace(/\D/g, '');
  const nameOk  = name.length > 0;
  const emailOk = email.includes('@') && email.includes('.');
  const phoneOk = phone.length >= 10;
  setFieldError(buyerName,  !nameOk);
  setFieldError(buyerEmail, !emailOk);
  setFieldError(buyerPhone, !phoneOk);
  return nameOk && emailOk && phoneOk;
}

/* Clear field error as user types */
[buyerName, buyerEmail, buyerPhone].forEach(input => {
  input.addEventListener('input', () => setFieldError(input, false));
});

/* Reabilita o botão se o usuário voltar do checkout pelo browser (bfcache) */
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    payBtn.disabled          = false;
    payLabel.hidden          = false;
    paySpinner.hidden        = true;
    confirmLabel.hidden      = false;
    confirmSpinner.hidden    = true;
    checkoutConfirm.disabled = false;
    modalStep2.hidden        = true;
  }
});

qtyMinus.addEventListener('click', () => {
  const v = parseInt(qtyInput.value, 10) || 1;
  if (v > 1) { qtyInput.value = v - 1; updatePayTotal(); }
});
qtyPlus.addEventListener('click', () => {
  const v = parseInt(qtyInput.value, 10) || 1;
  if (v < 99) { qtyInput.value = v + 1; updatePayTotal(); }
});

/* Show buyer form below the buttons */
payBtn.addEventListener('click', () => {
  if (!_checkoutProduct || payBtn.disabled) return;
  modalStep2.hidden = false;
  buyerName.focus();
});

async function submitCheckout() {
  if (!validateForm()) return;

  checkoutConfirm.disabled = true;
  confirmLabel.hidden      = true;
  confirmSpinner.hidden    = false;

  const qty   = parseInt(qtyInput.value, 10) || 1;
  const name  = buyerName.value.trim();
  const email = buyerEmail.value.trim();
  const phone = buyerPhone.value.trim();

  try {
    const apiBase = window.location.hostname === 'tolentimports.com.br'
      ? 'https://guilhermebernardo-github-io.vercel.app'
      : '';

    const res = await fetch(`${apiBase}/api/create-preference`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:     _checkoutProduct.name,
        brand:    _checkoutProduct.brand,
        price:    _checkoutProduct.price,
        quantity: qty,
        buyer:    { name, email, phone },
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);

    window.location.href = data.init_point;

  } catch (err) {
    console.error('[checkout]', err);
    alert('Erro ao iniciar pagamento:\n' + err.message);
    checkoutConfirm.disabled = false;
    confirmLabel.hidden      = false;
    confirmSpinner.hidden    = true;
  }
}

checkoutConfirm.addEventListener('click', submitCheckout);

function openModal(product, startIdx = 0) {
  _mImages  = product.images;
  _mCurrent = startIdx;

  /* reset checkout */
  _checkoutProduct         = product;
  qtyInput.value           = 1;
  payBtn.disabled          = false;
  payLabel.hidden          = false;
  paySpinner.hidden        = true;
  modalStep2.hidden        = true;
  buyerName.value          = '';
  buyerEmail.value         = '';
  buyerPhone.value         = '';
  checkoutConfirm.disabled = false;
  confirmLabel.hidden      = false;
  confirmSpinner.hidden    = true;
  updatePayTotal();

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
  history.pushState({ productId: product.id }, '', '?p=' + product.id);
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
  if (location.search.includes('p=')) {
    history.replaceState({}, '', location.pathname);
  }
  setTimeout(() => { modalImg.src = ''; }, 460);
}

/* Fecha modal ao navegar com o botão Voltar do browser */
window.addEventListener('popstate', () => {
  if (modalOverlay.classList.contains('open')) {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { modalImg.src = ''; }, 460);
  }
});

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

function updateNavH() {
  document.documentElement.style.setProperty('--nav-h', navbar.offsetHeight + 'px');
}
updateNavH();

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 70);
  updateNavH();
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
   LOGO SVG ANIMATION
   ===================================================== */
(function () {
  const boltEl    = document.getElementById('bolt');
  if (!boltEl) return;
  const ruleRight = document.getElementById('rule-right');
  const ruleLeft  = document.getElementById('rule-left');
  const d2el      = document.getElementById('d2');

  const CX = 260, CY = 150, RX1 = 98, RY2 = 96;
  const SPEED1 = 0.012, SPEED2 = 0.007;
  let t1 = 0, t2 = Math.PI * 0.4;
  let boltActive = false, boltAlpha = 0, boltDecay = false;
  let nextBolt = 80 + Math.floor(Math.random() * 120);
  let lastPickedDiamond = 1;

  /* Diamonds spin via CSS @keyframes — JS only handles rule lines + bolt */
  function frame() {
    t1 += SPEED1; t2 += SPEED2;
    const cosT1 = Math.cos(t1);
    const cosT2 = Math.cos(t2);

    d2el.style.opacity = (0.3 + 0.4 * (1 - Math.abs(cosT2))).toFixed(2);

    const rx = CX + RX1 * cosT1;
    const lx = CX - RX1 * cosT1;
    ruleRight.setAttribute('x1', rx.toFixed(1));
    ruleRight.setAttribute('x2', Math.min(rx + 118, 510).toFixed(1));
    ruleLeft.setAttribute('x1', Math.max(lx - 118, 10).toFixed(1));
    ruleLeft.setAttribute('x2', lx.toFixed(1));
    const rOpacity = (0.1 + 0.2 * Math.abs(cosT1)).toFixed(2);
    ruleRight.setAttribute('opacity', rOpacity);
    ruleLeft.setAttribute('opacity',  rOpacity);

    nextBolt--;
    if (nextBolt <= 0 && !boltActive) {
      lastPickedDiamond = lastPickedDiamond === 1 ? 2 : 1;
      const bx = lastPickedDiamond === 1 ? rx : CX + 82;
      const by = lastPickedDiamond === 1 ? CY : CY - RY2 * cosT2;
      boltEl.setAttribute('x1', bx.toFixed(2));
      boltEl.setAttribute('y1', by.toFixed(2));
      boltEl.setAttribute('x2', CX); boltEl.setAttribute('y2', CY + 3);
      boltActive = true; boltDecay = false; boltAlpha = 0;
      nextBolt = 80 + Math.floor(Math.random() * 120);
    }
    if (boltActive) {
      boltAlpha += boltDecay ? -0.035 : 0.1;
      if (!boltDecay && boltAlpha >= 1) { boltAlpha = 1; boltDecay = true; }
      if (boltDecay && boltAlpha <= 0) {
        boltAlpha = 0; boltActive = false;
        boltEl.setAttribute('opacity', '0');
      } else {
        boltEl.setAttribute('opacity', boltAlpha.toFixed(3));
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

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

/* Abre produto via URL compartilhada: ?p=123 */
(function () {
  const pId = parseInt(new URLSearchParams(location.search).get('p'), 10);
  if (!pId) return;
  const product = PRODUCTS.find(p => p.id === pId);
  if (!product) return;
  /* Garante que o gênero correto está selecionado */
  if (product.gender !== activeGender) {
    activeGender = product.gender;
    document.querySelectorAll('.gender-tab').forEach(t =>
      t.classList.toggle('active', t.dataset.gender === product.gender)
    );
    buildBrandFilters(activeGender);
    buildCategoryFilters();
    renderProducts();
  }
  openModal(product);
  /* Substitui o state para que o pushState do openModal não duplique */
  history.replaceState({ productId: pId }, '', '?p=' + pId);
})();
