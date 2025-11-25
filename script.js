// Ленивая загрузка видео через IntersectionObserver
function initLazyVideos() {
  const videos = document.querySelectorAll('video[loading="lazy"]');
  if (!videos.length) return;

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        // Включаем autoplay только когда видео видно
        video.setAttribute('autoplay', '');
        video.play().catch(() => {}); // Игнорируем ошибки автоплея
        videoObserver.unobserve(video);
      }
    });
  }, {
    rootMargin: '100px' // Начинаем загрузку за 100px до появления в viewport
  });

  videos.forEach(video => {
    // Предзагружаем только метаданные
    video.load();
    videoObserver.observe(video);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const pre   = document.querySelector('.preloader');
  const logo  = document.querySelector('.loader-logo');

  /*  когда закончилась заливка ─ запускаем «вылет»  */
  if (logo) {
    logo.addEventListener('animationend', e => {
      if (e.animationName === 'logoFill'){
        logo.classList.add('fly');                // шаг 2
      }
      else if (e.animationName === 'logoFly'){     // шаг 3
        if (pre) pre.classList.add('hide');                // плавно прячем оверлей
        document.body.classList.remove('loading');
        initLazyVideos(); // Инициализируем ленивую загрузку видео после загрузки страницы
      }
    });
  } else {
    document.body.classList.remove('loading');
    initLazyVideos();
  }
});




/* ---------- модалка --------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const btnOrder = document.getElementById('sale');
  const modal = document.getElementById('orderModal');
  
  if (btnOrder && modal) {
    const modalClose = modal.querySelector('.modal__close');
    
    btnOrder.addEventListener('click', e => {
      e.preventDefault();
      modal.classList.add('show');
    });
    
    if (modalClose) {
      modalClose.addEventListener('click', () => modal.classList.remove('show'));
    }
    
    // Закрытие по «ESC» или клику по затемнению
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.remove('show');
    });
    
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') modal.classList.remove('show');
    });
  }

  /* ---------- мобильное меню --------------------------------------------------- */
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });

    // Закрытие меню при выборе пункта
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
    });
  }
});
