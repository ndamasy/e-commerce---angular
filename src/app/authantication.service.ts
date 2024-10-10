import { HttpClient } from '@angular/common/http';
import {  afterNextRender, Injectable } from '@angular/core';
import { UserData } from './user-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './environment/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthanticationService {

  isLogin:BehaviorSubject<boolean>= new BehaviorSubject(false); // the same like observable but used with variables
  userName:BehaviorSubject<string>= new BehaviorSubject(''); // the same like observable but used with variables
  userTokenData:any= null;
  // constructor and life cycle hooks run automatic on ssr and csr
  // constructor run one time after every refresh
  constructor(private _HttpClient: HttpClient ,private _Router:Router ) {
    afterNextRender(() => {

      if (localStorage.getItem('userToken') !== null) {
        
        this.isLogin.next(true);
        let token:any=localStorage.getItem('userToken')
        let decodedToken: any = jwtDecode(token);
        this.userName.next(decodedToken.name);

      } else {
        this.isLogin.next(false);
      }
})

   

   }

  signUp(user:UserData):Observable<any> {
   return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`,user)
  }

  signIn(loginData:any):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin` , loginData )
    
  }

  decodeUserToken() {
    if (localStorage.getItem('userToken') !== null) {
      this.userTokenData = jwtDecode(localStorage.getItem('userToken')!)
      console.log(this.userTokenData)
      
      
    }
  }

  signOut():void {
    this, localStorage.removeItem('userToken');
    this.userTokenData = null;
    //may need to call api
    this._Router.navigate(['/login'])

  }

  
  setVerifyedEmail(data: object): Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords` , data)
}

  
setVerifyedCode(data: object): Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode` , data)
  }
  
  setResetPass(data: object): Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword` , data)
  }




 


  
}
