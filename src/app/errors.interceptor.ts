import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {

// do your logic here
const _ToastrService= inject(ToastrService)



// handel req errors heere
  return next(req).pipe( catchError((err) => {
    // errors logic

    console.log('interceptor', err.error.message)
    if (req.url.includes('cart')) {
       
     }
     // alert -toastr- give glopal alert
    // _ToastrService.error(err.error.message, 'Fresh cart')
    
    
    return throwError( ()=>err)

  }));
};
