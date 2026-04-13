// Portfolio Modal Data
const modalData = {
  'modal-cercos': {
    images: [
      'img/portofolio/cercos/corredizo/cerco-de-obra-one-place.avif',
      'img/portofolio/cercos/corredizo/cerco-de-obra-as-corredizo.avif',
      'img/portofolio/cercos/corredizo/cerco-de-obra-as-esquina.avif',
      'img/portofolio/cercos/corredizo/cerco-de-obra-falcon.avif',
      'img/portofolio/cercos/corredizo/cerco-de-obra-plz-left.avif',
      'img/portofolio/cercos/corredizo/cerco-de-obra-plz-right.avif',
      'img/portofolio/cercos/corredizo/cerco-de-obra-ramallo-4892.avif',
      'img/portofolio/cercos/corredizo/cerco-de-obra-spinelli.avif',
      'img/portofolio/cercos/doble-hoja/cerco-de-obra-dicaba.avif',
      'img/portofolio/cercos/doble-hoja/cerco-de-obra-bk-ark.avif',
      'img/portofolio/cercos/doble-hoja/cerco-de-obra-bowas.avif',
      'img/portofolio/cercos/doble-hoja/cerco-de-obra-bring.avif',
      'img/portofolio/cercos/doble-hoja/cerco-de-obra-century-21.avif',
      'img/portofolio/cercos/doble-hoja/cerco-de-obra-marcos-paz-4053.avif',
      'img/portofolio/cercos/doble-hoja/cerco-de-obra-palestina.avif',
      'img/portofolio/cercos/sin-apertura/cerco-de-obra-vaccaro.avif',
    ]
  },
  'modal-cdo': {
    images: [
      'img/portofolio/cdo/cartel-de-obra-msk.jpg',
      'img/portofolio/cdo/cartel-de-obra-rio.jpg',
      'img/portofolio/cdo/cartel-de-obra-nsd.jpg',
      'img/portofolio/cdo/cartel-de-obra-breconar.jpg'
    ]
  },
  'modal-carteles': {
    images: [
      'img/portofolio/carteles/cartel-torres-de-caballito.webp',
      'img/portofolio/carteles/cartel-palpa.webp',
      'img/portofolio/carteles/cartel-dumet-propiedades.webp',
      'img/portofolio/carteles/cartel-korn.webp',
      'img/portofolio/carteles/cartel-larral-de-nunez.webp'
    ]
  },
  'modal-gigantografias': {
    images: [
      'img/portofolio/gigantografia/gigantografia-torres-de-caballito.webp',
      'img/portofolio/gigantografia/gigantografia-chateau-libertador.webp'
    ]
  },
  'modal-inmobiliaria': {
    images: [
      'img/portofolio/inmobiliaria/cartel-inmobiliaria-covello.webp',
      'img/portofolio/inmobiliaria/cartel-inmobiliaria-remax.webp'
    ]
  },
  'modal-caballetes': {
    images: [
      'img/portofolio/caballete/caballete-coinsa.avif',
      'img/portofolio/caballete/caballete-msr.avif',
      'img/portofolio/caballete/caballete-schiaffino.avif'
    ]
  },
  'modal-lonas': {
    images: [
      'img/portofolio/lona-forbex.webp'
    ]
  },
  'modal-vinilos': {
    images: [
      'img/portofolio/autoadesivo-covello.webp'
    ]
  },
  'modal-comercios': {
    images: [
      'img/portofolio/comercios/cartel-autoelevadores-hurlingam.webp',
      'img/portofolio/comercios/cartel-aysa.webp',
      'img/portofolio/comercios/cartel-jilguero.webp',
      'img/portofolio/comercios/cartel-open-dorrego.webp',
      'img/portofolio/comercios/cartel-teloguardo.webp',
      'img/portofolio/comercios/cartel-weber.webp'
    ]
  }
};

// Modal State
let currentModal = null;
let currentImageIndex = 0;

// Modal Functions
function openModal(modalId) {
  currentModal = modalId;
  currentImageIndex = 0;
  document.getElementById(modalId).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  updateModalImage();
}

function closeModal() {
  if (currentModal) {
    document.getElementById(currentModal).classList.add('hidden');
    document.body.style.overflow = '';
    currentModal = null;
  }
}

function updateModalImage() {
  if (!currentModal || !modalData[currentModal]) return;
  const data = modalData[currentModal];
  const imgEl = document.getElementById(currentModal + '-img');
  const counterEl = document.getElementById(currentModal + '-counter');
  const descEl = document.getElementById(currentModal + '-desc');
  if (imgEl) {
    imgEl.src = data.images[currentImageIndex];
    if (data.srcsets && data.srcsets[currentImageIndex]) {
      imgEl.srcset = data.srcsets[currentImageIndex];
    }
  }
  if (counterEl) {
    counterEl.textContent = `${currentImageIndex + 1} / ${data.images.length}`;
  }
  if (descEl && data.descriptions && data.descriptions[currentImageIndex]) {
    descEl.textContent = data.descriptions[currentImageIndex];
  }
}

function nextImage(e) {
  if (e) e.stopPropagation();
  if (!currentModal || !modalData[currentModal]) return;
  const data = modalData[currentModal];
  currentImageIndex = (currentImageIndex + 1) % data.images.length;
  updateModalImage();
}

function prevImage(e) {
  if (e) e.stopPropagation();
  if (!currentModal || !modalData[currentModal]) return;
  const data = modalData[currentModal];
  currentImageIndex = (currentImageIndex - 1 + data.images.length) % data.images.length;
  updateModalImage();
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (!currentModal) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});
