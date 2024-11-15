"use strict";

// ENCAPSULAMIENTO Y GENÉRICOS --------------------

class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo1 = new Sorteo("The last nine");
sorteo1.setTicket(9);
console.log(sorteo1.sortear());
let sorteo2 = new Sorteo("John Doe");
sorteo2.setTicket("A6");
console.log(sorteo2.sortear());