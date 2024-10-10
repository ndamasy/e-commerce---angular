import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGardGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  

  if (typeof localStorage !== 'undefined') {
  
    if (localStorage.getItem('userToken')!==null) {
      // navigate to login---route
      _router.navigate(['/login'])
      return false;
    } else {
 
      return true;
    }

  } else {
    return false;
  }
  
};
