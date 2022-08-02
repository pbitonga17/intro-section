'use strict';

const menuBtn = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const menuBar = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-icon');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const arrowBtnFeatures = document.querySelector('.arrow-btn1');
const arrowBtnCompany = document.querySelector('.arrow-btn2');

/* OPENING & CLOSING MENU BAR */

menuBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    menuBar.classList.remove('hidden');
})
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    menuBar.classList.add('hidden');
})

/* OPENING & CLOSING FEATURES AND COMPANY BTN */

arrowBtnFeatures.addEventListener('click', () => {
    features.classList.toggle('features-nav');
})
arrowBtnCompany.addEventListener('click', () => {
    company.classList.toggle('company-nav')
})


/* MEDIA QUERY - DESKTOP - */

//const medQ = window.matchMedia('(min-width: 1440px)');

const desktopFeatures = document.querySelector('.arrow-btn-desk1');
const desktopCompany = document.querySelector('.arrow-btn-desk2');
const divFeatures = document.querySelector('.features-desktop');
const divCompany  = document.querySelector('.company-desktop');


desktopFeatures.addEventListener('click', () => {
    divFeatures.classList.toggle('features-desktop-nav');
    console.log(`hello1`)
})
desktopCompany.addEventListener('click', () => {
    divCompany.classList.toggle('company-desktop-nav');
    console.log(`hello2`)
})