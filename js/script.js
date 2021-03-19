/* VARIABLES */
const btnScrollTo = document.querySelectorAll('.btn--scroll-to');
const header = document.querySelector('.header');
const servicesSection = document.querySelector('.services-section');
const worksSection = document.querySelector('.works-section');
const teamSection = document.querySelector('.team-section');
const footer = document.querySelector('#contact');


/* FUNCTION: Smooth Scrolling */
const smoothScroll = (section) => {
    const coords = section.getBoundingClientRect();
        
    window.scrollTo({
     left: coords.left + window.pageXOffset,
     top: coords.top + window.pageYOffset,
     behavior: 'smooth',
   });
}

/* Click Event: Scroll to Section */
btnScrollTo.forEach(links => {
    links.addEventListener('click', () => {
        switch(links.textContent) {
            case 'Services':
                smoothScroll(servicesSection);
                break;
            case 'Our Works':
                smoothScroll(worksSection);
                break;
            case 'Clients':
                smoothScroll(teamSection);
                break;
            case 'Contact':
                smoothScroll(footer);
                break;  
        }
    });
});