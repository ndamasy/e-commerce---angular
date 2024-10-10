import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './environment/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  
  constructor(private _HttpClient: HttpClient) { }

  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  
  addProductToCart(id: string):Observable<any> {
    //url
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`, 
     
      //body
    
      { 
        "productId": id
      }
      
      //configration handeled in interceptors for all components

      



    )
    
  }

  getProductsCrt(): Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`
      
    )
  }

  deleteSpicificCartItem(id:string): Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}` 
    
     
  )
  }
  
  updateProductQuentity(id:string , newCunt:number):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`, {
      
        "count": newCunt
    },
      
      
    
    )
  }


  deleteAllProductsInCart(): Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`, )
  }

}
