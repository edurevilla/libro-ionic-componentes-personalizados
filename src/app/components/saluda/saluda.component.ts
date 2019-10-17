import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saluda',
  templateUrl: './saluda.component.html',
  styleUrls: ['./saluda.component.scss'],
})
export class SaludaComponent implements OnInit {

  @Input() nombre: string;
  text: string;
 
  constructor() { }

  ngOnInit() {
    this.text = '¡Hola ' + this.nombre + '!';
  }


}
