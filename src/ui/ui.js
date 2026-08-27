export function showPokemon(pokemon) {
    if (!pokemon) return;

    // Datos del Pokemón
    document.getElementById("pokemon-img").src = pokemon.sprite;
    document.getElementById("pokemon-img").alt = `Imagen de ${pokemon.name}`;
    document.getElementById("pokemon-name").textContent = capitalize(pokemon.name);
    document.getElementById("pokemon-id").textContent = "#" +pokemon.id.toString().padStart(3, "0");
    
    // Tipos
    const typesDiv = document.querySelector(".types");
    typesDiv.innerHTML = "";
    pokemon.types.forEach(t => {
        const span = document.createElement("span");
        span.classList.add("type", t);
        span.textContent = capitalize(t);
        typesDiv.appendChild(span);
    });

    // Mostrar modal
    document.getElementById("pokemon-img").onclick = () => showModal(pokemon);
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function showModal(pokemon) {
    const modal = document.getElementById("pokemon-modal");

    //Estadísticas básicas del pokemon
    document.getElementById("modal-img").src = pokemon.sprite;
    document.getElementById("modal-img").alt = `Imagen de ${pokemon.name}`;
    document.getElementById("modal-name").textContent = capitalize(pokemon.name);
    document.getElementById("modal-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    document.getElementById("modal-height").textContent = pokemon.size / 10 + "m";
    document.getElementById("modal-weight").textContent = pokemon.weight / 10 + "kg";

    // Habilidades del pokemon
    const abilitiesList = document.getElementById("modal-abilities");
    abilitiesList.innerHTML = "";

    pokemon.abilities.forEach(ability => {
        const li = document.createElement("li");
        li.textContent = capitalize(ability);
        abilitiesList.appendChild(li);
    });

    // estadísticas del pokemon
    const statsList = document.getElementById("modal-stats");
    statsList.innerHTML = "";
    
    pokemon.stats.forEach(stat => {
        const li = document.createElement("li");
        li.textContent = `${capitalize(stat.stat)}: ${stat.base}`;
        statsList.appendChild(li);
    });

    //modal
    modal.classList.remove("hidden");
}

// Cerrar modal
document.querySelector(".close-modal").addEventListener("click", () => {document.getElementById("pokemon-modal").classList.add("hidden");});