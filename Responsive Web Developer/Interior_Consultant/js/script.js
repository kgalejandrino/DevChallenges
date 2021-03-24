/* VARIABLES */
const menu = document.querySelector('#icon-menu');
const navigationModal = document.querySelector('.js-modal-nav');
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('li');

/* HELPER FUNCTION: LOOPS LINK */
const iterateNavLink = (add, toggle) => {
    for(let i = 0; i < navLink.length; i++) {
        navLink[i].classList.toggle(add);
    }
}
/* FUNCTION: TOGGLE MENU */
// Note: With material icon, the textual name inside the span
// is the icon being rendered. Hence, in this function we are
// checking the text content and toggle the value between menu 
// (being open) & close (being close) 
const toggleMenu = () => {
    if(menu.textContent === 'menu') {
        menu.textContent = 'close';
        navigationModal.style.display = 'block';
        iterateNavLink('js-mobile-link', 'add');
        nav.classList.remove('main-nav');
        nav.classList.add('js-mobile-nav');
    } else {
        menu.textContent = 'menu';
        navigationModal.style.display = 'none';
        iterateNavLink('js-mobile-link', 'remove');
        nav.classList.remove('js-mobile-nav');
        nav.classList.add('main-nav');
    }
}

menu.addEventListener('click', toggleMenu);