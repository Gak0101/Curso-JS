// Perosnaje de TV

let nombre = "goku";
let anime = "Dragon Ball";
let edad = 16;

let personaje = {
    nombre: "GOKU",
    anime: "Dragon Ball",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);


personaje.edad = 13;

console.log(personaje.edad);

delete personaje.anime;


console.log(personaje);