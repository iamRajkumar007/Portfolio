// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// read-more
let readMoreBtn = document.querySelector('.btns .btn');
let text = document.querySelector('.aboutContentText');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less';
    }
    else{
        readMoreBtn.innerText = 'Read More';
    }
})

