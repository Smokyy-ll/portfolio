gsap.registerPlugin(ScrollTrigger);

const tlStart = gsap.timeline({})

tlStart.from('.info-author', {
    scale:3,
    duration:2.5,
    opacity:0,
    ease:'bounce',
})