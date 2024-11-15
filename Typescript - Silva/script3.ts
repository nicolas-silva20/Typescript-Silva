
// ENCAPSULAMIENTO Y GENÉRICOS --------------------

class Sorteo<T> {

    private ticket?: T;

    constructor(private nombre: string) {

    }

    setTicket(ticket: T) {
        this.ticket = ticket;
    }

    getTicket() {
        return this.ticket;
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}

let sorteo1 = new Sorteo<number>("The last nine");
sorteo1.setTicket(9);
console.log(sorteo1.sortear());

let sorteo2 = new Sorteo<string>("John Doe");
sorteo2.setTicket("A6");
console.log(sorteo2.sortear());