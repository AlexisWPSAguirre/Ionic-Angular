import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit{
  constructor(public alertController: AlertController, private storage: Storage) {}
    nombre = '';
    txtStorage = '';
    /* Es el segundo que se ejecuta despues del constructor, podria usarlo como principal */
    async ngOnInit() {
    await this.storage.create();
    this.txtStorage = await this.storage.get('textoAlmacenado');
  }
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
      
      /* El await y async esperan a que se ejecute la funcion actual o indicada antes de continuar */
      await alert.present();
      await this.storage.set('nombre', this.nombre);
    }
    }
    
  }
  

