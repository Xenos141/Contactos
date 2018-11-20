import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the NuevoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html',
})
export class NuevoPage {
nombre = '';
telefono = '';
correo = '';
facebook = '';
twitter = '';
instagram = '';
contactos = [];
inicio = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos = this.navParams.get('contactos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoPage');
  }

  Agregar()
  {
    if(this.nombre.length > 0 && this.telefono.length > 0)
    {
      this.contactos.push(
        {
          id:0,
          nombre: this.nombre,
          telefono: this.telefono,
          correo: this.correo,
          facebook: this.facebook,
          twitter: this.twitter,
          instagram:this.instagram
        }
      );
      this.navCtrl.pop();
    }
    else{
      console.log("La nota está vacía")
      const alert = this.alertCtrl.create({
        title: "Oops!",
        subTitle: "La nota esta vacia",
        buttons: ['Ok']
      });
      alert.present();
    }

   // this.navCtrl.push(this.inicio);
}
}