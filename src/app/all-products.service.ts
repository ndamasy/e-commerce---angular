import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  constructor( private _HttpClient:HttpClient) { }


  getAllProducts(): Observable<any>{
    

    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`)
  }



}