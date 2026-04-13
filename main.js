/* =====================================================
   TOLENT IMPORTS — main.js
   ===================================================== */

'use strict';

const WA_NUMBER = '5512991510752';

/* =====================================================
   CATÁLOGO — 32 peças consolidadas
   ===================================================== */
const PRODUCTS = [

  /* ══════════════════════════════════
     LACOSTE  (12 peças)
  ══════════════════════════════════ */
  {
    id: 1,
    brand: 'Lacoste',
    name: 'Conjunto Monograma Lacoste',
    images: ['lacoste-conjunto-monograma-azul.jpeg'],
    description:
      'Conjunto de duas peças Lacoste em jacquard monograma azul powder. Jaqueta de gola alta com zíper e calça jogger afinada, ambas com faixas laterais brancas em contraste. Uma obra-prima da elegância esportiva francesa.',
  },
  {
    id: 2,
    brand: 'Lacoste',
    name: 'Moletom Zip Premium Verde',
    images: ['lacoste-moletom-zip-verde.jpeg'],
    description:
      'Moletom com zíper completo em verde sálvia de malha pesada escovada. Emblema do crocodilo Lacoste no punho, com ribana de precisão no cós e mangas — silhueta atlética refinada para o guarda-roupa contemporâneo.',
  },
  {
    id: 3,
    brand: 'Lacoste',
    name: 'Jaqueta Sport Branca',
    images: ['lacoste-jaqueta-sport-branca.jpeg'],
    description:
      'Jaqueta de performance Lacoste Sport em branco off-white. Tecido leve e elástico, vivos em preto ao longo das laterais e gola, com icônico emblema de crocodilo — criada para as quadras modernas e para além delas.',
  },
  {
    id: 4,
    brand: 'Lacoste',
    name: 'Polo Roland Garros — Laranja',
    images: ['lacoste-polo-roland-garros-laranja.jpeg'],
    description:
      'Polo edição limitada Lacoste × Novak Djokovic Roland Garros em laranja queimado. Piqué de performance ultraleve com proteção UV e padrão jacquard nas mangas — peça de coleção nascida no saibro de Paris.',
  },
  {
    id: 5,
    brand: 'Lacoste',
    name: 'Calça Jogger Monograma',
    images: ['lacoste-calca-jogger-monograma.jpeg'],
    description:
      'Calça jogger Lacoste em jacquard monograma azul celeste. Cós elástico com cordão, detalhamento de faixas em dourado e marinho — lazer elegante redefinido para quem se move com intenção e estilo.',
  },
  {
    id: 6,
    brand: 'Lacoste',
    name: 'Jaqueta Track Preto e Dourado',
    images: ['lacoste-jaqueta-track-preto-dourado.jpeg'],
    description:
      'Jaqueta track premium Lacoste em preto meia-noite com faixas laterais douradas. Silhueta de gola alta com zíper e emblema discreto do crocodilo — luxo contido que fala por si só.',
  },
  {
    id: 7,
    brand: 'Lacoste',
    name: 'Corta-Vento com Logo',
    images: ['lacoste-corta-vento-azul.jpeg'],
    description:
      'Corta-vento com capuz Lacoste em azul marinho com marca em verde sálvia no peito. Shell leve e dobrável que oferece proteção eficiente com estilo esportivo clássico — sempre pronto para o próximo movimento.',
  },
  {
    id: 8,
    brand: 'Lacoste',
    name: 'Short Sport Lacoste Azul',
    images: ['Short Sport Lacoste Azul.jpeg'],
    description:
      'Short de performance Lacoste Sport em azul royal. Tecido de secagem rápida, vivos brancos nos bolsos e emblema de crocodilo bordado — feito para as quadras, com a elegância de quem domina qualquer ambiente.',
  },
  {
    id: 9,
    brand: 'Lacoste',
    name: 'Polo Gráfico Azul — Djokovic',
    images: ['Polo Gráfico Azul Djokovic.jpeg'],
    description:
      'Polo da colaboração Lacoste × Novak Djokovic em azul oceano com grafismo artístico em cruz. Piqué de performance com gestão de umidade avançada — onde o esporte se torna arte contemporânea nas quadras de prestígio.',
  },
  {
    id: 10,
    brand: 'Lacoste',
    name: 'Jaqueta Metasport Cobalt',
    images: ['Jaqueta Metasport Cobalt.jpeg'],
    description:
      'Jaqueta full-zip Lacoste METASPORT em azul cobalto. Tecido elástico de performance com proteção UV, silhueta de gola alta e emblema de crocodilo em amarelo vibrante — estilo de quadra de próxima geração.',
  },
  {
    id: 11,
    brand: 'Lacoste',
    name: 'Conjunto Wimbledon Azul Celeste',
    images: ['Conjunto Wimbledon Azul Celeste.jpeg'],
    description:
      'Conjunto polo e short Lacoste ultra-premium em azul celeste. Polo com padrão xadrez jacquard e colarinho branco, combinado com short coordenado — uma homenagem refinada às lendárias quadras de Wimbledon.',
  },
  {
    id: 12,
    brand: 'Lacoste',
    name: 'Polo Listrado Marinho',
    images: ['Polo Listrado Marinho Lacoste.jpeg'],
    description:
      'Polo Lacoste em azul marinho com faixas tricolores no peito: branco e azul royal. Construção em algodão piqué premium com emblema bordado — o ícone do sportswear francês reimaginado para o guarda-roupa contemporâneo.',
  },

  /* ══════════════════════════════════
     TOMMY HILFIGER  (1 peça)
  ══════════════════════════════════ */
  {
    id: 13,
    brand: 'Tommy Hilfiger',
    name: 'Polo Signature Stripe',
    images: ['tommy-polo-signature-stripe.jpeg'],
    description:
      'Polo piqué clássico Tommy Hilfiger em azul marinho com icônica fita tricolor vermelha e branca nos ombros. Construção em algodão premium com logo bordado no peito — um ícone preppy reinventado para o homem moderno.',
  },

  /* ══════════════════════════════════
     NIKE  (3 peças)
  ══════════════════════════════════ */
  {
    id: 14,
    brand: 'Nike',
    name: 'Conjunto Tech Fleece Cinza',
    images: ['nike-conjunto-tech-fleece-cinza.jpeg'],
    description:
      'Conjunto moletom e calça Nike Tech Fleece em cinza mesclado. Construção em duas camadas bonded para calor leve, com costuramento angular que define uma nova geração de luxo esportivo.',
  },
  {
    id: 16,
    brand: 'Nike',
    name: 'Moletom Tech Fleece Preto',
    images: ['nike-moletom-tech-fleece-preto.jpeg'],
    description:
      'Moletom Nike Tech Fleece em preto com detalhes refletivos em prata. A versão mais elegante do clássico Tech Fleece — reinventado com tecnologia de ponta para quem exige conforto e estética urban luxury.',
  },

  /* ══════════════════════════════════
     HUGO BOSS  (2 peças)
  ══════════════════════════════════ */
  {
    id: 17,
    brand: 'Hugo Boss',
    name: 'Corta-Vento Mapa Abstrato',
    images: ['Corta-Vento Boss Mapa Abstrato.jpeg'],
    description:
      'Jaqueta com capuz BOSS com estampa abstrata de mapa urbano em off-white e cinza. Shell leve premium com zíper preto e logo bordado no peito — onde a arte contemporânea encontra a utilidade executiva.',
  },
  {
    id: 18,
    brand: 'Hugo Boss',
    name: 'Moletom Zip Boss Green',
    images: ['Moletom Zip Boss Green \u2014 Cinza.jpeg'],
    description:
      'Moletom com zíper BOSS Green em cinza pedra com faixas contrastantes em relevo nos ombros. Interior escovado macio com puxador de zíper com marca — onde o DNA atlético encontra o artesanato de luxo.',
  },

  /* ══════════════════════════════════
     LOUIS VUITTON — Tênis  (7 peças)
  ══════════════════════════════════ */
  {
    id: 19,
    brand: 'Louis Vuitton',
    name: 'LV Trainer Preto e Branco',
    images: ['lv-trainer-preto-branco.jpeg'],
    description:
      'O icônico LV Trainer em couro preto monograma em relevo com cadarço branco. Um tênis que redefine o luxo das ruas com a precisão artesanal da Maison Louis Vuitton — o objeto de desejo do streetwear de alto luxo.',
  },
  {
    id: 20,
    brand: 'Louis Vuitton',
    name: 'LV Trainer Denim Azul',
    images: ['lv-trainer-denim-azul.jpeg'],
    description:
      'LV Trainer na coloração denim azul com monograma LV em relevo e detalhes brancos. Uma fusão da herança francesa centenária com a cultura streetwear contemporânea — para quem escreve suas próprias regras.',
  },
  {
    id: 22,
    brand: 'Louis Vuitton',
    name: 'LV Trainer — 5 Colorways',
    images: ['lv-trainer-4-colorways.jpeg'],
    description:
      'Coleção completa do LV Trainer em cinco variações: azul denim, azul multicolorido, marrom camelo, preto total e branco com vermelho. A diversidade criativa que define o universo Louis Vuitton — escolha sua assinatura.',
  },
  {
    id: 23,
    brand: 'Louis Vuitton',
    name: 'LV Trainer — Coleção em Display',
    images: [
      'lv-trainer-display-1.jpeg',
      'lv-trainer-display-2.jpeg',
      'lv-trainer-display-3.jpeg',
    ],
    description:
      'Trio de LV Trainers em exposição de coleção: camelo, azul denim e preto total. Fotografados em múltiplos ângulos para revelar cada detalhe artesanal — o tênis mais icônico do luxo contemporâneo em toda sua extensão.',
  },
  {
    id: 24,
    brand: 'Louis Vuitton',
    name: 'LV Trainer Preto — Edição Completa',
    images: [
      'lv-trainer-preto-detalhe-2.jpeg',
      'lv-trainer-preto-unboxing.jpeg',
      'lv-trainer-preto-detalhe-1.jpeg',
      'lv-trainer-preto-detalhe-3.jpeg',
      'lv-trainer-preto-boutique.jpeg',
    ],
    description:
      'LV Trainer preto em couro monograma, documentado do unboxing ao detalhe: dustbag em algodão, caixa laranja icônica e boutique oficial. A experiência completa do luxo — do primeiro toque ao último olhar.',
  },
  {
    id: 25,
    brand: 'Louis Vuitton',
    name: 'LV Trainer — Boutique Display',
    images: ['lv-trainer-boutique-display.jpeg'],
    description:
      'Vista da prateleira de boutique Louis Vuitton com LV Trainers em azul denim e preto monograma. A experiência de compra como extensão do luxo da peça — o ambiente que merece a coleção.',
  },

  /* ══════════════════════════════════
     LOUIS VUITTON — Camisetas  (5 peças)
  ══════════════════════════════════ */
  {
    id: 26,
    brand: 'Louis Vuitton',
    name: 'Camiseta LV Graffiti',
    images: [
      'lv-camiseta-graffiti-preta-3.jpeg',
      'lv-camiseta-graffiti-preta-2.jpeg',
      'lv-camiseta-graffiti-preta-1.jpeg',
    ],
    description:
      'Camiseta em algodão premium com grafismo do monograma LV e caligrafia artística multicolorida. Disponível em detalhe frontal, no cabide e em duo preto + branco — arte e luxo em perfeita harmonia.',
  },
  {
    id: 27,
    brand: 'Louis Vuitton',
    name: 'Camiseta Louis Graffiti',
    images: [
      'lv-camiseta-louis-graffiti-1.jpeg',
      'lv-camiseta-louis-graffiti-2.jpeg',
    ],
    description:
      'Camiseta "Louis Vuitton" Graffiti preta com lettering em gradiente azul-verde e fleurs de monograma multicoloridas. Detalhe e frente/verso em sequência — a dualidade entre artesanato de topo e atitude urbana que define a LV moderna.',
  },
  {
    id: 28,
    brand: 'Louis Vuitton',
    name: 'Camiseta Monograma Clássica LV',
    images: [
      'lv-camiseta-monograma-classica-2.jpeg',
      'lv-camiseta-monograma-classica-1.jpeg',
    ],
    description:
      'Camiseta Louis Vuitton com monograma LV clássico em preto spray, em foto de coleção e produto limpo de estúdio. O básico que nunca é básico — a essência da Maison em algodão premium de alto gramado.',
  },
  {
    id: 29,
    brand: 'Louis Vuitton',
    name: 'Look Completo Louis Vuitton',
    images: [
      'lv-look-completo-1.jpeg',
      'lv-look-completo-2.jpeg',
      'v-camiseta-monograma-branca.jpeg'
    ],
    description:
      'Look completo Louis Vuitton: camiseta monograma branca com calça jeans oversized com patches em cruz em preto e branco. O equilíbrio perfeito entre o heritage da Maison e a atitude do estilo urbano de luxo.',
  },

  /* ══════════════════════════════════
     CHRISTIAN DIOR  (1 peça)
  ══════════════════════════════════ */
  {
    id: 31,
    brand: 'Christian Dior',
    name: 'Bolsa Lady Dior Preta',
    images: ['dior-bolsa-lady-dior-preta.jpeg'],
    description:
      'A lendária Lady Dior em bordado toile de jouy preto e branco com alça removível. Bordados elaborados com padrão exclusivo, ferragens douradas e charm "D.I.O.R." — um objeto de desejo absoluto, símbolo da haute couture parisiense.',
  },

  /* ══════════════════════════════════
     HERMÈS  (1 peça)
  ══════════════════════════════════ */
  {
    id: 32,
    brand: 'Hermès',
    name: 'Sandália Chypre Preta',
    images: ['hermes-sandalia-chypre-preta.jpeg'],
    description:
      'A icônica sandália Chypre da Hermès em couro negro mate com palmilha em couro goffrado. Silhueta de corte limpo com fivela ajustável — o calçado definitivo do luxo discreto, construído à mão por mestres artesãos em Paris.',
  },
];

