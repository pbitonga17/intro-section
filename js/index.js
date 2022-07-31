'use strict';

const menuBtn = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const menuBar = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-icon');

menuBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    menuBar.classList.remove('hidden');
})
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    menuBar.classList.add('hidden');
})