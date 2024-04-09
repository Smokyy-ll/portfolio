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


gsap.from('.project-card',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.my-works',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
})

gsap.from('.footer__content',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.footer',
        start: 'top 150%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
})

gsap.from('.reviews',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.reviews',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse',
    }
})


function paralax() {
    const preview = document.querySelector('.preview');
    const initialX = preview.offsetLeft + preview.offsetWidth / 2;
    const initialY = preview.offsetTop + preview.offsetHeight / 2;

    document.addEventListener('mousemove', function(event){
    const mouseX = event.clientX - initialX;
    const mouseY = event.clientY - initialY;
    
    
    gsap.to(
        '.avatar__shadow--color1', 
        {
            x: -mouseX * 0.0125, 
            y: mouseY * 0.0125, 
            ease: 'power2.out' ,
        },);
        
    gsap.to(
        '.avatar__shadow--color2', 
        {
        x: mouseX * 0.015, 
        y: -mouseY * 0.015, 
        ease: 'power2.out' ,
        },);
        
        gsap.to(
        '.avatar__photo', 
        {
        x: -mouseX * 0.02, 
        y: -mouseY * 0.02, 
        ease: 'power2.out' ,
        },);

    //     gsap.to(
    //     '#bgcode', 
    //     {
    //     x: mouseX * 0.01, 
    //     y: -mouseY * 0.01, 
    //     ease: 'power2.out' ,
    //     },);

    
    }) 
}

paralax()
