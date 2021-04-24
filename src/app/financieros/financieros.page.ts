import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { element } from 'protractor';

@Component({
  selector: 'app-financieros',
  templateUrl: './financieros.page.html',
  styleUrls: ['./financieros.page.scss'],
})
export class FinancierosPage implements OnInit {  
  constructor(private storage: Storage) { }
  type = ''
  name = ''
  description = ''
  date = ''
  value = ''
  id 
  data = []
  filter = null
  arrayFilter = []

  async ngOnInit() {
    await this.storage.create()
    if (await this.storage.get('ban') == undefined){
      await this.storage.set('balance',this.data);
      await this.storage.set('ban', true)
    }
    this.data = await this.storage.get('balance')
    this.filterTable()
  }

  async filterTable(){
    this.arrayFilter = []
    this.data.forEach(element => {
      if(element['type']==this.filter)
      {
        this.arrayFilter.push(element)
      }
    })
    if(this.filter == null || this.filter == 'All'){
      this.data.forEach(element => {
        this.arrayFilter.push(element)
      })
    }
  }
  
  async saveStorage(){
    if (this.id != null){
      this.data[this.id]["type"] = this.type
      this.data[this.id]["name"] = this.name
      this.data[this.id]["description"] = this.description
      this.data[this.id]["date"] = this.date
      this.data[this.id]["value"] = this.value
    }
    else
    {
      this.data.push({
          'type':this.type,
          'name': this.name,
          'description': this.description,
          'date': this.date,
          'value': this.value
      })
    }
    await this.storage.set('balance',this.data);
    this.filterTable()
    this.type = ""
    this.name = ""
    this.description = ""
    this.date = ""
    this.value = ""
    this.id = null
  }

  async delete(item)
  {
    this.id = this.data.indexOf(item)
    this.data.splice(this.id,1)
    await this.storage.set('balance',this.data);
    this.id = null
    this.filterTable()
  }
  async edit(item)
  {
    this.type = item['type']
    this.name = item['name']
    this.description = item['description']
    this.date = item['date']
    this.value = item['value']
    this.id = this.data.indexOf(item)
    this.data[this.id]["type"] = this.type
    this.data[this.id]["name"] = this.name
    this.data[this.id]["description"] = this.description
    this.data[this.id]["date"] = this.date
    this.data[this.id]["value"] = this.value
  }

}
