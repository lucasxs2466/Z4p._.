alert('Bem vindo');

let nomeUsuario = '';
let texto = document.querySelector('span');

while (nomeUsuario == ''){
 nomeUsuario = prompt('qual é o seu nome?');
}

texto.textContent = nomeUsuario;