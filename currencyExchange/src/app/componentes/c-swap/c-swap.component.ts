import { Component } from '@angular/core';
import { ICurrency } from 'src/app/interfaces/money.interface';
import { MoneyService } from 'src/app/servicio/money.service';
import { CInicialComponent } from '../c-inicial/c-inicial.component';

@Component({
  selector: 'app-c-swap',
  templateUrl: './c-swap.component.html',
  styleUrls: ['./c-swap.component.scss'],
})
export class CSwapComponent {
  constructor(public inicial: CInicialComponent ) {
  }
}
