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
const TempoObjetivo1 = new Date ('2024-04-30T00:00:00');
const TempoObjetivo2 = new Date ('2024-04-30T00:00:00');
const TempoObjetivo3 = new Date ('2024-04-30T00:00:00');
const TempoObjetivo4 = new Date ('2024-04-30T00:00:00');

let Tempos = {TempoObjetivo1,TempoObjetivo2,TempoObjetivo3,TempoObjetivo4};

function caalculaTempo(tempoObjetivo){
let TempoAtual = new Date ();
let tempo = TempoObjetivo - TempoAtual;
let segundos = Math.floor(TempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %=60;
minutos %=60;
horas %=24

return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}