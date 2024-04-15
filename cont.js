const botoes = document.querySelectorAll('.Objetivo');
const texto = document.querySelectorAll('.aba-conteudo');
//botoes.lenght


for (let i = 0; i < botoes.length; i++){
console.log(i);
   botoes[i].onclick = function(){
    for(let j = 0; j< botoes.length; j++){
        botoes[j].classList.remove('ativo');
        texto[j].classList.remove('ativa');
    }
    botoes[i].classList.add('ativo');
    texto[i].classList.add('ativa');
}

}

const contadores = document.querySelectorAll('.contador');
const TempoObjetivo1 = new Date ('2024-04-16T00:00:00');

let TempoAtual = new Date ();
let tempo = TempoObjetivo1 - TempoAtual;
let segundos = math.floor(TempoFinal/1000);
let minutos = math.floor(segundos/60);
let horas = math.floor(minutos/60);
let dias = math.floor(horas/24);

contadores[0].textContent = dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
