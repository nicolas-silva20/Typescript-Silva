// DATOS PRIMITIVOS --------------------

let interMiammi: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {
    let motivo: string = ""
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi"
    }
    if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2) console.log(`Empate`);
    if (equipo1 < equipo2) console.log(`Gana FC Dallas`);

}



// ANY --------------------

let disney: any;

disney = "Star Wars y Marvel"
console.log(disney);

disney = 15000000000
console.log(disney);

disney = true
console.log(disney);



// ARRAYS --------------------

let arrayNumeros: number[] = [1, 2, 3, 4, 5]

let arrayTexto: string[] = ["HTML", "CSS", "JAVASCRIPT"]


arrayTexto.push("TYPESCRIPT")
arrayTexto[0].indexOf("HTML")



// OBJETOS LITERALES --------------------

let programador = {
    nombre: "John Doe",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    tomaMate: true
}

programador = {
    nombre: "Ricardo Buenardo",
    tecnologias: ["C#"],
    tomaMate: false
}

console.log(programador)



// TYPE PERSONALIZADO --------------------

type Programador = {
    nombre: string,
    tecnologias: string[],
    tomaMate: boolean | null
}

let programador1: Programador = {
    nombre: "John Doe",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    tomaMate: true
}

let programador2: Programador = {
    nombre: "Momo",
    tecnologias: ["Java", "C++"],
    tomaMate: null
}



// INTERFACE --------------------

interface IProgramador {
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null
}

let dev1: Programador = {
    nombre: "John Doe",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
    tomaMate: true
}

let dev2 = {
    nombre: "Momo",
    tecnologias: ["Java", "C++"],
    tomaMate: null,
    apellido: "Benavides",
    recibido: false
}

function enviarCV( programador: IProgramador){
    console.log(`Este CV es de ${programador.nombre}`)
}

enviarCV(dev2)