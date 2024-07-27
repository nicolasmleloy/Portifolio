var proj1 = document.getElementsByClassName("proj")[0];
var proj2 = document.getElementsByClassName("proj")[1];
var proj3 = document.getElementsByClassName("proj")[2];
var btnEsq = document.getElementById("btn-esq");
var btnDir = document.getElementById("btn-dir");

var projetos = [proj1, proj2, proj3];
var projetoAtual = 0;

function mostrarProjeto(indice) {
  for (var i = 0; i < projetos.length; i++) {
    if (i === indice) {
      projetos[i].style.display = "flex";
    } else {
      projetos[i].style.display = "none";
    }
    projetos[i].style.transition = "1s";
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
  }

  if (projetoAtual === 0) {
    btnEsq.style.backgroundColor = "gray";
    btnEsq.style.opacity = "30%";
    btnEsq.style.transition = "0.5s";
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

mostrarProjeto(projetoAtual);
atualizarBotoes();
