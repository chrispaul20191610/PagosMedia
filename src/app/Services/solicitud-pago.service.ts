import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudPagoService {

  private API_SERVER="https://api.abitmedia.cloud/pagomedios/v2/payment-requests";
  constructor(public http:HttpClient) { 
    console.log('esta funcionando ')
  }

  public addPagos():Observable<any>{
    return this.http.post(this.API_SERVER, null);
  }
}
