// MOBILE NAVBAR
const mobileToggle = document.querySelector('.mobile__toggle-btn');
const navMobile = document.querySelector('.mobile__links');
const navMobileLinks = navMobile.querySelectorAll('a');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navMobile.classList.toggle('active');
});

navMobileLinks.forEach(link => link.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navMobile.classList.toggle('active');
}));


// WEB NAVBAR - fixing
const hero = document.querySelector('#hero');
const navWeb = document.querySelector('.navbar--web');
const topDistanceNavWeb = navWeb.offsetTop;
let titleLeftSpace = (hero.querySelector('.hero__text')).getBoundingClientRect().left;

const navFixed = () => {

    if (window.scrollY >= topDistanceNavWeb) {
        document.body.classList.add('fix');
        document.body.style.paddingTop = navWeb.offsetHeight * 2;
        navWeb.style.marginLeft = `${titleLeftSpace}px`;

    } else {
        document.body.classList.remove('fix');
        document.body.style.paddingTop = 0;
        navWeb.style.marginLeft = `0px`;
    };

};

window.addEventListener('scroll', navFixed);


// SHORCUT ARROWS NAVIGATION
const portfolio = document.querySelector('#portfolio');
const scrollTriggers = document.querySelectorAll('.btn-scroll');

scrollTriggers[0].addEventListener('click', () => {
    portfolio.scrollIntoView({ behavior: "smooth" });
});

scrollTriggers[1].addEventListener('click', () => {
    hero.scrollIntoView({ behavior: "smooth" });
});

// PREVIEW GIF ON HOVER
const staticPreview = document.querySelectorAll('.hasPreview');
let originalImg;

const showGif = (e) => {
    let display = (e.target).querySelector('img');
    originalImg = (e.target).querySelector('img').src;
    let gif = e.target.dataset.gif;
    
    display.setAttribute('src', gif);
};
const hideGif = (e) => {
    let display = (e.target).querySelector('img');
    
    display.setAttribute('src', originalImg);
    originalImg = null;
};

staticPreview.forEach(preview => preview.addEventListener('mouseenter', showGif));
staticPreview.forEach(preview => preview.addEventListener('mouseleave', hideGif));


// COPY EMAIL TO CLIPBOARD
const email = document.querySelector('.email');

email.addEventListener('click', (e) => {
    const initialContent = e.target.textContent;

    window.navigator.clipboard.writeText(initialContent);

    e.target.style.color = "#ff7e6bff";
    e.target.textContent = "Copied!";
    setTimeout(() => {
        e.target.style.color = "#313131";
        e.target.textContent = initialContent;
    }, 1000);
});