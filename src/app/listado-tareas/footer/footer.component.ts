import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  nombre:string = "Raúl Medina Gutiérrez";
  email:string ="raul.medina@fernando3martos.com";

  getNombre():string{
    return this.nombre;
  }

  getEmail():string{
    return this.email;
  }

}
