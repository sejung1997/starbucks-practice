const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const badgesEl = document.querySelector('header .badges')
window.addEventListener('scroll', _.throttle(function () {
  if(window.scrollY > 500) {
    gsap.to(badgesEl, .6, {
      opacity: 0,
      display:'none'
      
    })
  }
  else{
    gsap.to(badgesEl, .6, {
      opacity:1,
      display:'block'
    })
  }
}, 300))

const visualEls = document.querySelectorAll('.visual .fade-in')
visualEls.forEach( (visualEl, index) => {
  gsap.to(visualEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7
  })
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  loop: true,
  autoplay: true
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,

  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }


})

const promotionEl = document.querySelector('.promotion')
const togglePromotionEl = document.querySelector('.toggle-promotion')
let  isHidePromotion = false

togglePromotionEl.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    promotionEl.classList.add('hide')
  }
  else {
    promotionEl.classList.remove('hide')
  }
})

