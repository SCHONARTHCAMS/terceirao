const botoes = document.querySelectorAll (".botao");
const textos = document.querySelectorAll (".aba-conteudo");

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-01-10T00:00:00");
function calculaTempo(tempoObjetivo){
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
let segundos = Math.floor(tempoFinal / 1000);
let minuto  = Math.floor(segundos / 60);
let hora  = Math.floor(minuto / 60);
let dia  = Math.floor(horas / 24);
}