alert('Bem vindo');

let nomeUsuario = '';
let texto = document.querySelector('span');

while (nomeUsuario == ''){
 nomeUsuario = prompt('qual é o seu nome?');
}

if(nomeUsuario == null){
   texto.textContent = 'sr(a)'; 
} else{
    texto.textContent = nomeUsuario;
}

