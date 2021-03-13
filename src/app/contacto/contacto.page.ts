import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage{
    nombre = "";
    constructor(public alertController: AlertController) {}
    async alertaNombre() {
      if(this.nombre == ""){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Saludo',
          message: 'Por favor ingrese un nombre para saludar ',
          buttons: ['Ok']
        });
        
        await alert.present();
      }
      else
      {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Saludo',
        message: 'Bienvenido '+this.nombre,
        buttons: ['Ok']
      });
      await alert.present();
      this.nombre = "";
    }
  }

}
