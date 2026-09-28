// JavaScript Document

var talenKnop= document.querySelector("header > nav >  button[aria-expanded]");

if (talenKnop) {
    talenKnop.onclick = switchTaalMenu;
}

function switchTaalMenu() {
    let Open = talenKnop.getAttribute("aria-expanded") === "true";
    talenKnop.setAttribute("aria-expanded", Open ? "false" : "true")
}