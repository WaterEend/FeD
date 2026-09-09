// JavaScript Document
const deMenuButton = document.querySelector('header ul li:nth-of-type(5) button')
const deNav = document.querySelector('nav')

deMenuButton.onclick = open;

function open() {
    deNav.classList.toggle('gaat-open')
    deMenuButton.classList.toggle('gaat-open')
}