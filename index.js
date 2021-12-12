const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

const progress = document.querySelector('.progress-bars-wrapper');
const progressBar = [99, 99, 90, 95, 80];

//pageYOfset  returneaza numarul de pixeli care a fost scrlat in jos de la inceoutul paginii
//offsetTop returneaza distatnade la inceputul paginii pana la element(navbar in cazul nostru)
window.addEventListener('scroll', () => {
    mainFn();
});

const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop)
        navbar.classList.add('sticky');
    else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {

            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            })

            navbarLinks[i].classList.add('change');
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBar[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBar[i];
        });
    }
}

mainFn();

window.addEventListener('resize',()=>{
    window.location.reload();
})