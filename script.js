
const menuBtn = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

const showMenu = () => {
    overlay.classList.toggle('openNav')
}

const animateIcon = () => {
    menuBtn.classList.toggle('active');
}


menuBtn.addEventListener('click', showMenu);
menuBtn.addEventListener('click', animateIcon);


//slider

let activeElement = 0;
const time = 6000;
const elementHtml = document.querySelector('.steakImage');
const dotsHtml = [...document.querySelectorAll('.dot')];

const images = ['./assets/image1.png', './assets/image2.jpg', './assets/image3.jpg'];

const changeImage = () => {
    activeElement++;
    if (activeElement === images.length) {
        activeElement = 0;
    }
    elementHtml.src = images[activeElement];

    dotsHtml.forEach((item, index) => {
        if (activeElement === index) {
            item.classList.add('active-dot')
        } else {
            item.classList.remove('active-dot')
        }
    })
}


setInterval(changeImage, time)