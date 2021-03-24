/* VARIABLES */
const btnScrollTo = document.querySelectorAll('.btn--scroll-to');
const header = document.querySelector('.header');
const servicesSection = document.querySelector('.services-section');
const worksSection = document.querySelector('.works-section');
const teamSection = document.querySelector('.team-section');
const footer = document.querySelector('#contact');
const hamburgerMenu = document.querySelector('#hamburger-menu')
const mainNav = document.querySelector('.nav-ul');

console.log(mainNav);

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


/* FUNCTION: TOGGLE MENU */
// Note: With material icon, the textual name inside the span
// is the icon being rendered. Hence, in this function we are
// checking the text content and toggle the value between menu 
// (being open) & close (being close) 
const toggleHamburger = () => {
    if(hamburgerMenu.textContent === 'menu') {
        hamburgerMenu.textContent = 'close';
        mainNav.classList.remove('nav-ul');
        mainNav.classList.add('js--mobile-ul');
    } else {
        hamburgerMenu.textContent = 'menu';
        mainNav.classList.remove('js--mobile-ul');
        mainNav.classList.add('nav-ul');
    }
}

/* Click Event: Display Hamburger menu */
hamburgerMenu.addEventListener('click', toggleHamburger);