import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate) => {
    gsap.to(position, {
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            immediateRender: false,
        },
        onUpdate,
        duration: 3
    });
    gsap.to(target, {
        x: 1.52,
        y: 0.77,
        z: -1.08,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            immediateRender: false,
        },
        duration: 3,
    });
    gsap.to('.jumbotron-section', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            immediateRender: false,
        },
    });
    gsap.to('.sound-section-content', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            immediateRender: false,
        },
    });
    gsap.to(position, {
        x: 1.56,
        y: 5.0,
        z: 0.011,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            immediateRender: false,
        },
        onUpdate,
    });
    gsap.to(target, {
        x: -0.55,
        y: 0.32,
        z: 0.0,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            immediateRender: false,
        },
    });
    gsap.to('.display-section', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            immediateRender: false,
        },
    });
}