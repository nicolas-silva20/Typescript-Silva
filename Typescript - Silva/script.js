"use strict";

// DATOS PRIMITIVOS --------------------

let interMiammi = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log(`Empate`);
    if (equipo1 < equipo2)
        console.log(`Gana FC Dallas`);
}


// ANY --------------------

let disney;
disney = "Star Wars y Marvel";
console.log(disney);
disney = 15000000000;
console.log(disney);
disney = true;
console.log(disney);


// ARRAYS --------------------

let arrayNumeros = [1, 2, 3, 4, 5];
let arrayTexto = ["HTML", "CSS", "JAVASCRIPT"];
arrayTexto.push("TYPESCRIPT");
arrayTexto[0].indexOf("HTML");


// OBJETOS LITERALES --------------------

let programador = {
    nombre: "John Doe",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    tomaMate: true
};
programador = {
    nombre: "Ricardo Buenardo",
    tecnologias: ["C#"],
    tomaMate: false
};
console.log(programador);
let programador1 = {
    nombre: "John Doe",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    tomaMate: true
};
let programador2 = {
    nombre: "Momo",
    tecnologias: ["Java", "C++"],
    tomaMate: null
};
let dev1 = {
    nombre: "John Doe",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    tomaMate: true
};
let dev2 = {
    nombre: "Momo",
    tecnologias: ["Java", "C++"],
    tomaMate: null,
    apellido: "Benavides",
    recibido: false
};
function enviarCV(programador) {
    console.log(`Este CV es de ${programador.nombre}`);
}
enviarCV(dev2);