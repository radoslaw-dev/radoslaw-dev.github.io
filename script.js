(() => {
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-navigation');
  if (toggle && nav) {
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Otwórz menu');
      nav.classList.remove('open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        close(); toggle.focus();
      }
    });
    document.addEventListener('click', event => { if (!nav.contains(event.target) && !toggle.contains(event.target)) close(); });
  }
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.09, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach(el => observer.observe(el));
  } else { revealItems.forEach(el => el.classList.add('is-visible')); }
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const inquiryForm = document.getElementById('inquiry-form');
  if (inquiryForm) inquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;
    const data = new FormData(inquiryForm);
    const name = String(data.get('name') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(`Zapytanie o stronę WWW — ${service}`);
    const body = encodeURIComponent(`Cześć Radosław,\n\n${message}\n\nZakres: ${service}\nImię: ${name}\n\nPozdrawiam,\n${name}`);
    window.location.href = `mailto:cis.radoslaw@protonmail.com?subject=${subject}&body=${body}`;
  });
  const copyButton = document.getElementById('copy-email');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const label = copyButton.querySelector('span');
      try {
        await navigator.clipboard.writeText(copyButton.dataset.email);
        label.textContent = 'Skopiowano!';
        setTimeout(() => { label.textContent = 'Kopiuj e-mail'; }, 2200);
      } catch (_) {
        window.location.href = `mailto:${copyButton.dataset.email}`;
      }
    });
  }
})();
