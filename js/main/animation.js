gsap.registerPlugin(ScrollTrigger);

const tlStart = gsap.timeline({})

tlStart.from('.info-author', {
    scale:3,
    duration:2.5,
    opacity:0,
    ease:'bounce',
})

gsap.from('.skills-card',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.skills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
})