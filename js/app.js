const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.topnav ul');
// const links = documents.querySelectorAll('topnav a li');

// hamburger.addEventListener('mouseout', () => {
//     navLinks.classList.toggle('open');
// })

// hamburger.addEventListener('mouseover', () => {
//     navLinks.classList.toggle('open');
// })

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})