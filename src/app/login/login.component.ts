import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Person } from '../models/person';
import { LoginService } from './login.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public personaLoguear: Person;
    public mensajeError;
    public identidad;

    constructor(public router: Router, public loginService: LoginService) {
        this.personaLoguear = new Person('', '', new Date(), '', '', '', '', -1)
    }

    ngOnInit() { }

    acceder() {
        this.loginService.loguearAlumno(this.personaLoguear).subscribe(
            //Bloque Alumno
            response => {
                this.crearSesionAlumno(response);
                this.router.navigate(['/dashboard']);
                return true;
            }, error => {
                var capturaError = <any>error;
                var errorCodigo;
                var body;
                if (capturaError != null) {
                    body = JSON.parse(error._body);
                    errorCodigo = body.codigo;
                    if (errorCodigo == 1000) {
                        this.mensajeError = body.error;
                        return false;
                    } else if (errorCodigo == 1001) {
                        this.loginService.loguearProfesor(this.personaLoguear).subscribe(
                            //Bloque Profesor
                            response => {
                                this.crearSesionProfesor(response);
                                this.router.navigate(['/dashboard']);
                                return true;
                            }, error => {
                                console.log("entro en el error  profesor");
                                var capturaError = <any>error;
                                if (capturaError != null) {
                                    var body = JSON.parse(error._body);
                                    this.mensajeError = body.error;
                                    return false;
                                }
                            }
                        );
                    }

                }
            }
        );
    }

    private crearSesionAlumno(response) {
        this.generacionLocalStorage(response, "identidadAlumno");
    }

    private crearSesionProfesor(response) {
        this.generacionLocalStorage(response, "identidadProfesor");
    }

    private generacionLocalStorage(response, key) {
        this.identidad = response;
        // crear la sesión en el localstorage
        sessionStorage.setItem(key, JSON.stringify(this.identidad));
        this.personaLoguear = new Person('', '', new Date(), '', '', '', '', -1);
        return true;
    }

}

