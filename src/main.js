import './style.css'

// Welcome to Dunzweb - Game Store Platform
console.log('Welcome to Dunzweb Game Store!')

// Sample games data for the catalog
const sampleGames = [
  {
    id: 1,
    title: "Aventura Épica",
    price: "$29.99",
    image: "🎮",
    description: "Una aventura épica llena de magia y misterio",
    genre: "RPG"
  },
  {
    id: 2,
    title: "Racing Thunder",
    price: "$19.99",
    image: "🏎️",
    description: "Carreras de alta velocidad con gráficos impresionantes",
    genre: "Racing"
  },
  {
    id: 3,
    title: "Puzzle Master",
    price: "$14.99",
    image: "🧩",
    description: "Desafía tu mente con puzzles únicos",
    genre: "Puzzle"
  },
  {
    id: 4,
    title: "Space Explorer",
    price: "$39.99",
    image: "🚀",
    description: "Explora galaxias lejanas en esta aventura espacial",
    genre: "Adventure"
  },
  {
    id: 5,
    title: "Medieval Quest",
    price: "$24.99",
    image: "⚔️",
    description: "Conviértete en un héroe medieval legendario",
    genre: "Action"
  },
  {
    id: 6,
    title: "Cyber City",
    price: "$34.99",
    image: "🌃",
    description: "Supervivencia en un mundo cyberpunk futurista",
    genre: "Action"
  }
];

// Application state
let currentView = 'home';

// Render functions
function renderHome() {
  return `
    <div class="home-container">
      <header class="header">
        <h1 class="logo">🎮 Dunzweb</h1>
        <nav class="navigation">
          <button id="home-btn" class="nav-btn ${currentView === 'home' ? 'active' : ''}">Inicio</button>
          <button id="catalog-btn" class="nav-btn ${currentView === 'catalog' ? 'active' : ''}">Catálogo</button>
          <button id="contact-btn" class="nav-btn ${currentView === 'contact' ? 'active' : ''}">Contacto</button>
        </nav>
      </header>
      
      <main class="main-content">
        <section class="hero">
          <h2 class="hero-title">Descubre los Mejores Juegos</h2>
          <p class="hero-subtitle">
            Tu tienda de videojuegos favorita con los títulos más emocionantes
          </p>
          <div class="hero-actions">
            <button id="explore-catalog-btn" class="btn primary">Explorar Catálogo</button>
            <button id="learn-more-btn" class="btn secondary">Saber Más</button>
          </div>
        </section>
        
        <section class="features">
          <h3>¿Por qué elegir Dunzweb?</h3>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <h4>Descarga Instantánea</h4>
              <p>Obtén tus juegos al instante después de la compra</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">💎</div>
              <h4>Calidad Premium</h4>
              <p>Solo los mejores títulos seleccionados para ti</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🛡️</div>
              <h4>Compra Segura</h4>
              <p>Transacciones protegidas y garantía de satisfacción</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderCatalog() {
  return `
    <div class="catalog-container">
      <header class="header">
        <h1 class="logo">🎮 Dunzweb</h1>
        <nav class="navigation">
          <button id="home-btn" class="nav-btn ${currentView === 'home' ? 'active' : ''}">Inicio</button>
          <button id="catalog-btn" class="nav-btn ${currentView === 'catalog' ? 'active' : ''}">Catálogo</button>
          <button id="contact-btn" class="nav-btn ${currentView === 'contact' ? 'active' : ''}">Contacto</button>
        </nav>
      </header>
      
      <main class="main-content">
        <section class="catalog-header">
          <h2>Catálogo de Juegos</h2>
          <p>Descubre nuestra increíble colección de videojuegos</p>
        </section>
        
        <div class="games-grid">
          ${sampleGames.map(game => `
            <div class="game-card">
              <div class="game-image">${game.image}</div>
              <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <div class="game-meta">
                  <span class="game-genre">${game.genre}</span>
                  <span class="game-price">${game.price}</span>
                </div>
                <button class="btn buy-btn" data-game-id="${game.id}">Comprar Ahora</button>
              </div>
            </div>
          `).join('')}
        </div>
      </main>
    </div>
  `;
}

function renderContact() {
  return `
    <div class="contact-container">
      <header class="header">
        <h1 class="logo">🎮 Dunzweb</h1>
        <nav class="navigation">
          <button id="home-btn" class="nav-btn ${currentView === 'home' ? 'active' : ''}">Inicio</button>
          <button id="catalog-btn" class="nav-btn ${currentView === 'catalog' ? 'active' : ''}">Catálogo</button>
          <button id="contact-btn" class="nav-btn ${currentView === 'contact' ? 'active' : ''}">Contacto</button>
        </nav>
      </header>
      
      <main class="main-content">
        <section class="contact-section">
          <h2>Contacto</h2>
          <p>¿Tienes alguna pregunta? Nos encantaría ayudarte</p>
          
          <div class="contact-info">
            <div class="contact-card">
              <div class="contact-icon">📧</div>
              <h3>Email</h3>
              <p>soporte@dunzweb.com</p>
            </div>
            <div class="contact-card">
              <div class="contact-icon">💬</div>
              <h3>Chat en Vivo</h3>
              <p>Disponible 24/7 para asistencia inmediata</p>
            </div>
            <div class="contact-card">
              <div class="contact-icon">🐙</div>
              <h3>GitHub</h3>
              <p>Proyecto disponible en código abierto</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

// Navigation function
function navigateTo(view) {
  currentView = view;
  render();
}

// Main render function
function render() {
  let content = '';
  
  switch(currentView) {
    case 'catalog':
      content = renderCatalog();
      break;
    case 'contact':
      content = renderContact();
      break;
    default:
      content = renderHome();
  }
  
  document.querySelector('#app').innerHTML = content;
  attachEventListeners();
}

// Event listeners
function attachEventListeners() {
  // Navigation buttons
  const homeBtn = document.getElementById('home-btn');
  const catalogBtn = document.getElementById('catalog-btn');
  const contactBtn = document.getElementById('contact-btn');
  
  if (homeBtn) homeBtn.addEventListener('click', () => navigateTo('home'));
  if (catalogBtn) catalogBtn.addEventListener('click', () => navigateTo('catalog'));
  if (contactBtn) contactBtn.addEventListener('click', () => navigateTo('contact'));
  
  // Hero actions
  const exploreCatalogBtn = document.getElementById('explore-catalog-btn');
  const learnMoreBtn = document.getElementById('learn-more-btn');
  
  if (exploreCatalogBtn) {
    exploreCatalogBtn.addEventListener('click', () => navigateTo('catalog'));
  }
  
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
      alert('¡Dunzweb es tu destino para los mejores videojuegos! Explora nuestro catálogo y encuentra tu próxima aventura.');
    });
  }
  
  // Buy buttons
  const buyButtons = document.querySelectorAll('.buy-btn');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const gameId = e.target.getAttribute('data-game-id');
      const game = sampleGames.find(g => g.id == gameId);
      alert(`¡Gracias por tu interés en "${game.title}"! Funcionalidad de compra próximamente disponible.`);
    });
  });
}

// Initialize the application
render();