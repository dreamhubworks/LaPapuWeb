window.addEventListener('DOMContentLoaded', () => {
  const tarjetas = document.querySelectorAll('.juego-card');

  tarjetas.forEach(card => {
    const btn = card.querySelector('.toggle-btn');
    const info = card.querySelector('.juego-info');

    btn.addEventListener('click', () => {
      const yaVisible = card.classList.contains('active');

      tarjetas.forEach(c => {
        c.style.display = 'block';
        c.classList.remove('active');
        c.querySelector('.juego-info').style.display = 'none';
        c.querySelector('.toggle-btn').textContent = 'Mostrar más';
      });

      if (!yaVisible) {
        tarjetas.forEach(c => {
          if (c !== card) c.style.display = 'none';
        });
        card.classList.add('active');
        info.style.display = 'block';
        btn.textContent = 'Mostrar menos';
      }
    });
  });

  // Filtro por categoría
  window.filtrar = function (categoria) {
    tarjetas.forEach(card => {
      const visible = categoria === 'todos' || card.classList.contains(categoria);
      card.style.display = visible ? 'block' : 'none';
      card.classList.remove('active');
      card.querySelector('.juego-info').style.display = 'none';
      card.querySelector('.toggle-btn').textContent = 'Mostrar más';
    });
  };
});
