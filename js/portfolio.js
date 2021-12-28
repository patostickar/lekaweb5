// Portfolio Modal Data
const modalData = {
  'modal-cercos': {
    images: [
      'img/portofolio/cercos/cerco-de-obra-one-place-1024.avif',
      'img/portofolio/cercos/cerco-de-obra-spinelli-1024.avif',
      'img/portofolio/cercos/cerco-de-obra-vaccaro-1080.avif',
      'img/portofolio/cercos/cerco-de-obra-falcon-1024.avif',
      'img/portofolio/cercos/cerco-de-obra-marcos-perez-1024.avif',
      'img/portofolio/cercos/cerco-de-obra-pedron-moran-1024.avif',
      'img/portofolio/cercos/cerco-de-obra-emilio-lamarca-1024.avif'
    ],
    srcsets: [
      'img/portofolio/cercos/cerco-de-obra-one-place-320.avif 320w, img/portofolio/cercos/cerco-de-obra-one-place-640.avif 640w, img/portofolio/cercos/cerco-de-obra-one-place-1024.avif 1024w',
      'img/portofolio/cercos/cerco-de-obra-spinelli-320.avif 320w, img/portofolio/cercos/cerco-de-obra-spinelli-640.avif 640w, img/portofolio/cercos/cerco-de-obra-spinelli-1024.avif 1024w',
      'img/portofolio/cercos/cerco-de-obra-vaccaro-320.avif 320w, img/portofolio/cercos/cerco-de-obra-vaccaro-640.avif 640w, img/portofolio/cercos/cerco-de-obra-vaccaro-1080.avif 1080w',
      'img/portofolio/cercos/cerco-de-obra-falcon-320.avif 320w, img/portofolio/cercos/cerco-de-obra-falcon-640.avif 640w, img/portofolio/cercos/cerco-de-obra-falcon-1024.avif 1024w',
      'img/portofolio/cercos/cerco-de-obra-marcos-perez-320.avif 320w, img/portofolio/cercos/cerco-de-obra-marcos-perez-640.avif 640w, img/portofolio/cercos/cerco-de-obra-marcos-perez-1024.avif 1024w',
      'img/portofolio/cercos/cerco-de-obra-pedron-moran-320.avif 320w, img/portofolio/cercos/cerco-de-obra-pedron-moran-640.avif 640w, img/portofolio/cercos/cerco-de-obra-pedron-moran-1024.avif 1024w',
      'img/portofolio/cercos/cerco-de-obra-emilio-lamarca-320.avif 320w, img/portofolio/cercos/cerco-de-obra-emilio-lamarca-640.avif 640w, img/portofolio/cercos/cerco-de-obra-emilio-lamarca-1024.avif 1024w'
    ],
    descriptions: [
      'Cercos de obra reglamentarios - One Place',
      'Cerco de obra con portón corredizo - Spinelli',
      'Cerco de obra moderno - Vaccaro',
      'Cerco de obra para construcción - Falcon',
      'Cerco de obra - Marcos Pérez',
      'Cerco de obra - Pedrón Moran',
      'Cerco de obra - Emilio Lamarca'
    ]
  },
  'modal-cdo': {
    images: [
      'img/portofolio/cdo/cartel-de-obra-msk.jpg',
      'img/portofolio/cdo/cartel-de-obra-rio.jpg',
      'img/portofolio/cdo/cartel-de-obra-nsd.jpg',
      'img/portofolio/cdo/cartel-de-obra-breconar.jpg'
    ],
    descriptions: [
      'Cartel de Obra - MSK',
      'Cartel de Obra - Río',
      'Cartel de Obra - NSD',
      'Cartel de Obra - Breconar'
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
      'img/portofolio/caballete/caballete-olleros.webp',
      'img/portofolio/caballete/caballete-garcia-del-rio.webp',
      'img/portofolio/caballete/caballete-chivilcoy.webp',
      'img/portofolio/caballete/caballete-soae.webp'
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

function nextImage() {
  if (!currentModal || !modalData[currentModal]) return;
  const data = modalData[currentModal];
  currentImageIndex = (currentImageIndex + 1) % data.images.length;
  updateModalImage();
}

function prevImage() {
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
