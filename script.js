// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


// Select all sections
const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
  // Animate the heading
  gsap.fromTo(
    section.querySelector('h1'),
    {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // Animate the paragraph
  gsap.fromTo(
    section.querySelector('p'),
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
});

// Animate experience items
gsap.utils.toArray('.experience-item').forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Animate education items
gsap.utils.toArray('.education-item').forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Animate project items
gsap.utils.toArray('.project-item').forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Animate certifications list
gsap.from('.certifications-section ul li', {
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.certifications-section',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
});

// Animate skill categories
gsap.utils.toArray('.skill-category').forEach((category, index) => {
  gsap.from(category, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: index * 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: category,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Animate contact details
gsap.from('.contact-details p', {
  opacity: 0,
  x: -30,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact-details',
    start: 'top 85%',
    toggleActions: 'play none none reverse',
  },
});

// ScrollSpy to highlight active navigation link
sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => setActiveLink(section.id),
    onEnterBack: () => setActiveLink(section.id),
  });
});

function setActiveLink(id) {
  document.querySelectorAll('nav .nav-links a').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}


const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const courseList = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Toggle the visibility
    courseList.hidden = isExpanded ? true : false;
    button.setAttribute('aria-expanded', !isExpanded);

    // Optionally, scroll to the expanded content
    if (!isExpanded) {
      gsap.to(window, { duration: 0.5, scrollTo: courseList, offsetY: 70 });
    }
  });
});