export class Vehicle {
    constructor(
        public id: string,
        public placa: string,
        public modelo: string,
        public marca: string,
        public ano: number,
        public cor: string
    ) {}

    static create(id: string, placa: string, modelo: string, marca: string, ano: number, cor: string): Vehicle {
        return new Vehicle(id, placa, modelo, marca, ano, cor);
    }
}