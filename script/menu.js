/*Menu*/

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
  if (e.target === opcoes) {
    fecharMenu();
  }
});

/*Slider de Imagens*/

let radio1 = document.getElementById("radio1");

if(radio1){

    let count = 1;
    radio1.checked = true;

    setInterval(function(){
        proximaImagem();
    },4000);

    function proximaImagem(){
        count++;

        if(count > 3){
            count = 1;
        }

        document.getElementById("radio"+count).checked = true;
    }

}

/*Menu Upper*/

let ultimoScroll = 0;
const header = document.querySelector("header");
const menu = document.querySelector("#menu");

window.addEventListener("scroll", () => {

  let scrollAtual = window.scrollY;

  if(menu.classList.contains("aberto")){
    return;
  }

  if(scrollAtual > ultimoScroll){
    header.classList.add("esconder");
  }else{
    header.classList.remove("esconder");
  }

  ultimoScroll = scrollAtual

});