/* =====================================================
   UTILITÁRIOS
   ===================================================== */
function encodeImg(file) {
  return '../' + encodeURIComponent(file);
}

function buildWhatsAppURL(name, brand) {
  const msg = encodeURIComponent(
    `Olá! Vi o site da Tolent Imports e tenho interesse na peça: *${name}* da marca *${brand}*. Poderia me passar mais informações?`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

/* =====================================================
   RENDERIZAR PRODUTOS
   ===================================================== */
function renderProducts(filter) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  const list = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.brand === filter);

  if (!list.length) {
    grid.innerHTML = '<p style="text-align:center;color:var(--grey);grid-column:1/-1;padding:60px 0;">Nenhuma peça encontrada para esta categoria.</p>';
    return;
  }

  list.forEach((product, i) => {
    const multi = product.images.length > 1;

    // Build carousel dots HTML
    const dotsHTML = multi
      ? `<div class="carousel-dots">${product.images.map((_, idx) =>
          `<span class="carousel-dot${idx === 0 ? ' active' : ''}"></span>`
        ).join('')}</div>`
      : '';

    // Build carousel arrows HTML
    const arrowsHTML = multi
      ? `<button class="carousel-btn carousel-prev" aria-label="Anterior">&#8249;</button>
         <button class="carousel-btn carousel-next" aria-label="Próximo">&#8250;</button>`
      : '';

    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver ${product.name} — ${product.brand}`);
    card.style.transitionDelay = `${(i % 3) * 0.08}s`;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img
          class="card-img"
          src="${encodeImg(product.images[0])}"
          alt="${product.name} — ${product.brand}"
          loading="lazy"
        />
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
      </div>
    `;

    // Carousel state
    let cardIdx = 0;

    if (multi) {
      const imgEl  = card.querySelector('.card-img');
      const dots   = card.querySelectorAll('.carousel-dot');
      const prev   = card.querySelector('.carousel-prev');
      const next   = card.querySelector('.carousel-next');

      function cardGoTo(n) {
        cardIdx = ((n % product.images.length) + product.images.length) % product.images.length;
        imgEl.src = encodeImg(product.images[cardIdx]);
        dots.forEach((d, k) => d.classList.toggle('active', k === cardIdx));
      }

      prev.addEventListener('click', e => { e.stopPropagation(); cardGoTo(cardIdx - 1); });
      next.addEventListener('click', e => { e.stopPropagation(); cardGoTo(cardIdx + 1); });
      dots.forEach((dot, k) => dot.addEventListener('click', e => { e.stopPropagation(); cardGoTo(k); }));
    }

    // Open modal at current card carousel position
    card.addEventListener('click', () => openModal(product, cardIdx));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(product, cardIdx); }
    });

    grid.appendChild(card);

    // Staggered reveal
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

  // Info
  modalBrand.textContent = product.brand;
  modalName.textContent  = product.name;
  modalDesc.textContent  = product.description;
  modalCta.href          = buildWhatsAppURL(product.name, product.brand);

  // Dots
  modalDots.innerHTML = _mImages.map((_, i) =>
    `<span class="modal-dot${i === startIdx ? ' active' : ''}"></span>`
  ).join('');
  modalDots.querySelectorAll('.modal-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => modalGoTo(i));
  });

  // Show/hide arrows
  const multi = _mImages.length > 1;
  modalPrev.classList.toggle('visible', multi);
  modalNext.classList.toggle('visible', multi);

  // Load image
  modalImg.src = encodeImg(_mImages[startIdx]);

  // Open
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

// Modal controls
document.getElementById('modalClose').addEventListener('click', closeModal);
modalPrev.addEventListener('click', () => modalGoTo(_mCurrent - 1));
modalNext.addEventListener('click', () => modalGoTo(_mCurrent + 1));

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

// "Fazer Pedido" closes modal (WhatsApp opens in new tab via href)
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
   FILTROS
   ===================================================== */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

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
   SMOOTH SCROLL (offset for fixed navbar)
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
renderProducts('all');
