// Header blur

const headerBox = document.querySelector('.header')

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY
    
    if(currentScroll > 1) {
        headerBox.classList.add('header-stop')
    }else {
        headerBox.classList.remove('header-stop')
    }
})

// Scroll Reveal

const animScroll = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
})


animScroll.reveal('.home-content, .popular, .contacts, .footer');
animScroll.reveal('.home-img', {origin: 'bottom', rotate: {z: 15}});
animScroll.reveal('.leaf-left, .coin-left, .coin-right, .leaf-right', {origin: 'left', delay: 600, interval: 100})
animScroll.reveal('.coin-right, .leaf-right', {origin: 'right', delay: 600, interval: 100})
animScroll.reveal('.about-img, .history-content', {origin: 'left'})
animScroll.reveal('.about-content, .history-img', {origin: 'right'})
animScroll.reveal('.product-card', {delay: 500, interval: 100})

// Swiper Slider

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    grabCursor: true,
  });