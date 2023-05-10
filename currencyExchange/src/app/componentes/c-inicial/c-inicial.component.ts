import { Component } from '@angular/core';
import { ICurrency } from 'src/app/interfaces/money.interface';
import { MoneyService } from 'src/app/servicio/money.service';

@Component({
  selector: 'app-c-inicial',
  templateUrl: './c-inicial.component.html',
  styleUrls: ['./c-inicial.component.scss'],
})
export class CInicialComponent {
  datos: any = [];
  fromCurrency!: "";
  toCurrency!: "";
  amount: number = 1;
  convertedAmount: number = 0;

  constructor(private servicio: MoneyService) {
    this.servicio
      .obtenerDatos()
      .then((response) => {
        this.datos = response;

        console.log(this.datos);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  convertCurrency(): void {
    const fromCurrencyObj = this.datos.find(
      (currency: ICurrency) => currency.currency === this.fromCurrency
    ); //"Mapea" el array de la api y busca que coincida la unidad con la divisa seleccionada

    console.log(this.fromCurrency);
    console.log(fromCurrencyObj);

    const toCurrencyObj = this.datos.find(
      (currency: ICurrency) => currency.currency === this.toCurrency
    );

    console.log(this.toCurrency);
    console.log(toCurrencyObj);

    if (fromCurrencyObj && toCurrencyObj) { //Verifica que los 2 tengan unidades seleccioandas
      const exchangeRate = fromCurrencyObj.unit / toCurrencyObj.unit;
      this.convertedAmount = this.amount * exchangeRate;
    }
  }

  swapCurrencies(): void {
    [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency]; //Destructuracion de array
    this.convertCurrency();
  }
}
