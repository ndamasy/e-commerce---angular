import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient: HttpClient) { }
  myHeaders: any = { Token: localStorage.getItem('userToken') }
  
  chickOut(cartId:string |null , shippingDetails:object):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${environment.serverUrl}`, 
      {
        "shippingAddress":shippingDetails
      },
      {
        headers: this.myHeaders
      }
    )
  
}




}
