// VAR ->  Padrão
// let -> Variável Mutável 
// const -> Variável Imutável
const pokemonColors = {
    "Caterpie": "rgb(49, 177, 145)",
    "Charmander": "rgb(231, 133, 42)",
    "Pikachu": "rgb(209, 180, 14)",
    "Squirtle": "rgb(68, 192, 223)"
};
s
function shownName(name) {
var tituloH1 = window.document.getElementById('titulo');
const pokemonColor = pokemonColors[name];
tituloH1.innerHTML = `Você escolheu o ${name}`;
tituloH1.style.color = pokemonColor;
}