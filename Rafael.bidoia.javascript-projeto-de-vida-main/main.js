const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
//Percorrer (iterar) uma lista de elementos
for(let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
                botoes[j].classList.remove("ativo");
                textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
// document.querySelector("#minhaDiv p").textContent = "Chega de calor"
const contadores = document.querySelectorAll(".contador");
let tempoAtual = new Date ();
const tempoObjetivo1 = new Date("2024-04-26T00:00:00");
contadores[0].textContent = tempoObjetivo1 - tempoAtual;