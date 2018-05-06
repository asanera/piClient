import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesFuturasComponent } from './clases-futuras/clases-futuras.component';
import { AuthService } from '../service/auth.service';
import { HttpModule } from '@angular/http';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NgbAlertModule.forRoot()
  ],
  declarations: [ClasesFuturasComponent],
  providers: [AuthService]
})
export class ClasesModule { }
