import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-lign-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-lign-left',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-lign-left',
            routerLink: 'no-comunes'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
  ];
  }

}
