// EmailJS Configuration
(function() {
  emailjs.init("ljXqQ96bYgHvyAgYA");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> ENVIANDO...';
  btn.disabled = true;
  
  emailjs.sendForm('service_d3zmvo9', 'template_g1qb1zn', this)
    .then(function() {
      btn.innerHTML = '<i data-lucide="check-circle" class="w-5 h-5"></i> ENVIADO!';
      btn.classList.remove('bg-brandRed');
      btn.classList.add('bg-green-500');
      document.getElementById('contact-form').reset();
      setTimeout(function() {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.classList.add('bg-brandRed');
        btn.classList.remove('bg-green-500');
        lucide.createIcons();
      }, 3000);
    }, function(error) {
      btn.innerHTML = '<i data-lucide="alert-circle" class="w-5 h-5"></i> ERROR';
      btn.classList.remove('bg-brandRed');
      btn.classList.add('bg-red-500');
      setTimeout(function() {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.classList.add('bg-brandRed');
        btn.classList.remove('bg-red-500');
        lucide.createIcons();
      }, 3000);
    });
});
