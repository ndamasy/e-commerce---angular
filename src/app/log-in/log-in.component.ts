import { Router, RouterLink } from '@angular/router';

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthanticationService } from '../authantication.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  loading = false;
  backendMsg = null;

  constructor( private _AuthanticationService:AuthanticationService , private _Router:Router){}

  loginForm = new FormGroup({

    email: new FormControl('' , [Validators.required , Validators.email]),
    password: new FormControl('' , [Validators.required , Validators.minLength(6)]),
    
  })

  login(form:any) {
    console.log(form)
    if (form.valid) {
      this.loading = true;
      this._AuthanticationService.signIn(form.value).subscribe({
        next: (response) => {
          console.log(response)
          this.loading = false;
          localStorage.setItem('userToken', response.token)
          this._AuthanticationService.decodeUserToken()
          this._AuthanticationService.userName.next(response.token.name)
          this._AuthanticationService.isLogin.next(true); //  behavior subject have its value by (next) word and allow subscribe to be
          this._Router.navigate(['/home'])
        },
        error: (err) => {
          console.log(err)
          
          this.loading = false;
          // this.backendMsg=err.error.message;
          
        }

      })
      
    }
   
  }

}
