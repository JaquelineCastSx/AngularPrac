import { Component } from '@angular/core';
import { CambioService } from 'src/app/servicios/cambio.service';


@Component({
  selector: 'app-d-inicial',
  templateUrl: './d-inicial.component.html',
  styleUrls: ['./d-inicial.component.scss']
})
export class DInicialComponent {
  datos: any=[];

  constructor(private servicio: CambioService) { }

  obtenerDatos() {
    this.servicio.obtenerDatos()
      .then(response => {
        this.datos = response;
        let valores = response.currency;

      })
      .catch(error => {
        console.log(error);
      });
  }
}
