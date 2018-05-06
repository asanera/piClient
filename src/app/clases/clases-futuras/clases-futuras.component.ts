import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AuthService } from '../../service/auth.service';

import { Clase } from '../../models/clase';
import { ClaseService } from '../clases.service';
import { DatePipe } from '@angular/common';
import { Asignacion } from '../../models/asignacion';
import { Profesor } from '../../models/profesor';


@Component({
  selector: 'app-clases-futuras',
  templateUrl: './clases-futuras.component.html',
  styleUrls: ['./clases-futuras.component.scss'],
  providers: [ClaseService]
})
export class ClasesFuturasComponent implements OnInit {
  public identidadAlumno: Alumno;
  public identidadProfesor: Profesor;
  public clases: Clase[];
  public clasesAlumno: Array<any> = [];
  public clasesProfesor: Array<any> = [];
  public alerts: Array<any> = [];

  constructor(private authService: AuthService, private claseService: ClaseService) {
    this.identidadAlumno = authService.getAlumno();
    this.identidadProfesor = authService.getProfesor();


  }

  ngOnInit() {
    if (this.identidadAlumno){
      this.obtenerClasesFuturasPorAlumno(this.identidadAlumno.id);
    }
    else{
      this.obtenerClasesFuturasPorProfesor(this.identidadProfesor.id);
      console.log(this.clasesProfesor)
    }
      

      
      
  }
  obtenerClasesFuturasPorAlumno(idAlumno: number) {
    this.claseService.obtenerFuturasClasesPorAlumno(idAlumno).subscribe(
      response => {
        this.clases = response;
        
      }, error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          this.alerts.push(
            {
              id: 2,
              type: 'error',
              message: body.error
            }
          );
          return;
        }
      }, () => {
        if (!this.clases) {
          this.alerts.push(
            {
              id: 1,
              type: 'info',
              message: 'Actualmente no hay clases que realizar'
            }
          );
        }else{
          this.clasesAlumno = this.obtenerClasesAlumno(this.clases);
        }
      }
    );

  }
  obtenerClasesFuturasPorProfesor(idProfesor: number) {
    this.claseService.obtenerFuturasClasesPorProfesor(idProfesor).subscribe(
      response => {
        this.clases = response; 
      }, error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          this.alerts.push(
            {
              id: 2,
              type: 'error',
              message: body.error
            }
          );
          return;
        }
      }, () => {
        if (!this.clases) {
          this.alerts.push(
            {
              id: 1,
              type: 'info',
              message: 'Actualmente no hay clases que realizar'
            }
          );
        }else{
          this.clasesProfesor = this.obtenerClasesProfesor(this.clases);
        }
      }
    );
  }

  private obtenerClasesProfesor(clases:Clase[]){
    let clasesProfesor: Array<any> = [];
    let nombre, especialidad, pista: String;
    let fecha: Date;
    let claseGuardar: any;
    for (let clase of clases) {
      nombre = clase.nombre;
      especialidad = clase.especialidad;
      pista = clase.pista.nombre;
      fecha = clase.fecha;
      console.log(fecha);
      clasesProfesor.push({
        nombre: nombre,
        especialidad: especialidad,
        pista: pista,
        fecha: fecha
      });
    }
    return clasesProfesor;
  }
  private obtenerClasesAlumno(clases: Clase[]) {
    let clasesAlumno: Array<any> = [];
    let nombre, especialidad, caballo, pista: String;
    let fecha: Date;
    let claseGuardar: any;
    for (let clase of clases) {
      nombre = clase.nombre;
      especialidad = clase.especialidad;
      pista = clase.pista.nombre;
      fecha = clase.fecha;
      for (let asignacion of clase.asignaciones) {
        if (asignacion.alumno.id == this.identidadAlumno.id && Number(asignacion.clase) == clase.id) {
          caballo = asignacion.caballo.nombre;
          break;
        }
      }
      clasesAlumno.push({
        nombre: nombre,
        especialidad: especialidad,
        pista: pista,
        fecha: fecha,
        caballo: caballo
      });
    }
    return clasesAlumno;
  }

  closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }


}
