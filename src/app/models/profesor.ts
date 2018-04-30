import { Person } from "./person";
import { Pago } from "./pago";
import { Asignacion } from "./asignacion";
import { Grupo } from "./grupo";
import { Notificacion } from "./notificacion";
import { Clase } from "./clase";

export class Profesor extends Person {


    constructor(
        public titulacion: string,
        public sueldo: number,
        public adminitrador: boolean,
        public clases: Clase[],
        public notificacionesEnviada:Notificacion[],
        public notificacionesRecividas: Notificacion[],
        public nombre: string,
        public apellidos: string,
        public fechaNacimiento: Date,
        public dni: string,
        public direccion: string,
        public email: string,
        public password: string,
        public id: number){
        super(nombre,apellidos,fechaNacimiento,dni,direccion,email,password,id)
    }
}