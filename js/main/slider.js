$('.slider-review').slick({
    dots: true,
    infinite: true,
    speed: 650,
    fade: true,
    cssEase: 'linear',
    prevArrow: 
    `
    <button class="slider__arrow slider__arrow--left">
    <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 3.57628e-06L30 60L1.78814e-06 30L30 3.57628e-06Z" fill="#FFF"/>
    </svg>
    
    </button>
    `,
    nextArrow: 
    `
    <button class="slider__arrow slider__arrow--right">
    <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 60V0L30 30L0 60Z" fill="#FFF"/>
    </svg>
    </button>
    `,
}); 