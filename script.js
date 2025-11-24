// Небольшая интерактивность: переключение меню и подстановка года
document.getElementById('menuToggle')?.addEventListener('click', function(){
  const nav = document.getElementById('nav');
  if(!nav) return;
  nav.style.display = (nav.style.display === 'flex' || nav.style.display === '') ? 'none' : 'flex';
});

const y = new Date().getFullYear();
document.getElementById('year').textContent = y;
