'use strict'

// Contrôle de la lecture de la video par l'internaute

var btn = document.getElementById("btn-control");
var video = document.getElementById('video');

btn.addEventListener('click', function() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Contrôle de la boucle de la video

var count = 1;
video.addEventListener('ended', function() {
    if(count < 3) {
        this.currentTime = 0;
        this.play();
        count++
    }
});

// Gestion du menu pour tablettes et mobiles

var hamb_menu = document.getElementById('hamb-menu');
var nav_content = document.getElementById('menu-deploy');

hamb_menu.addEventListener('click', function() {
    nav_content.classList.toggle('nav-content');
    nav_content.classList.toggle('show-menu');
});
