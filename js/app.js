// Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const counterSpeed = 1500;

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = target / (counterSpeed / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
        counter.parentElement.style.transition = 'color 0.2s ease, transform 0.2s ease';
        counter.parentElement.classList.replace('text-gray-900', 'text-brandRed');
        counter.parentElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
          counter.parentElement.style.transform = 'scale(1)';
        }, 300);
      }
    };
    updateCounter();
  });
};

// Trigger counter animation when section is visible
const valoresSection = counters[0]?.closest('section');
if (valoresSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(valoresSection);
}

// Parallax Effect
const heroBg = document.getElementById('hero-bg');
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroHeight = hero.offsetHeight;

  if (scrolled < heroHeight) {
    heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
  }
});

// CDO Carousel Auto-Rotate
const cdoCarousel = document.getElementById('cdo-carousel');
const cdoDots = document.querySelectorAll('.cdo-dot');
let cdoIndex = 0;
const cdoTotal = 4;

function updateCdoCarousel() {
  cdoCarousel.style.transform = `translateX(-${cdoIndex * 25}%)`;
  cdoDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === cdoIndex);
  });
}

setInterval(() => {
  cdoIndex = (cdoIndex + 1) % cdoTotal;
  updateCdoCarousel();
}, 4000);

cdoDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    cdoIndex = i;
    updateCdoCarousel();
  });
});

updateCdoCarousel();

// Toast for email copied
function copyEmail() {
  navigator.clipboard.writeText('carteles@lekapublicidad.com.ar').then(function () {
    var toast = document.getElementById('email-toast');
    toast.classList.remove('opacity-0', 'invisible');
    toast.classList.add('opacity-100', 'visible');
    setTimeout(function () {
      toast.classList.remove('opacity-100', 'visible');
      toast.classList.add('opacity-0', 'invisible');
    }, 3000);
  });
}

// Get Year for Copyright
document.addEventListener('DOMContentLoaded', function () {
  let d = new Date();
  let n = d.getFullYear();
  document.getElementById('year').innerHTML = n;
});
