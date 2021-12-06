import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncomiendaModelo } from '../modelos/encomienda.model';
import { SeguridadService } from './seguridad.service';
import { enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncomiendaService {

  constructor(private http: HttpClient, private seguridadService: SeguridadService) {
    this.token = this.seguridadService.getToken();
   }

   url = "http://localhost:3000"
   token: string = ''



   store(encomienda: EncomiendaModelo): Observable<EncomiendaModelo> {
    return this.http.post<EncomiendaModelo>(`${this.url}/`, {
      descripcion: encomienda.descripcion,
      apellidos: encomienda.peso,
      telefono: encomienda.tipo,
      correo: encomienda.presentacion
    });
  }


  getAll(): Observable<EncomiendaModelo[]>{
    return this.http.get<EncomiendaModelo[]>(`${this.url}/`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

    update(encomienda: EncomiendaModelo): Observable<EncomiendaModelo> {
      return this.http.patch<EncomiendaModelo>(`${this.url}//${encomienda.id}`, {
        descripcion: encomienda.descripcion,
        apellidos: encomienda.peso,
        telefono: encomienda.tipo,
        correo: encomienda.presentacion
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
  }



  delete(id: string): Observable<EncomiendaModelo[]>{
    return this.http.delete<EncomiendaModelo[]>(`${this.url}//${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  getWithId(id: string): Observable<EncomiendaModelo>{
    return this.http.get<EncomiendaModelo>(`${this.url}//${id}`,{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }




}
