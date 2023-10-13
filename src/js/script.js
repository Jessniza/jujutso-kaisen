const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagens');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarPersonagens();
        desselecionarBotao();

        botao.classList.add('select');
        personagens[indice].classList.add('select');
    });
});

function desselecionarPersonagens() {
    const personagensSelecionado = document.querySelector('.personagens.select');
    
    if (personagensSelecionado !== null) {
        personagensSelecionado.classList.remove('select');
    }
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.select");

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('select');
    }
}
