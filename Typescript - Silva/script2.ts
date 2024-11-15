
// CLASES --------------------

class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La película ${this.nombre} está siendo proyectada`);
    }

    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}

const pelicula1 = new Pelicula("Fight Club", ["Tyler Durden", "Marla Singer"], ["Brad Pitt", "Helena Bonham Carter"]) ;
const pelicula2 = new Pelicula("The Matrix", ["Neo", "Trinity"], ["Keanu Reeves", "Carrie-Anne Moss"]) ;

console.log(pelicula1);
pelicula1.proyectarEnCine();
console.log(pelicula2);
pelicula2.proyectarEnCine();