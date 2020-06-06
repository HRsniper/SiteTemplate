/*
//registro modal
function registro() {
    const open = document.getElementById('registrarSE');
    const close = document.getElementById('btnFecharModal');
    const registro = document.getElementById('registro');


    open.onclick = function () {
        registro.classList.remove("esconderRegistro");
        registro.classList.add("mostraRegistro");
        // registro.style.display = "flex";
    }

    close.onclick = function () {
        registro.classList.add("esconderRegistro");
        registro.classList.remove("mostraRegistro");
        // registro.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == registro) {
            registro.classList.add("esconderRegistro");
            registro.classList.remove("mostraRegistro");
            // registro.style.display = "none";
        }
    }

    // window.onmouseover = function (event) {
    //     registro.style.cursor = "pointer";
    // }
}

function logar() {

    const openL = document.getElementById('logarSE');
    const closeL = document.getElementById('btnFecharModal2');
    const Logar = document.getElementById('logar');

    openL.onclick = function () {
        Logar.classList.remove("esconderRegistro");
        Logar.classList.add("mostraRegistro");
        // registro.style.display = "flex";
    }

    closeL.onclick = function () {
        Logar.classList.add("esconderRegistro");
        Logar.classList.remove("mostraRegistro");
        // registro.style.display = "none";
    }
    /*
    window.onclick = function (event) {
        if (event.target == Logar) {
            Logar.classList.add("esconderRegistro");
            Logar.classList.remove("mostraRegistro");
            // registro.style.display = "none";
        }
    }
}

// registro modal end
*/
/* SLIDESHOW */
var valueSlide = 1;

// essa função inicializa a de slides e decide se deve avançar ou retroceder na sequência
function prevNextSlide(n) {

    clearInterval(time);
    if (n < 0) {
        showSlides(valueSlide -= 1);
    } else {
        showSlides(valueSlide += 1);
    }
    //se n for identico a -1
    if (n === -1) {
        time = setInterval(function () {
            prevNextSlide(n + 2)
        }, 4000);
    } else {
        time = setInterval(function () {
            prevNextSlide(n + 1)
        }, 4000);
    }
}


// allow the user to select a specific slide with dots elements
function currentSlide(n) {

    // This will clear any existing range, so as not to create overlap between the previous range and the new one
    clearInterval(time);
    time = setInterval(function () {
        prevNextSlide(n + 1)
    }, 4000);

    showSlides(valueSlide = n);
}

// main function that brings together slides elements and dots elements
function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("slideShowSlides");
    const dots = document.getElementsByClassName("slideShowDots");
    if (n > slides.length) {
        valueSlide = 1
    }
    if (n < 1) {
        valueSlide = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideShowActive", "");
    }

    slides[valueSlide - 1].style.display = "block";
    dots[valueSlide - 1].className += " slideShowActive";
}

// automatic slide loading
window.addEventListener("load", function () {
    showSlides(valueSlide);

    time = setInterval(function () {
        prevNextSlide(1)
    }), 4000;
})

// Play / Pause function for when a user hovers over the slide show
const slidecontainer = document.getElementsByClassName("slideShowContainer")[0];

slidecontainer.addEventListener("mouseover", pause);
slidecontainer.addEventListener("mouseout", resume);
// slidecontainer.addEventListener("mouseenter", pause);
// slidecontainer.addEventListener("mouseleave", resume);

function pause() {
    clearInterval(time);
}

function resume() {
    clearInterval(time);
    time = setInterval(function () {
        prevNextSlide(1)
    }), 4000;
}
/* SLIDESHOW */

/* SUBMENU */
function showSubMenu() {
    document.getElementsByClassName("subMenu")[0]
        .classList.toggle("showSubMenu");

    // hide after clicking on or outside the submenu
    window.onclick = function (event) {
        if (!event.target.matches('.buttonShowSubMenu')) {
            var dropDowns = document.getElementsByClassName("subMenu");
            var i;

            for (i = 0; i < dropDowns.length; i++) {
                var abrirDrop = dropDowns[i];
                if (abrirDrop.classList.contains("showSubMenu")) {
                    abrirDrop.classList.remove("showSubMenu");
                }
            }
        }
    }
}
/* SUBMENU */

/* 
function mostrarSubMenuSubOver() {
    document.getElementsByClassName("sub-menu-sub", "sub-menu")[0]
        .classList.toggle("mostrarSub-menu");
    }
    */
// INTERRUPTOR DE TEMAS
// função para definir um determinado tema / esquema de cores
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// função para alternar entre tema claro e escuro
function toggleTheme() {
    if (localStorage.getItem('theme') === 'themeDark') {
        setTheme('themeLight');
    } else {
        setTheme('themeDark');
    }
}

// Função chamada imediatamente para definir o tema no carregamento inicial
(function () {
    if (localStorage.getItem('theme') === 'themeDark') {
        setTheme('themeDark');
        document.getElementById('slider').checked = true;
    } else {
        setTheme('themeLight');
        document.getElementById('slider').checked = false;
    }
})();
// INTERRUPTOR DE TEMAS