const swiper1 = document.querySelector('.swiper1')
const swiper2 = document.querySelector('.swiper2')
const swiper3 = document.querySelector('.swiper3')
const heroSlider = document.querySelector('.hero-slider')

function animate(selector, className, reverse) {
  const swiper = new Swiper(`.${className}`, {
    // Optional parameters
    spaceBetween: 30,
    direction: 'vertical',
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
      delay: 1,
      reverseDirection: reverse,
    },
    speed: 2000,
  })

  // Lets pause the exact slide hovered by the user

  function isHover(e) {
    // This will return true, if the element is hovered
    return e.parentElement.querySelector(':hover') === e
  }

  heroSlider.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(selector)

    if (hovered !== checkHover.hovered) {
      hovered ? swiper.autoplay.stop() : swiper.autoplay.start()
      checkHover.hovered = hovered
    }
  })
}

// Calling the function for each slides

animate(swiper1, 'swiper1', false)
animate(swiper2, 'swiper2', true)
animate(swiper3, 'swiper3', false)

// TEAM SLIDER

const swiper = new Swiper('.swiper-team', {
  breakpoints: {
    // When Display is greater than 991
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

// INITIALIZING ANIMATION ON SCROLL
AOS.init()

const headerMenu = document.getElementById('header')

window.addEventListener('scroll', () => {
  if (this.scrollY >= 100) {
    headerMenu.classList.add('on-scroll')
  } else {
    headerMenu.classList.remove('on-scroll')
  }
})

// VAMILLA TILT INITIALIZATION

VanillaTilt.init(document.querySelectorAll('.box-item'), {})
