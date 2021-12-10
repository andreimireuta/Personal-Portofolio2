const navbar = document.querySelector('.navbar');

//pageYOfset  returneaza numarul de pixeli care a fost scrlat in jos de la inceoutul paginii
//offsetTop returneaza distatnade la inceputul paginii pana la element(navbar in cazul nostru)
window.addEventListener('scroll',()=>{
    if(window.pageYOffset >= navbar.offsetTop )
        navbar.classList.add('sticky');
    else{
        navbar.classList.remove('sticky');
    }
});