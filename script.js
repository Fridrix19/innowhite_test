
document.addEventListener('DOMContentLoaded', () => {

  const pre   = document.querySelector('.preloader');
  const logo  = document.querySelector('.loader-logo');

  /*  когда закончилась заливка ─ запускаем «вылет»  */
  logo.addEventListener('animationend', e => {
    if (e.animationName === 'logoFill'){
      logo.classList.add('fly');                // шаг 2
    }
    else if (e.animationName === 'logoFly'){     // шаг 3
      pre.classList.add('hide');                // плавно прячем оверлей
      document.body.classList.remove('loading');
    }
  });

});




/* ---------- модалка --------------------------------------------------- */
const btnOrder   = document.getElementById('sale');
const modal      = document.getElementById('orderModal');
const modalClose = modal.querySelector('.modal__close');

btnOrder.addEventListener('click', e => {
  e.preventDefault();                 // не переходим по ссылке
  modal.classList.add('show');
});

modalClose.addEventListener('click', ()=>modal.classList.remove('show'));

// закрытие по «ESC» или клику по затемнению
modal.addEventListener('click', e=>{
  if(e.target===modal) modal.classList.remove('show');
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape') modal.classList.remove('show');
});


    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');

    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Закрытие меню при выборе пункта
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });


  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
  });
