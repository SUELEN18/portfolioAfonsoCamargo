
// =====================================================
// ARQUIVO: script.js
// Responsável pelas interações do site
// =====================================================


// =====================================================
// MODO CLARO / ESCURO
// =====================================================


// Criamos uma função chamada "mudarTema"
function mudarTema() {


    // Localiza o elemento <body> da página
    const corpo = document.body;


    // Localiza o botão de mudança de tema
    const botao = document.getElementById("botaoTema");


    // Adiciona ou remove a classe "escuro"
    corpo.classList.toggle("escuro");


    // Verifica se o modo escuro está ativado
    if (corpo.classList.contains("escuro")) {


        // Altera o texto do botão
        botao.innerHTML = "☀️ Modo claro";


    } else {


        // Volta para o texto original
        botao.innerHTML = "🌙 Modo escuro";

    }
    
// =====================================================
// CARROSSEL DE FOTOS
// =====================================================


// Guarda o número da foto que está sendo exibida
let slideAtual = 0;


// Localiza todas as fotos/slides do carrossel
const slides = document.querySelectorAll(".slide");


// Localiza as bolinhas indicadoras
const indicadores = document.querySelectorAll(".indicadores button");


// =====================================================
// FUNÇÃO PARA MOSTRAR UMA FOTO
// =====================================================

function mostrarSlide(numero) {


    // Verifica se o número é maior que a última foto
    if (numero >= slides.length) {

        // Volta para a primeira foto
        slideAtual = 0;

    }


    // Verifica se o número é menor que zero
    if (numero < 0) {

        // Vai para a última foto
        slideAtual = slides.length - 1;

    }


    // Esconde todas as fotos
    slides.forEach(function(slide) {

        slide.classList.remove("ativo");

    });


    // Mostra somente a foto atual
    slides[slideAtual].classList.add("ativo");

}


// =====================================================
// FUNÇÃO DOS BOTÕES ← E →
// =====================================================

function mudarSlide(direcao) {


    // Soma 1 ou -1 ao slide atual
    slideAtual = slideAtual + direcao;


    // Mostra a nova foto
    mostrarSlide(slideAtual);

}


// =====================================================
// FUNÇÃO DAS BOLINHAS
// =====================================================

function irParaSlide(numero) {


    // Define qual foto deve aparecer
    slideAtual = numero;


    // Mostra a foto escolhida
    mostrarSlide(slideAtual);

}


// =====================================================
// PASSAGEM AUTOMÁTICA
// =====================================================


// A cada 5 segundos, muda para a próxima foto

setInterval(function() {

    mudarSlide(1);

}, 5000);
}