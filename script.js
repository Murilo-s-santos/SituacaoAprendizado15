// Banco de dados simulado dos Destaques
const coverData = [
  {
    id: 1,
    title: 'O ABISMO',
    badge: 'LANÇAMENTO EXCLUSIVO',
    desc: 'A escuridão esconde os maiores segredos. Prepare-se para a série de suspense mais aguardada do ano. Quando a luz falha, a verdadeira caçada começa.',
    bgImage: '[https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop](https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop)'
  },
  {
    id: 2,
    title: 'VELOCIDADE MAX',
    badge: 'FILME DE AÇÃO',
    desc: 'Pilotos de elite correm contra o tempo para impedir um desastre global. Adrenalina pura, sem limites para a velocidade.',
    bgImage: '[https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop](https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop)'
  },
  {
    id: 3,
    title: 'NÉON CYBER',
    badge: 'NOVA TEMPORADA',
    desc: 'Em 2084, a inteligência artificial controla tudo. Um grupo de rebeldes tenta derrubar o sistema a partir dos subúrbios esquecidos.',
    bgImage: '[https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop](https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop)'
  }
];

// Seletores do DOM
const heroSection = document.getElementById('hero-section');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroBadge = document.getElementById('hero-badge');
const thumbnailRow = document.getElementById('thumbnail-row');
const navbar = document.getElementById('navbar');

// Função de inicialização
function init() {
  renderThumbnails();
  updateHero(coverData[0]); // Carrega o primeiro item ao iniciar
  
  // Efeito da navbar no scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Renderizar as "miniaturas" na parte inferior direita
function renderThumbnails() {
  coverData.forEach((item, index) => {
    const thumb = document.createElement('div');
    thumb.classList.add('thumb-card');
    if (index === 0) thumb.classList.add('active'); // O primeiro começa ativo
    
    thumb.style.backgroundImage = `url(${item.bgImage})`;
    
    // Evento de clique para mudar a capa
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.thumb-card').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      updateHero(item);
    });

    thumbnailRow.appendChild(thumb);
  });
}

// Atualizar o conteúdo principal da tela (A mágica acontece aqui)
function updateHero(item) {
  heroSection.style.backgroundImage = `url(${item.bgImage})`;
  heroTitle.textContent = item.title;
  heroDesc.textContent = item.desc;
  heroBadge.textContent = item.badge;
}

// Roda a inicialização
init();