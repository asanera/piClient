import { BaseEntity } from "./baseEntity";


export class Person extends BaseEntity {
    constructor( nombre: string,
        apellidos: string,
        fechaNacimiento: Date,
        dni: string,
        direccion: string,
        email: string,
        password: string,
        id: number) {
        super(id);
    }
} 