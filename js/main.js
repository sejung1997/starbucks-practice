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

const badgesEl = document. querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle( function () {
  console.log(window.scrollY)
  if(window.scrollY > 500) {
    // badgesEl.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgesEl, .6, {
      opacity: 0,
      display: 'none'

    })
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    // badgesEl.style.display = 'block';
    gsap.to(badgesEl, .6, {
      opacity: 1,
      display: 'block'

    })
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
 
}, 300))
// ./throttle(함수, 시간)



toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
  
});
// new swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true, //1번슬라이드가 가운데보이기
  loop: true,
  autoplay: {
    delay: 1000 //.5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 요소
    clickable: true // 사용자의 페이지 번호 제어 가능 
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }

})
new Swiper('.awards .swiper-container'), {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
  
}

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    promotionEl.classList.add('hide')
  } 
  else {
    promotionEl.classList.remove('hide')
  }
})

function random(min, max) {
  //.toFixed()를 통해 반환된 문자 데이터를,
  // parseFloat()를 통해 소수점을 가지는 숫자 데이터로 반환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject (selector, delay, size) {

  gsap.to(
    selector,   // 선택자
    random(1.5, 2.5),  // 애니메이션 동작 시간 
    { // 옵션 
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power3.easeOut,
      delay: random(0, delay)
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('.section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,   // 보여짐 여부를 감시할 요소를 지정 
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())

})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear() //2021

