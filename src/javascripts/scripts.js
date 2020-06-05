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
    */
}
// registro modal end

// slider
var valorDoSlide = 1;

// essa função inicializa a de slides e decide se deve avançar ou retroceder na sequência
function proximoSlide(n) {
    // showSlides(valorDoSlide += n);

    clearInterval(tempo);
    if (n < 0) {
        showSlides(valorDoSlide -= 1);
    } else {
        showSlides(valorDoSlide += 1);
    }
    //se n for identico a -1
    if (n === -1) {
        tempo = setInterval(() => {
            proximoSlide(n + 2)
        }, 4000);
        // tempo = setInterval(function () {
        //     proximoSlide(n + 2)
        // }, 4000);
    } else {
        // tempo = setInterval(() => {
        //     proximoSlide(n + 1)
        // }, 4000);
        tempo = setInterval(function () {
            proximoSlide(n + 1)
        }, 4000);
    }
}
//  permitir ao usuário selecionar uma imagem específica na apresentação de slides
function currentSlide(n) {
    // Isso limpará qualquer intervalo já existente, para não criar sobreposição entre o intervalo anterior e o novo.
    clearInterval(tempo);
    tempo = setInterval(function () {
        proximoSlide(n + 1)
    }, 4000);

    showSlides(valorDoSlide = n);
}

// A função reúne os elementos do slide e os pontos
function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("slideshow-slides");
    const pontos = document.getElementsByClassName("slideshow-ponto");
    if (n > slides.length) {
        valorDoSlide = 1
    }
    if (n < 1) {
        valorDoSlide = slides.length;
    }

    // valorDoSlide++;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" slideshow-ativo", "");
    }

    slides[valorDoSlide - 1].style.display = "block";
    pontos[valorDoSlide - 1].className += " slideshow-ativo";
    // setTimeout(showSlides, 4000);
}
//movimento do slide. Inicializamos ambos, tempo e valordoslide.
window.addEventListener("load", function () {
    showSlides(valorDoSlide);

    tempo = setInterval(function () {
        proximoSlide(1)
    }), 4000;
})

// funcionalidade Reproduzir / Pausar para quando um usuário passa o mouse sobre a apresentação de slides
const slidecontainer = document.getElementsByClassName("slideshow-container")[0];

slidecontainer.addEventListener("mouseover", pausa);
slidecontainer.addEventListener("mouseout", retomar);
// slidecontainer.addEventListener("mouseenter", pausa);
// slidecontainer.addEventListener("mouseleave", retomar);

function pausa() {
    clearInterval(tempo);
}

function retomar() {
    clearInterval(tempo);
    tempo = setInterval(function () {
        proximoSlide(1)
    }), 4000;
}

// slider end





// submenu
function mostrarSubMenu() {
    document.getElementsByClassName("sub-menu")[0]
        .classList.toggle("mostrarSub-menu");

    //esconder depois de clickar no sub menu
    window.onclick = function (event) {
        if (!event.target.matches('.btncursos')) {
            var dropDowns = document.getElementsByClassName("sub-menu");
            var i;

            for (i = 0; i < dropDowns.length; i++) {
                var abrirDrop = dropDowns[i];
                if (abrirDrop.classList.contains("mostrarSub-menu")) {
                    abrirDrop.classList.remove("mostrarSub-menu");
                }
            }
        }
    }
}
// submenu end

function mostrarSubMenuSubOver() {
    document.getElementsByClassName("sub-menu-sub", "sub-menu")[0]
        .classList.toggle("mostrarSub-menu");
}

// INTERRUPTOR DE TEMAS
//função para definir um determinado tema / esquema de cores
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// função para alternar entre tema claro e escuro
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Função chamada imediatamente para definir o tema no carregamento inicial
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('sliderInput').checked = true;
    } else {
        setTheme('theme-light');
        document.getElementById('sliderInput').checked = false;
    }
})();
// INTERRUPTOR DE TEMAS