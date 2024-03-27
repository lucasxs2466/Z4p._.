alert('Bem vindo');

let nomeUsuario = prompt('qual é o seu nome?');

let texto = document.querySelector('span');

texto.textContent = nomeUsuario;

while (nomeUsuario == ''){
nomeUsuario = prompt('qual é o seu nome?');
}