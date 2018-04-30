import { Person } from "./person";
import { Pago } from "./pago";
import { Asignacion } from "./asignacion";
import { Grupo } from "./grupo";

export class Alumno extends Person {

    
    constructor(
        public galope: number,
        public salto: number,
        public cuentaBancaria: string,
        public pagos: Pago[],
        public asignaciones:Asignacion[],
        public grupos: Grupo[],
        public nombre: string,
        public apellidos: string,
        public fechaNacimiento: Date,
        public dni: string,
        public direccion: string,
        public email: string,
        public password: string,
        public id: number ){
        super(nombre,apellidos,fechaNacimiento,dni,direccion,email,password,id)
    }
    
   
}