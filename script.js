// Dados do Hero
const coverData = [
  {
    id: 1,
    title: 'O ABISMO',
    badge: 'LANÇAMENTO EXCLUSIVO',
    desc: 'A escuridão esconde os maiores segredos. Prepare-se para a série de suspense mais aguardada do ano. Quando a luz falha, a verdadeira caçada começa.',
    bgImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'VELOCIDADE MAX',
    badge: 'FILME DE AÇÃO',
    desc: 'Pilotos de elite correm contra o tempo para impedir um desastre global. Adrenalina pura, sem limites para a velocidade.',
    bgImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'NÉON CYBER',
    badge: 'NOVA TEMPORADA',
    desc: 'Em 2084, a inteligência artificial controla tudo. Um grupo de rebeldes tenta derrubar o sistema a partir dos subúrbios esquecidos.',
    bgImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop'
  }
];

const heroSection = document.getElementById('hero-section');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroBadge = document.getElementById('hero-badge');
const thumbnailRow = document.getElementById('thumbnail-row');
const navbar = document.getElementById('navbar');

function init() {
  renderThumbnails();
  updateHero(coverData[0]); 
  
  // Navbar Scrolled Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Inicializa botões de rolagem do catálogo
  setupSliderScroll();
}

function renderThumbnails() {
  coverData.forEach((item, index) => {
    const thumb = document.createElement('div');
    thumb.classList.add('thumb-card');
    if (index === 0) thumb.classList.add('active'); 
    
    thumb.style.backgroundImage = `url(${item.bgImage})`;
    
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.thumb-card').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      updateHero(item);
    });

    thumbnailRow.appendChild(thumb);
  });
}

function updateHero(item) {
  heroSection.style.backgroundImage = `url(${item.bgImage})`;
  heroTitle.textContent = item.title;
  heroDesc.textContent = item.desc;
  heroBadge.textContent = item.badge;
}

// Lógica de Rolagem Lateral (Sliders)
function setupSliderScroll() {
  const scrollBtns = document.querySelectorAll('.scroll-btn');
  
  scrollBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Pega o slider irmão do botão clicado
      const slider = btn.parentElement.querySelector('.slider');
      const isLeft = btn.classList.contains('left');
      
      // Rola 300px para a esquerda ou direita
      const scrollAmount = isLeft ? -400 : 400; 
      
      slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });
}

init();