const botoes = document.querySelectorAll('.Objetivo');
const texto = document.querySelectorALL('.aba-conteudo');

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


//botoes[i].classList.remove('ativo');
}

const contadores = documentSelectorAll('.contador');
const TempoObjetivo1 = new Date ('2024-04-16T00:00:00');

let TempoAtual = New Date ();

