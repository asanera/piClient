import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

// librería sirve para mapear objetos
import 'rxjs/add/operator/map';

// sirve para recoger las respuestas de las peticiones ajax al servidor
import { Observable } from 'rxjs/Observable';
import { Clase } from '../models/clase';

@Injectable()
export class ClaseService {

    private url = environment.REST_API_URL;
    private headers;
    private options;
    

    constructor(public http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic dXNlcjpwcm9fR2FjZTIwMTg=',
        })
        this.options = new RequestOptions({headers: this.headers});
    }

    
    public obtenerFuturasClasesPorAlumno(idAlumno: number){
         //Peticion al backend
         return this.http.get(this.url + 'clases/alumno/'+idAlumno,
         this.options).map(res => res.json());
    }
    public obtenerFuturasClasesPorProfesor(idProfesor:number){
        return this.http.get(this.url + 'clases/profesor/'+idProfesor,
        this.options).map(res => res.json());
    }
    


}