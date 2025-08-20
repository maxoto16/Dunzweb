import './style.css'

// Welcome to Dunzweb - A modern web application
console.log('Welcome to Dunzweb!')

document.querySelector('#app').innerHTML = `
  <div>
    <h1>🌐 Dunzweb</h1>
    <p class="subtitle">
      Una aplicación web moderna construida con Vite
    </p>
    <div class="content">
      <p>
        Bienvenido a <strong>Dunzweb</strong>, una aplicación web rápida y moderna 
        desarrollada con las últimas tecnologías web.
      </p>
      <ul class="features">
        <li>⚡ Construido con Vite para desarrollo ultrarrápido</li>
        <li>🎨 Diseño responsive y moderno</li>
        <li>🚀 Desplegado automáticamente con GitHub Pages</li>
        <li>💻 Optimizado para rendimiento</li>
      </ul>
      <div class="actions">
        <button id="explore-btn" class="btn primary">Explorar</button>
        <button id="contact-btn" class="btn secondary">Contacto</button>
      </div>
    </div>
    <footer>
      <p>Desarrollado con ❤️ para la web moderna</p>
    </footer>
  </div>
`

// Add interactivity
document.getElementById('explore-btn').addEventListener('click', () => {
  alert('¡Gracias por explorar Dunzweb! Esta es una aplicación de demostración.')
})

document.getElementById('contact-btn').addEventListener('click', () => {
  alert('Contacto: Esta aplicación está disponible en GitHub.')
})