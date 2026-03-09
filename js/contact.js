// EmailJS Configuration
(function () {
  emailjs.init("ljXqQ96bYgHvyAgYA");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = 'ENVIANDO... <i data-lucide="loader-2" animate-spin"></i> ';
  btn.classList.remove('bg-brandRed', 'hover:bg-gray-900');
  btn.classList.add('bg-gray-900');
  lucide.createIcons();
  btn.disabled = true;

  emailjs.sendForm('service_d3zmvo9', 'template_g1qb1zn', this)
    .then(function () {
      btn.innerHTML = 'ENVIADO <i data-lucide="check-circle"></i>';
      btn.classList.remove('bg-gray-900');
      btn.classList.add('bg-green-500');
      document.getElementById('contact-form').reset();
      lucide.createIcons();
      setTimeout(function () {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.classList.remove('bg-green-500');
        btn.classList.add('bg-brandRed');
        lucide.createIcons();
      }, 3000);
    }, function (error) {
      btn.innerHTML = 'HUBO UN ERROR, INTENTA NUEVAMENTE <i data-lucide="x-circle"></i>';
      btn.classList.remove('bg-gray-900');
      btn.classList.add('bg-brandRed');
      lucide.createIcons();
      setTimeout(function () {
        btn.innerHTML = originalText;
        btn.disabled = false;
        lucide.createIcons();
      }, 3000);
    });
});
