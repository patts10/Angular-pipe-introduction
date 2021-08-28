import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'chrisTIan';
  nombreUpper: string = 'CHRISTIAN';
  nombreCompleto: string = 'chRIStiAn mENDoza';

  fecha: Date = new Date();
}
