"use sctrict";
document.querySelector('.buttonOpen')
    .addEventListener('click', showBlock => {
        document.querySelector('.MobileMenu').classList.remove('dontSeeIN');
    });
document.querySelector('.buttonClose')
    .addEventListener('click', showBlock => {
        document.querySelector('.MobileMenu').classList.add('dontSeeIN');
    });
