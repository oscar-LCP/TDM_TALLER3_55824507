import { fetchPokemon } from "./services/api.js";
import { showPokemon } from "./ui/ui.js";

let current = 25; //Pikachu, pokemón inicial

async function loadPokemon(id) {
    const pokemon = await fetchPokemon(id);
    showPokemon(pokemon);
}

// Inicial
loadPokemon(current);

// Botones de navegación
document.querySelector(".prev").addEventListener("click", () => {
    if (current >1) current--;
    loadPokemon(current);
});

document.querySelector(".next").addEventListener("click", () => {
    current++;
    loadPokemon(current);
});