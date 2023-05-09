let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggler-btn');

toggleBtn.onclick = () => {
    themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.backgroundColor;
        document.querySelector(':root').style.setProperty('--primary-color', color);
    }
});

const swiperEl = document.querySelector('.review-slider')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();