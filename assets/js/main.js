(function(){
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();