import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient: HttpClient) { }
  
  getAllCategries():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`)
  }
  
  getSpecificCategries(id:string):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${id}`)
}



}
