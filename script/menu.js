const botaoAbrir = document.querySelector('#burguer');
const opcoes = document.querySelector('#menu');
const botaoFechar = document.querySelector('#fechar-menu')

function abrirMenu() {
    opcoes.classList.add('aberto');
    document.body.classList.add('menu-aberto');
}

function fecharMenu() {
    opcoes.classList.remove('aberto');
    document.body.classList.remove('menu-aberto');
}

botaoAbrir.addEventListener('click', abrirMenu)

botaoFechar.addEventListener('click', fecharMenu)

opcoes.addEventListener('click', (e) => {
  if (e.target === overlay) {
    fecharMenu();
  }
});