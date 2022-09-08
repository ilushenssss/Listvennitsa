"use sctrict";
// меню
document.querySelector('.buttonOpen')
    .addEventListener('click', showBlock => {
        document.querySelector('.MobileMenu').classList.remove('dontSeeIN');
    });
document.querySelector('.buttonClose')
    .addEventListener('click', showBlock => {
        document.querySelector('.MobileMenu').classList.add('dontSeeIN');
    });

// поиск
document.querySelector('.Glass')
    .addEventListener('click', showBlock => {
        document.querySelector('.logo').classList.add('dontSeeIN');
        document.querySelector('.logo').classList.remove('ForNeed');
        document.querySelector('.buttonOpen').classList.add('dontSeeIN');
        document.querySelector('.Glass').classList.add('dontSeeIN');
        document.querySelector('.SiteSearch').classList.remove('dontSeeIN');
        document.querySelector('.buttonCloseSearch').classList.remove('dontSeeIN');
    });
document.querySelector('.buttonCloseSearch')
    .addEventListener('click', showBlock => {
        document.querySelector('.logo').classList.remove('dontSeeIN');
        document.querySelector('.logo').classList.add('ForNeed');
        document.querySelector('.buttonOpen').classList.remove('dontSeeIN');
        document.querySelector('.Glass').classList.remove('dontSeeIN');
        document.querySelector('.SiteSearch').classList.add('dontSeeIN');
        document.querySelector('.buttonCloseSearch').classList.add('dontSeeIN');
    });

