import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {

  constructor( private _HttpClient:HttpClient) { }

  getHomeProuduct(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`)
  
}

  
  getSpecificProuduct(id:string|null): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products/${id}`);
  
}
}
