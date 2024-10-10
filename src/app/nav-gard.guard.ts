import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const navGardGuard: CanActivateFn = (route, state) => {
const _router= inject(Router)


  if (typeof localStorage !== 'undefined') {
    
    if (localStorage.getItem('userToken')!==null) {
      return true;
    } else {
  
      // navigate to login---route
      console.log("came here");
      
      _router.navigate(['/login'])
      return false;
    }

  } else {
    return false;
  }


};
