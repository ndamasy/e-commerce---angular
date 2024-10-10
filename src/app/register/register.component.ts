import { AuthanticationService } from './../authantication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loading = false;
  backendMsg = null;
  getAllSubscribe!:Subscription
  constructor(private _AuthanticationServict: AuthanticationService, private _Router: Router) { }
  
  // how to set values inside form automatically through object or data sent by backend
  dataForm = {
    name: 'ahmed',
    email: 'ay-haga@gmail.com',
    phone: '102030',
    password:'anything'
}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // use patchValue  or  use  setValue
    this.registerForm.patchValue({
      name: this.dataForm.name,
      email: this.dataForm.email,
      phone: this.dataForm.phone,
      password: this.dataForm.password
    })
  }

  registerForm = new FormGroup({
    name: new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email: new FormControl('' , [Validators.required , Validators.email]),
    password: new FormControl('' , [Validators.required , Validators.minLength(6)]),
    rePassword: new FormControl('' , [Validators.required , Validators.minLength(6)]),
    phone:new FormControl('' , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
    

  } , this.confirmPassword)


  register(formData:any) {
    this.loading = true;
    this.getAllSubscribe=this._AuthanticationServict.signUp(formData.value).subscribe({
      next: (response) => {
        console.log(response);
        this.loading = false;
        this._Router.navigate(['/login'])
      }
      ,

      error: (err) => {
        this.loading = false;
        this.backendMsg=err.error.message;

      }
     
})
    console.log(formData)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.getAllSubscribe?.unsubscribe();
  }

  confirmPassword(form:any) {
    if (form.get('password').value !== form.get('rePassword').value) {
      return { passwordDidntMatch: true };
      
    } else {
      return null;
    }
  }

}
