import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NuevoPage } from '../nuevo/nuevo';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MostrarPage } from '../mostrar/mostrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  avatar = 1;
  nuevo = NuevoPage;
  mostrar = MostrarPage
  Contacto = '';
  Contactos = [
    {id:0,
     nombre:'Arturo Enrique Moran Ruiz',
     telefono:'33 3968 8306',
     correo:'arturomr2001@hotmail.com',
     facebook:'Arturo Moran',
     twitter:'Excelente',
     instagram:'Arreee76',
    }
  ];
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }
  clickAgregar()
  {
    this.avatar +=1;
    this.avatar = this.avatar % 5;
    this.navCtrl.push(this.nuevo, 
      {
      contactos: this.Contactos,
      avatar: '../assets/' + this.avatar.toString() + '.png'
      });
  }

  Mostrar(dato)
  {
    this.navCtrl.push(this.mostrar,dato);
  }
}
