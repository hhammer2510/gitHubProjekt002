const menuButton = document.querySelector('#menu-button');
const wrapper = document.querySelector('#wrapper');
const navElements = document.querySelectorAll('.men-link');
const activeClassName = 'men-active';

function navToggle () {
    wrapper.classList.toggle('active');

}

function remActiveClass () {
navElements.forEach(navElement => {
    navElement.classList.remove('men-active')
});
}

function navElementToggle () {
    remActiveClass ();
    this.classList.add('men-active');
}

function navL (navElement) {
    navElement.addEventListener('click', navElementToggle, false);
}

menuButton.addEventListener('click', navToggle, false);

navElements.forEach(navElement => navL(navElement));
    
   

