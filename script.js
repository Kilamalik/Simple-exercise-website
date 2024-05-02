const burger = document.querySelector('nav svg');
const signUp = document.querySelector('.ctas .cta-main');
const exploreClasses = document.querySelector('.ctas .cta-sec');
/**
 * @desc - Retrieves object of arrays of child elemets with class name and then convert to array
 */
let links = document.getElementsByClassName('nav-links');
links = Object.values(links);

links.forEach((link) => {
  link.addEventListener('click', () => {
    gsap.to('.links', { x: '100%' });
    gsap.to('.line', { stroke: 'white' });
    gsap.set('body', { overflowY: 'auto' });
  });
});

signUp.addEventListener('click', () => {
  alert('Takes you to an appointment on koalendar.com');
});

exploreClasses.addEventListener('click', () => {
  alert('Not implemented as of now');
});

burger.addEventListener('click', () => {
  /**
   * @func - .classList.toggle('className')
   * @desc - adds and removes the mentioned class name from the element
   */
  burger.classList.toggle('active');
  if (burger.classList.contains('active')) {
    gsap.to('.links', { x: '0%' });
    gsap.to('.line', { stroke: 'black' });
    gsap.fromTo(
      '.links a',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.25, stagger: 0.25 }
    );
    gsap.set('body', { overflow: 'hidden' });
  } else {
    gsap.to('.links', { x: '100%' });
    gsap.to('.line', { stroke: 'white' });
    gsap.set('body', { overflowY: 'auto' });
  }
});

const videos = gsap.utils.toArray('.video');
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});
