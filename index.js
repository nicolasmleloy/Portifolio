var projetoHub = document.getElementsByClassName("proj")[0];
var projAndroid = document.getElementsByClassName("proj")[1];
var projAlgoritmos = document.getElementsByClassName("proj")[2];
var projInstagram = document.getElementsByClassName("proj")[3];
var projDevWeb = document.getElementsByClassName("proj")[4];
var btnEsq = document.getElementById("btn-esq");
var btnDir = document.getElementById("btn-dir");

var projetos = [
    projetoHub,
    projAndroid,
    projAlgoritmos,
    projInstagram,
    projDevWeb,
];
var projetoAtual = 0;

function mostrarProjeto(indice) {
    for (var i = 0; i < projetos.length; i++) {
        if (i === indice) {
            projetos[i].style.display = "flex";
            projetos[i].style.opacity = "100%";
            projetos[i].style.pointerEvents = "all";
        } else {
            projetos[i].style.opacity = "20%";
            projetos[i].style.pointerEvents = "none";
        }
    }
}

function atualizarBotoes() {
    if (projetoAtual === projetos.length - 1) {
        btnDir.style.backgroundColor = "gray";
        btnDir.style.opacity = "30%";
        btnDir.style.transition = "0.5s";
    } else {
        btnDir.style.backgroundColor = "#0047AB";
        btnDir.style.opacity = "100%";
        btnDir.style.transition = "0.5s";
        btnEsq.style.animation = "none";
        btnDir.style.animation = "none";
    }

    if (projetoAtual === 0) {
        btnEsq.style.backgroundColor = "gray";
        btnEsq.style.opacity = "30%";
        btnEsq.style.transition = "0.5s";
        btnDir.style.animation = "ampliar 1.5s linear infinite";
    } else {
        btnEsq.style.backgroundColor = "#0047AB";
        btnEsq.style.opacity = "100%";
        btnEsq.style.transition = "0.5s";
    }
}

btnDir.addEventListener("click", () => {
    projetoAtual = projetoAtual + 1;
    if (projetoAtual === projetos.length) {
        projetoAtual = projetos.length - 1;
    }
    atualizarBotoes();
    mostrarProjeto(projetoAtual);
});

btnEsq.addEventListener("click", () => {
    projetoAtual = projetoAtual - 1;
    if (projetoAtual === -1) {
        projetoAtual = 0;
    }
    atualizarBotoes();
    mostrarProjeto(projetoAtual);
});

if (window.innerWidth >= 1160) {
    mostrarProjeto(projetoAtual);
    atualizarBotoes();
}
