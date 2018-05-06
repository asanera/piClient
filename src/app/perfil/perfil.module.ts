import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PerfilRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [PerfilComponent]
})
export class PerfilModule { }
