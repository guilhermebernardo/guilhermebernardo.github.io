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

/* =====================================================
   CATÁLOGO
   ===================================================== */
const PRODUCTS = [

  /* ══════════════════════════════════════════════════
     LACOSTE — Coleção Anterior (Masculino)
  ══════════════════════════════════════════════════ */
  {
    id: 1, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto'],
    price: 389.90,
    name: 'Conjunto Monograma Lacoste',
    images: ['masculino/lacoste/lacoste-conjunto-monograma-azul.jpeg'],
    description: 'Conjunto de duas peças Lacoste em jacquard monograma azul powder. Jaqueta de gola alta com zíper e calça jogger afinada, ambas com faixas laterais brancas em contraste. Uma obra-prima da elegância esportiva francesa.',
  },
  {
    id: 2, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 370.41, originalPrice: 389.90,
    name: 'Moletom Zip Premium Verde',
    images: ['masculino/lacoste/lacoste-moletom-zip-verde.jpeg'],
    description: 'Moletom com zíper completo em verde sálvia de malha pesada escovada. Emblema do crocodilo Lacoste no punho, com ribana de precisão no cós e mangas — silhueta atlética refinada para o guarda-roupa contemporâneo.',
  },
  {
    id: 3, brand: 'Lacoste', gender: 'masculino',
    tags: ['sport'],
    price: 389.90,
    name: 'Jaqueta Sport Branca',
    images: ['masculino/lacoste/lacoste-jaqueta-sport-branca.jpeg'],
    description: 'Jaqueta de performance Lacoste Sport em branco off-white. Tecido leve e elástico, vivos em preto ao longo das laterais e gola, com icônico emblema de crocodilo — criada para as quadras modernas e para além delas.',
  },
  {
    id: 4, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 389.90,
    name: 'Polo Roland Garros — Laranja',
    images: ['masculino/lacoste/lacoste-polo-roland-garros-laranja.jpeg'],
    description: 'Polo edição limitada Lacoste × Novak Djokovic Roland Garros em laranja queimado. Piqué de performance ultraleve com proteção UV e padrão jacquard nas mangas — peça de coleção nascida no saibro de Paris.',
  },
  {
    id: 5, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca'],
    price: 370.41, originalPrice: 389.90,
    name: 'Calça Jogger Monograma',
    images: ['masculino/lacoste/lacoste-calca-jogger-monograma.jpeg'],
    description: 'Calça jogger Lacoste em jacquard monograma azul celeste. Cós elástico com cordão, detalhamento de faixas em dourado e marinho — lazer elegante redefinido para quem se move com intenção e estilo.',
  },
  {
    id: 6, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto'],
    price: 389.90,
    name: 'Jaqueta Track Preto e Dourado',
    images: ['masculino/lacoste/lacoste-jaqueta-track-preto-dourado.jpeg'],
    description: 'Jaqueta track premium Lacoste em preto meia-noite com faixas laterais douradas. Silhueta de gola alta com zíper e emblema discreto do crocodilo — luxo contido que fala por si só.',
  },
  {
    id: 7, brand: 'Lacoste', gender: 'masculino',
    tags: ['sport'],
    price: 389.90,
    name: 'Corta-Vento com Logo',
    images: ['masculino/lacoste/lacoste-corta-vento-azul.jpeg'],
    description: 'Corta-vento com capuz Lacoste em azul marinho com marca em verde sálvia no peito. Shell leve e dobrável que oferece proteção eficiente com estilo esportivo clássico — sempre pronto para o próximo movimento.',
  },
  {
    id: 8, brand: 'Lacoste', gender: 'masculino',
    tags: ['short', 'sport'],
    price: 389.90,
    name: 'Short Sport Lacoste Azul',
    images: ['masculino/lacoste/Short Sport Lacoste Azul.jpeg'],
    description: 'Short de performance Lacoste Sport em azul royal. Tecido de secagem rápida, vivos brancos nos bolsos e emblema de crocodilo bordado — feito para as quadras, com a elegância de quem domina qualquer ambiente.',
  },
  {
    id: 9, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 389.90,
    name: 'Polo Gráfico Azul — Djokovic',
    images: ['masculino/lacoste/Polo Gráfico Azul — Djokovic.jpeg'],
    description: 'Polo da colaboração Lacoste × Novak Djokovic em azul oceano com grafismo artístico em cruz. Piqué de performance com gestão de umidade avançada — onde o esporte se torna arte contemporânea nas quadras de prestígio.',
  },
  {
    id: 10, brand: 'Lacoste', gender: 'masculino',
    tags: ['sport'],
    price: 389.90,
    name: 'Jaqueta Metasport Cobalt',
    images: ['masculino/lacoste/Jaqueta Metasport Cobalt.jpeg'],
    description: 'Jaqueta full-zip Lacoste METASPORT em azul cobalto. Tecido elástico de performance com proteção UV, silhueta de gola alta e emblema de crocodilo em amarelo vibrante — estilo de quadra de próxima geração.',
  },
  {
    id: 11, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 370.41, originalPrice: 389.90,
    name: 'Conjunto Wimbledon Azul Celeste',
    images: ['masculino/lacoste/Conjunto Wimbledon Azul Celeste.jpeg'],
    description: 'Conjunto polo e short Lacoste ultra-premium em azul celeste. Polo com padrão xadrez jacquard e colarinho branco, combinado com short coordenado — uma homenagem refinada às lendárias quadras de Wimbledon.',
  },
  {
    id: 12, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo Listrado Marinho',
    images: ['masculino/lacoste/Polo Listrado Marinho Lacoste.jpeg'],
    description: 'Polo Lacoste em azul marinho com faixas tricolores no peito: branco e azul royal. Construção em algodão piqué premium com emblema bordado — o ícone do sportswear francês reimaginado para o guarda-roupa contemporâneo.',
  },

  /* ══════════════════════════════════════════════════
     TOMMY HILFIGER — Masculino
  ══════════════════════════════════════════════════ */
  {
    id: 13, brand: 'Tommy Hilfiger', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo Signature Stripe',
    images: ['masculino/tommy-hilfiger/tommy-polo-signature-stripe.jpeg'],
    description: 'Polo piqué clássico Tommy Hilfiger em azul marinho com icônica fita tricolor vermelha e branca nos ombros. Construção em algodão premium com logo bordado no peito — um ícone preppy reinventado para o homem moderno.',
  },

  /* ══════════════════════════════════════════════════
     NIKE — Masculino
  ══════════════════════════════════════════════════ */
  {
    id: 14, brand: 'Nike', gender: 'masculino',
    tags: ['conjunto'],
    price: 389.90,
    name: 'Conjunto Tech Fleece Cinza',
    images: ['masculino/nike/nike-conjunto-tech-fleece-cinza.jpeg'],
    description: 'Conjunto moletom e calça Nike Tech Fleece em cinza mesclado. Construção em duas camadas bonded para calor leve, com costuramento angular que define uma nova geração de luxo esportivo.',
  },
  {
    id: 16, brand: 'Nike', gender: 'masculino',
    tags: ['moletom'],
    price: 389.90,
    name: 'Moletom Tech Fleece Preto',
    images: ['masculino/nike/nike-moletom-tech-fleece-preto.jpeg'],
    description: 'Moletom Nike Tech Fleece em preto com detalhes refletivos em prata. A versão mais elegante do clássico Tech Fleece — reinventado com tecnologia de ponta para quem exige conforto e estética urban luxury.',
  },

  /* ══════════════════════════════════════════════════
     HUGO BOSS — Masculino
  ══════════════════════════════════════════════════ */
  {
    id: 17, brand: 'Hugo Boss', gender: 'masculino',
    tags: ['sport'],
    price: 389.90,
    name: 'Corta-Vento Mapa Abstrato',
    images: ['masculino/hugo-boss/Corta-Vento Boss Mapa Abstrato.jpeg'],
    description: 'Jaqueta com capuz BOSS com estampa abstrata de mapa urbano em off-white e cinza. Shell leve premium com zíper preto e logo bordado no peito — onde a arte contemporânea encontra a utilidade executiva.',
  },
  {
    id: 18, brand: 'Hugo Boss', gender: 'masculino',
    tags: ['moletom'],
    price: 370.41, originalPrice: 389.90,
    name: 'Moletom Zip Boss Green',
    images: ['masculino/hugo-boss/Moletom Zip Boss Green \u2014 Cinza.jpeg'],
    description: 'Moletom com zíper BOSS Green em cinza pedra com faixas contrastantes em relevo nos ombros. Interior escovado macio com puxador de zíper com marca — onde o DNA atlético encontra o artesanato de luxo.',
  },

  /* ══════════════════════════════════════════════════
     LOUIS VUITTON — Tênis — Masculino
  ══════════════════════════════════════════════════ */
  {
    id: 19, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
    name: 'LV Trainer Preto e Branco',
    images: ['masculino/louis-vuitton/lv-trainer-preto-branco.jpeg'],
    description: 'O icônico LV Trainer em couro preto monograma em relevo com cadarço branco. Um tênis que redefine o luxo das ruas com a precisão artesanal da Maison Louis Vuitton — o objeto de desejo do streetwear de alto luxo.',
  },
  {
    id: 20, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
    name: 'LV Trainer Denim Azul',
    images: ['masculino/louis-vuitton/lv-trainer-denim-azul.jpeg'],
    description: 'LV Trainer na coloração denim azul com monograma LV em relevo e detalhes brancos. Uma fusão da herança francesa centenária com a cultura streetwear contemporânea — para quem escreve suas próprias regras.',
  },
  {
    id: 22, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
    name: 'LV Trainer — 5 Colorways',
    images: ['masculino/louis-vuitton/lv-trainer-4-colorways.jpeg'],
    description: 'Coleção completa do LV Trainer em cinco variações: azul denim, azul multicolorido, marrom camelo, preto total e branco com vermelho. A diversidade criativa que define o universo Louis Vuitton — escolha sua assinatura.',
  },
  {
    id: 23, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
    name: 'LV Trainer — Coleção em Display',
    images: [
      'masculino/louis-vuitton/lv-trainer-display-1.jpeg',
      'masculino/louis-vuitton/lv-trainer-display-2.jpeg',
      'masculino/louis-vuitton/lv-trainer-display-3.jpeg',
    ],
    description: 'Trio de LV Trainers em exposição de coleção: camelo, azul denim e preto total. Fotografados em múltiplos ângulos para revelar cada detalhe artesanal — o tênis mais icônico do luxo contemporâneo em toda sua extensão.',
  },
  {
    id: 24, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
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
    id: 25, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
    name: 'LV Trainer — Boutique Display',
    images: ['masculino/louis-vuitton/lv-trainer-boutique-display.jpeg'],
    description: 'Vista da prateleira de boutique Louis Vuitton com LV Trainers em azul denim e preto monograma. A experiência de compra como extensão do luxo da peça — o ambiente que merece a coleção.',
  },

  /* ══════════════════════════════════════════════════
     LOUIS VUITTON — Camisetas — Masculino
  ══════════════════════════════════════════════════ */
  {
    id: 26, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['camiseta'],
    price: 389.90,
    name: 'Camiseta LV Graffiti',
    images: [
      'masculino/louis-vuitton/lv-camiseta-graffiti-preta-3.jpeg',
      'masculino/louis-vuitton/lv-camiseta-graffiti-preta-2.jpeg',
      'masculino/louis-vuitton/lv-camiseta-graffiti-preta-1.jpeg',
    ],
    description: 'Camiseta em algodão premium com grafismo do monograma LV e caligrafia artística multicolorida. Disponível em detalhe frontal, no cabide e em duo preto + branco — arte e luxo em perfeita harmonia.',
  },
  {
    id: 27, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['camiseta'],
    price: 389.90,
    name: 'Camiseta Louis Graffiti',
    images: [
      'masculino/louis-vuitton/lv-camiseta-louis-graffiti-1.jpeg',
      'masculino/louis-vuitton/lv-camiseta-louis-graffiti-2.jpeg',
    ],
    description: 'Camiseta "Louis Vuitton" Graffiti preta com lettering em gradiente azul-verde e fleurs de monograma multicoloridas. Detalhe e frente/verso em sequência — a dualidade entre artesanato de topo e atitude urbana que define a LV moderna.',
  },
  {
    id: 28, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['camiseta'],
    price: 389.90,
    name: 'Camiseta Monograma Clássica LV',
    images: [
      'masculino/louis-vuitton/lv-camiseta-monograma-classica-2.jpeg',
      'masculino/louis-vuitton/lv-camiseta-monograma-classica-1.jpeg',
    ],
    description: 'Camiseta Louis Vuitton com monograma LV clássico em preto spray, em foto de coleção e produto limpo de estúdio. O básico que nunca é básico — a essência da Maison em algodão premium de alto gramado.',
  },
  {
    id: 29, brand: 'Louis Vuitton', gender: 'masculino',
    tags: ['camiseta'],
    price: 389.90,
    name: 'Look Completo Louis Vuitton',
    images: [
      'masculino/louis-vuitton/lv-look-completo-1.jpeg',
      'masculino/louis-vuitton/lv-look-completo-2.jpeg',
      'masculino/louis-vuitton/lv-camiseta-monograma-branca.jpeg',
    ],
    description: 'Look completo Louis Vuitton: camiseta monograma branca com calça jeans oversized com patches em cruz em preto e branco. O equilíbrio perfeito entre o heritage da Maison e a atitude do estilo urbano de luxo.',
  },

  /* ══════════════════════════════════════════════════
     CHRISTIAN DIOR — Feminino
  ══════════════════════════════════════════════════ */
  {
    id: 31, brand: 'Christian Dior', gender: 'feminino',
    tags: ['acessorio'],
    price: 389.90,
    name: 'Bolsa Lady Dior Preta',
    images: ['feminino/dior/dior-bolsa-lady-dior-preta.jpeg'],
    description: 'A lendária Lady Dior em bordado toile de jouy preto e branco com alça removível. Bordados elaborados com padrão exclusivo, ferragens douradas e charm "D.I.O.R." — um objeto de desejo absoluto, símbolo da haute couture parisiense.',
  },

  /* ══════════════════════════════════════════════════
     HERMÈS — Masculino
  ══════════════════════════════════════════════════ */
  {
    id: 32, brand: 'Hermès', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
    name: 'Sandália Chypre Preta',
    images: ['masculino/hermes/hermes-sandalia-chypre-preta.jpeg'],
    description: 'A icônica sandália Chypre da Hermès em couro negro mate com palmilha em couro goffrado. Silhueta de corte limpo com fivela ajustável — o calçado definitivo do luxo discreto, construído à mão por mestres artesãos em Paris.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE — Novos Lançamentos (Masculino)
  ══════════════════════════════════════════════════ */
  {
    id: 33, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo Piqué Estampado',
    images: [
      'masculino/lacoste/lacoste-polo-pique-estampado-1.jpg',
      'masculino/lacoste/lacoste-polo-pique-estampado-2.jpg',
      'masculino/lacoste/lacoste-polo-pique-estampado-3.jpg',
    ],
    description: 'Polo em piqué premium com estampa exclusiva — a elegância do crocodilo reinterpretada com grafismo contemporâneo.',
  },
  {
    id: 34, brand: 'Lacoste', gender: 'masculino',
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
    id: 35, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom', 'sport'],
    price: 389.90,
    name: 'Sweatshirt Tênis Colorblock',
    images: [
      'masculino/lacoste/lacoste-sweatshirt-colorblock-1.jpg',
      'masculino/lacoste/lacoste-sweatshirt-colorblock-2.jpg',
    ],
    description: 'Moletom com zíper em blocos de cor inspirados nas quadras — performance e estilo que transitam do esporte ao urbano com naturalidade.',
  },
  {
    id: 36, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca'],
    price: 389.90,
    name: 'Calça Jogger Verde',
    images: [
      'masculino/lacoste/lacoste-calca-verde-1.jpg',
      'masculino/lacoste/lacoste-calca-verde-2.jpg',
    ],
    description: 'Calça jogger em verde sálvia com detalhes em contraste — conforto de alto padrão para quem não abre mão do estilo no dia a dia.',
  },
  {
    id: 37, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 389.90,
    name: 'Conjunto Sport Verde',
    images: [
      'masculino/lacoste/lacoste-conjunto-sport-verde-1.jpg',
      'masculino/lacoste/lacoste-conjunto-sport-verde-2.jpg',
    ],
    description: 'Conjunto coordenado em verde vibrante com silhueta atlética — presença marcante nas quadras e além delas.',
  },
  {
    id: 38, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto'],
    price: 389.90,
    name: 'Conjunto Azul Masculino',
    images: [
      'masculino/lacoste/lacoste-conjunto-azul-1.jpg',
      'masculino/lacoste/lacoste-conjunto-azul-2.jpg',
    ],
    description: 'Conjunto em azul meia-noite com corte contemporâneo — o sportswear francês elevado ao seu estado mais refinado.',
  },
  {
    id: 39, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 370.41, originalPrice: 389.90,
    name: 'Polo Azul Piqué Fit',
    images: [
      'masculino/lacoste/lacoste-polo-azul-pique-1.jpg',
      'masculino/lacoste/lacoste-polo-azul-pique-2.jpg',
      'masculino/lacoste/lacoste-polo-azul-pique-3.jpg',
    ],
    description: 'Polo em piqué azul de corte slim — construção precisa em algodão premium que define a silhueta com elegância esportiva.',
  },
  {
    id: 40, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo Classic Fit Branco',
    images: [
      'masculino/lacoste/lacoste-polo-classic-branco-1.jpg',
      'masculino/lacoste/lacoste-polo-classic-branco-2.jpg',
    ],
    description: 'O polo branco clássico Lacoste em algodão piqué imaculado — atemporal, infalível e inegavelmente sofisticado.',
  },
  {
    id: 41, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto'],
    price: 389.90,
    name: 'Conjunto Branco Sport',
    images: [
      'masculino/lacoste/lacoste-conjunto-branco-1.jpg',
      'masculino/lacoste/lacoste-conjunto-branco-2.jpg',
      'masculino/lacoste/lacoste-conjunto-branco-3.jpg',
    ],
    description: 'Conjunto branco de corte esportivo com acabamento impecável — a pureza do branco Lacoste em sua expressão mais completa.',
  },
  {
    id: 42, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 389.90,
    name: 'Tech Fleece Verde',
    images: [
      'masculino/lacoste/lacoste-tech-fleece-verde-1.jpg',
      'masculino/lacoste/lacoste-tech-fleece-verde-2.jpg',
      'masculino/lacoste/lacoste-tech-fleece-verde-3.jpg',
    ],
    description: 'Tech fleece em verde com tecnologia de dupla camada — calor leve e silhueta aerodinâmica para quem vive em movimento.',
  },
  {
    id: 43, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 370.41, originalPrice: 389.90,
    name: 'Moletom Branco Premium',
    images: [
      'masculino/lacoste/lacoste-moletom-branco-1.jpg',
      'masculino/lacoste/lacoste-moletom-branco-2.jpg',
    ],
    description: 'Moletom em branco opaco de malha pesada — o conforto do algodão escovado com a assinatura inconfundível do crocodilo.',
  },
  {
    id: 44, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 389.90,
    name: 'Moletom Preto Premium',
    images: [
      'masculino/lacoste/lacoste-moletom-preto-1.jpg',
      'masculino/lacoste/lacoste-moletom-preto-2.jpg',
    ],
    description: 'Moletom em preto total com detalhes discretos em relevo — a força do estilo noturno Lacoste em sua forma mais essencial.',
  },
  {
    id: 45, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 389.90,
    name: 'Conjunto Sport Roxo',
    images: [
      'masculino/lacoste/lacoste-conjunto-sport-roxo-1.jpg',
      'masculino/lacoste/lacoste-conjunto-sport-roxo-2.jpg',
    ],
    description: 'Conjunto esportivo em roxo com corte atlético e acabamento premium — ousadia cromática com a precisão técnica da Maison.',
  },
  {
    id: 46, brand: 'Lacoste', gender: 'masculino',
    tags: ['sport'],
    price: 389.90,
    name: 'Sport Verde',
    images: [
      'masculino/lacoste/lacoste-sport-verde-1.jpg',
      'masculino/lacoste/lacoste-sport-verde-2.jpg',
    ],
    description: 'Peça sport em verde com construção técnica de alto desempenho — onde a funcionalidade das quadras encontra o design de Maison.',
  },
  {
    id: 47, brand: 'Lacoste', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
    name: 'Tênis Verde',
    images: [
      'masculino/lacoste/lacoste-tenis-verde-1.jpg',
      'masculino/lacoste/lacoste-tenis-verde-2.jpg',
    ],
    description: 'Tênis em couro verde com solado vulcanizado e monograma bordado — a herança das quadras traduzida em calçado de rua inconfundível.',
  },
  {
    id: 48, brand: 'Lacoste', gender: 'masculino',
    tags: ['tenis'],
    price: 389.90,
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
    id: 49, brand: 'Lacoste', gender: 'masculino',
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
    id: 50, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo Paris Branco',
    images: [
      'masculino/lacoste/lacoste-polo-paris-branco-1.jpg',
      'masculino/lacoste/lacoste-polo-paris-branco-2.jpg',
    ],
    description: 'Polo Paris em branco imaculado — edição que homenageia a capital da moda com o piqué inconfundível da tradição Lacoste.',
  },
  {
    id: 51, brand: 'Lacoste', gender: 'masculino',
    tags: ['acessorio'],
    price: 389.90,
    name: 'Bolsa Preta Lacoste',
    images: [
      'masculino/lacoste/lacoste-bolsa-preta-1.jpg',
      'masculino/lacoste/lacoste-bolsa-preta-2.jpg',
    ],
    description: 'Bolsa em nylon premium preto com ferragens douradas e crocodilo em relevo — acessório funcional com a sofisticação que a Maison assina.',
  },
  {
    id: 52, brand: 'Lacoste', gender: 'masculino',
    tags: ['moletom'],
    price: 389.90,
    name: 'Suéter Vermelho',
    images: [
      'masculino/lacoste/lacoste-sueter-vermelho-1.jpg',
      'masculino/lacoste/lacoste-sueter-vermelho-2.jpg',
    ],
    description: 'Suéter em vermelho cardinal com logo bordado — presença cromática intensa com o refinamento têxtil que define a tradição Lacoste.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE — Novos Lançamentos (Feminino)
  ══════════════════════════════════════════════════ */
  {
    id: 53, brand: 'Lacoste', gender: 'feminino',
    tags: ['tenis'],
    price: 370.41, originalPrice: 389.90,
    name: 'Tênis Lacoste Feminino',
    images: [
      'feminino/lacoste/lacoste-tenis-feminino-1.jpg',
      'feminino/lacoste/lacoste-tenis-feminino-2.jpg',
    ],
    description: 'Tênis feminino Lacoste em couro premium com silhueta refinada — a elegância esportiva francesa reinterpretada para o guarda-roupa contemporâneo.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE × DJOKOVIC — Novos (Masculino)
  ══════════════════════════════════════════════════ */
  {
    id: 54, brand: 'Lacoste', gender: 'masculino',
    tags: ['camiseta', 'sport'],
    price: 303.90,
    name: 'Camiseta Djokovic Verde',
    images: [
      'masculino/lacoste/lacoste-djokovic-tshirt-verde-1.jpg',
      'masculino/lacoste/lacoste-djokovic-tshirt-verde-2.jpg',
    ],
    description: 'Camiseta da collab Lacoste × Novak Djokovic em verde tênis — leveza técnica e grafismo exclusivo da parceria mais icônica das quadras.',
  },
  {
    id: 55, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 1089.90,
    name: 'Tracksuit Djokovic Preto',
    images: [
      'masculino/lacoste/lacoste-djokovic-tracksuit-preto-1.jpg',
      'masculino/lacoste/lacoste-djokovic-tracksuit-preto-2.jpg',
    ],
    description: 'Tracksuit Lacoste × Djokovic em preto total com detalhes brancos — a sofisticação das quadras Grand Slam em cada detalhe do tecido técnico.',
  },
  {
    id: 56, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 1089.90,
    name: 'Tracksuit Djokovic Azul',
    images: [
      'masculino/lacoste/lacoste-djokovic-tracksuit-azul-1.jpg',
      'masculino/lacoste/lacoste-djokovic-tracksuit-azul-2.jpg',
    ],
    description: 'Tracksuit Lacoste × Djokovic em azul cobalto com corte atlético de alta performance — edição limitada para quem joga no mais alto nível.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE — Calças & Shorts (Masculino)
  ══════════════════════════════════════════════════ */
  {
    id: 57, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca'],
    price: 389.90,
    name: 'Calça Estampada Preta',
    images: [
      'masculino/lacoste/lacoste-calca-estampada-preta-1.jpg',
      'masculino/lacoste/lacoste-calca-estampada-preta-2.jpg',
      'masculino/lacoste/lacoste-calca-estampada-preta-3.jpg',
    ],
    description: 'Calça de moletom preta com estampa all-over discreta — o equilíbrio perfeito entre streetwear contemporâneo e o DNA refinado da Maison.',
  },
  {
    id: 58, brand: 'Lacoste', gender: 'masculino',
    tags: ['calca'],
    price: 370.41, originalPrice: 389.90,
    name: 'Calça Estampada Branca',
    images: [
      'masculino/lacoste/lacoste-calca-estampada-branca-1.jpg',
      'masculino/lacoste/lacoste-calca-estampada-branca-2.jpg',
    ],
    description: 'Calça de moletom branca com estampa monograma sutil — declaração de estilo minimalista com o acabamento impecável que a Lacoste assina.',
  },
  {
    id: 59, brand: 'Lacoste', gender: 'masculino',
    tags: ['short'],
    price: 370.41, originalPrice: 389.90,
    name: 'Short Colorblock Fleece',
    images: [
      'masculino/lacoste/lacoste-short-colorblock-1.jpg',
      'masculino/lacoste/lacoste-short-colorblock-2.jpg',
      'masculino/lacoste/lacoste-short-colorblock-3.jpg',
    ],
    description: 'Short em fleece com blocos de cor em contraste — conforto premium e estilo de quadra para usar do treino ao dia a dia.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE — Polos (Masculino)
  ══════════════════════════════════════════════════ */
  {
    id: 60, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo', 'sport'],
    price: 389.90,
    name: 'Polo Golf Colorblock',
    images: [
      'masculino/lacoste/lacoste-polo-golf-colorblock-1.jpg',
      'masculino/lacoste/lacoste-polo-golf-colorblock-2.jpg',
    ],
    description: 'Polo de golf em blocos de cor com tecido de alta performance — precisão técnica e estilo inconfundível para dominar fairways e além.',
  },
  {
    id: 61, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo Colorblock Petit Piqué',
    images: [
      'masculino/lacoste/lacoste-polo-colorblock-pique-1.jpg',
      'masculino/lacoste/lacoste-polo-colorblock-pique-2.jpg',
    ],
    description: 'Polo em petit piqué com design colorblock de precisão — a modernidade das cores em harmonia com a construção clássica que define a Lacoste.',
  },
  {
    id: 62, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 370.41, originalPrice: 389.90,
    name: 'Polo L.12.12 Classic',
    images: [
      'masculino/lacoste/lacoste-polo-l1212-1.jpg',
      'masculino/lacoste/lacoste-polo-l1212-2.jpg',
    ],
    description: 'O lendário polo L.12.12 — criado em 1933, reinventado para hoje. O modelo que deu origem à cultura polo permanece incontestável.',
  },
  {
    id: 63, brand: 'Lacoste', gender: 'masculino',
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
    id: 64, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo L.12.12 Vermelho',
    images: [
      'masculino/lacoste/lacoste-polo-l1212-vermelho-1.jpg',
      'masculino/lacoste/lacoste-polo-l1212-vermelho-2.jpg',
    ],
    description: 'O L.12.12 em vermelho cardinal com presença marcante — a mesma construção centenária em piqué, agora com uma cor que exige atenção.',
  },
  {
    id: 65, brand: 'Lacoste', gender: 'masculino',
    tags: ['polo'],
    price: 389.90,
    name: 'Polo L.12.12 Branco',
    images: [
      'masculino/lacoste/lacoste-polo-l1212-branco-1.jpg',
      'masculino/lacoste/lacoste-polo-l1212-branco-2.jpg',
    ],
    description: 'O L.12.12 em branco — a versão mais pura do polo original que René Lacoste criou para libertar o movimento nas quadras de tênis.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE — Tracksuits & Acessórios (Masculino)
  ══════════════════════════════════════════════════ */
  {
    id: 66, brand: 'Lacoste', gender: 'masculino',
    tags: ['conjunto', 'sport'],
    price: 389.90,
    name: 'Tracksuit Branco Tennis',
    images: [
      'masculino/lacoste/lacoste-tracksuit-branco-1.jpg',
      'masculino/lacoste/lacoste-tracksuit-branco-2.jpg',
      'masculino/lacoste/lacoste-tracksuit-branco-3.jpg',
    ],
    description: 'Tracksuit de tênis em branco com detalhes em verde — o conjunto que une herança das quadras e sofisticação do guarda-roupa esportivo premium.',
  },
  {
    id: 67, brand: 'Lacoste', gender: 'masculino',
    tags: ['acessorio'],
    price: 389.90,
    name: 'Chapéu Bucket Piqué',
    images: [
      'masculino/lacoste/lacoste-chapeu-bucket-1.jpg',
      'masculino/lacoste/lacoste-chapeu-bucket-2.jpg',
    ],
    description: 'Chapéu bucket em piqué unissex com aba estruturada e crocodilo bordado — o acessório de verão que equilibra funcionalidade e estilo Lacoste.',
  },

  /* ══════════════════════════════════════════════════
     LACOSTE — Calças Femininas
  ══════════════════════════════════════════════════ */
  {
    id: 68, brand: 'Lacoste', gender: 'feminino',
    tags: ['calca'],
    price: 370.41, originalPrice: 389.90,
    name: 'Calça Flared Monograma Azul',
    images: [
      'feminino/lacoste/lacoste-calca-monograma-azul-1.jpg',
      'feminino/lacoste/lacoste-calca-monograma-azul-2.jpg',
      'feminino/lacoste/lacoste-calca-monograma-azul-3.jpg',
    ],
    description: 'Calça flared feminina em azul com monograma all-over — silhueta alongada e presença marcante com a identidade inconfundível da Maison.',
  },
  {
    id: 69, brand: 'Lacoste', gender: 'feminino',
    tags: ['calca'],
    price: 389.90,
    name: 'Calça Flared Monograma Marrom',
    images: [
      'feminino/lacoste/lacoste-calca-monograma-marrom-1.jpg',
      'feminino/lacoste/lacoste-calca-monograma-marrom-2.jpg',
    ],
    description: 'Calça flared em marrom terroso com monograma Lacoste — a sofisticação dos tons neutros com o corte generoso que define a feminilidade contemporânea.',
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

/* =====================================================
   STATE
   ===================================================== */
let activeGender   = 'masculino';
let activeBrand    = 'all';
let activeCategory = 'all';

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

    const priceHTML = product.originalPrice
      ? `<div class="card-price">
           <span class="price-original">${fmt(product.originalPrice)}</span>
           <span class="price-current">${fmt(product.price)}</span>
           <span class="price-badge">-5%</span>
         </div>`
      : `<div class="card-price"><span class="price-current">${fmt(product.price)}</span></div>`;

    const card = document.createElement('article');
    card.className = 'product-card';
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
        <div class="card-hover-overlay">
          <div class="card-view-btn">Ver Detalhes</div>
        </div>
      </div>
      <div class="card-info">
        <p class="card-brand">${product.brand}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        ${priceHTML}
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

  // Price in modal
  const modalPriceEl = document.getElementById('modalPrice');
  if (modalPriceEl) {
    if (product.originalPrice) {
      modalPriceEl.innerHTML = `<span class="price-original">${fmt(product.originalPrice)}</span> <span class="price-current">${fmt(product.price)}</span> <span class="price-badge">-5%</span>`;
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
renderProducts();
