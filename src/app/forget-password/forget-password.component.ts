import { AuthanticationService } from './../authantication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  step: number = 1;
constructor( private _AuthanticationService:AuthanticationService , private _Router:Router ){}

  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl( null , [Validators.required , Validators.email])
  })
  verifycode: FormGroup = new FormGroup({
    resetCode: new FormControl( null , [Validators.required , Validators.pattern(/^[0-9]{6}$/)])
  })

  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
    newPassword: new FormControl( null , [Validators.required , Validators.minLength(6)])
  })

  verifyEmailSubmit(): void {
    
    // to get mail value from controle belong to form 1 and store it in controle belong to form 3
    let emailValue =this.verifyEmail.get('email')?.value;
    this.resetPassword.get('email')?.patchValue(emailValue)
    
    this._AuthanticationService.setVerifyedEmail(this.verifyEmail.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.statusMsg === 'success') {
          this.step = 2;
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  verifyCodeSubmit():void {
    this._AuthanticationService.setVerifyedCode(this.verifycode.value).subscribe({
      next: (res) => {
        console.log(res.status)
        if (res.status === 'Success') {
          this.step = 3;
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  verifyPasswordSubmit():void {
    this._AuthanticationService.setResetPass(this.resetPassword.value).subscribe({
      next: (res) => {
        console.log(res)
        localStorage.setItem('userToken', res.token);
        this._AuthanticationService.decodeUserToken()
        this._Router.navigate(['/home'])
       
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
