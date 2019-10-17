import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios: any = [
    {
      nombre: 'Eduardo',
      edad: 41
    },
    {
      nombre: 'Pedro',
      edad: 28
    },
    {
      nombre: 'Francisco',
      edad: 34
    },
    {
      nombre: 'Maria',
      edad: 43
    }
  ];
 
  constructor() {}

}
