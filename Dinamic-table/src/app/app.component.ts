import {Component} from '@angular/core';
import {DatiService} from "./services/dati.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  dati = DatiService.getData()
  headers = DatiService.getTable()
  dato ?: any;
  index : number = -1;
  apriMyAction : boolean = false;
  action : string = 'noAction';
  gestisciEvento(e: any): void {
    if(e.key === 'delete')
      this.attivaCancella(e.dato)
    if(e.key === 'new') {
      this.apriMyAction = true
      this.action = 'new'
    }
    if(e.key === 'edit') {
      this.apriMyAction = true
      this.dato = e.dato
      this.action = 'edit'
    }
    if(e.key === 'Cambia ruolo') {
      this.dato = e.dato
      if (this.dato['ruolo'] == 'admin')
        this.dato['ruolo'] = 'utente'
      else
        this.dato['ruolo'] = 'admin'
      this.index = this.dati.findIndex(riga => {
        for (const column in riga) {
          if (riga[column] === this.dato[column]) {
            return true;
          }
        }
        return false;
      })
      this.dati[this.index] = this.dato
    }
  }
  attivaCancella(dato: any): void {
    this.index = this.dati.findIndex(riga => {
      for (const column in riga) {
        if (riga[column] === dato[column]) {
          return true;
        }
      }
      return false;
    })
    if (this.index >= 0) {
      this.dati.splice(this.index, 1);
      window.alert("elemento cancellato");
    }
    else
      window.alert("elemento non esistente")
  }
}
