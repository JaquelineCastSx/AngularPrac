import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrency } from '../interfaces/money.interface';


@Injectable({
  providedIn: 'root'
})
export class CambioService {
  urlApi: string = 'https://us-central1.gcp.data.mongodb-api.com/app/mtwdm-drwqq/endpoint/unit/converter'
  constructor() { }

  public obtenerDatos(): Promise<ICurrency>{
    return fetch(this.urlApi).then(response => response.json())
    .catch(error => {
      console.log(error);
      throw error;
    });
  }


}
