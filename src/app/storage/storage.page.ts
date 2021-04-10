import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  constructor(private storage: Storage) { }
  txtStorage = ''
  nombre = ''
  async ngOnInit() {
    await this.storage.create();
    this.nombre = await this.storage.get('nombre')
    /* let personas = [
      {
        nombre: "Jeyson",
        apellido: "Calvache",
      },
      {
        nombre: "Carlos",
        apellido: "Perez",
      }
    ]

    await this.storage.set('personas', personas)
    await this.storage.set('nombre', 'Jeyson')
    await this.storage.set('apellido', 'Calvache')
    console.log(await this.storage.get('nombre'))
    console.log(await this.storage.get('apellido'))

    let nuevas_personas = await this.storage.get('personas')

    console.log(nuevas_personas);
  } */
    /* get: Me devuelve una clave especifica
      set: Insertar
      remove: Elimina */
  }
  async saveData() {
    await this.storage.set('textoAlmacenado', this.txtStorage);
    this.txtStorage = await this.storage.get('textoAlmacenado');
  }
}
