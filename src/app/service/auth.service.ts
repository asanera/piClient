// librería de inyección de dependencias
import { Injectable } from '@angular/core';

// necesarias para las peticiones http
import { Http, Response, Headers } from '@angular/http';

// para permitir que mediante la inyección de dependencias podamos inyectar este servicio, es decir, esta clase en otros componentes o en otras clases
@Injectable()
export class AuthService {

	public identidadAlumno;

	public identidadProfesor;

	// inyectamos la dependencia http para poder hacer peticiones http
	constructor() {
		
	}

	getAlumno() {
		let identity = JSON.parse(sessionStorage.getItem('identidadAlumno'));
		if (identity != "undefined") {
			this.identidadAlumno = identity;
		} else {
			this.identidadAlumno = null;
		}

		return this.identidadAlumno;
    }
    getProfesor() {
		let identity = JSON.parse(sessionStorage.getItem('identidadProfesor'));
		if (identity != "undefined") {
			this.identidadProfesor = identity;
		} else {
			this.identidadProfesor = null;
		}

		return this.identidadProfesor;
	}
}