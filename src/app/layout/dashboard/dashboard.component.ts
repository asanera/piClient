import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Alumno } from '../../models/alumno';
import { Profesor } from '../../models/profesor';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit, AfterViewInit  {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public identidadProfesor: Profesor;
    public identidadAlumno: Alumno;
    public saludo;

    constructor(private authService:AuthService) {
        this.identidadAlumno = authService.getAlumno();
        this.identidadProfesor = authService.getProfesor();
        this.saludo = this.crearSaludo();
        /*this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );*/
    }
    crearSaludo(){
        if(this.identidadAlumno !=null){
            return 'Hola, '+ this.identidadAlumno.nombre;        
        }else{
           return 'Hola, '+ this.identidadProfesor.nombre;
        }
            
    }

    ngAfterViewInit() {
        if(this.identidadAlumno != null){
            console.log(this.identidadAlumno);
            console.log("entro");
            document.getElementById('mostrarClase').className = 'col-lg-12';
        }
      }
    
    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
