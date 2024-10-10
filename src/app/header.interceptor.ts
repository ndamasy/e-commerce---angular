import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';

import { inject, PLATFORM_ID } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  
const _platformId=inject(PLATFORM_ID)

  // here we write any logic to deal with api
 
    
    if (typeof localStorage!== undefined && isPlatformBrowser(_platformId) && localStorage.getItem('userToken') !== null) {
      if (req.url.includes('orders') || req.url.includes('cart') || req.url.includes('wishlist')) {
        
        req = req.clone({
          setHeaders:{Token : localStorage.getItem('userToken') !}
        })
      }
      
    }
  
  
    return next(req);
  }
;
