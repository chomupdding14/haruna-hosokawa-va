(function(){
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  const form = document.getElementById('contact-form'); const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
        if (res.ok) { status.textContent = 'Thanks! Your message has been sent.'; form.reset(); }
        else { status.textContent = 'Submission failed. Please try again.'; }
      } catch (err) { status.textContent = 'Network error. Please try again later.'; }
    });
  }
})();