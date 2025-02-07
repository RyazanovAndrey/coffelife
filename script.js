const headerBox = document.querySelector('.header')

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY
    
    if(currentScroll > 1) {
        headerBox.classList.add('header-stop')
    }else {
        headerBox.classList.remove('header-stop')
    }
})

const animScroll = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
})

animScroll.reveal('.home-content');
animScroll.reveal('.home-img', {origin: 'bottom', rotate: {z: 15}});
animScroll.reveal('.leaf-left, .coin-left, .coin-right, .leaf-right', {origin: 'left', delay: 600, interval: 100})
animScroll.reveal('.coin-right, .leaf-right', {origin: 'right', delay: 600, interval: 100})
animScroll.reveal('.about-img', {origin: 'left'})
animScroll.reveal('.about-content', {origin: 'right'})