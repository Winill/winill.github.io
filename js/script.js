const 
    // main_btn = document.querySelector('.subheader__title'),
    menu =  document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    overlays = [...document.querySelectorAll('.menu__overlay')],
    // container = document.querySelectorAll('.container'),
    containers = [...document.querySelectorAll('.container')],
    main_btns = [...document.querySelectorAll('.subheader__title')];



main_btns.forEach((main_btn, i) => main_btn.addEventListener('click', () => {
  menu.classList.add('active');
  containers[i].classList.add('active');
}));

overlays.forEach((main_btn, i) => main_btn.addEventListener('click', () => {
    menu.classList.remove('active');
    containers[i].classList.remove('active');
  }));

//Click on overlay close window
// overlay.addEventListener('click', () => {
//     menu.classList.remove('active');
// });



// hamburger.addEventListener('click', () => {
//   menu.classList.add('active');
//   container.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
//     container.classList.remove('active');
// });
