import { Component } from '@angular/core';
import { CambioService } from './servicios/cambio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  datos: any=[];

  constructor(private servicio: CambioService) { }

  obtenerDatos() {
    this.servicio.obtenerDatos()
      .then(response => {
        this.datos = response;
        console.log(this.datos);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
