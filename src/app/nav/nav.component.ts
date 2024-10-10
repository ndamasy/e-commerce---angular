import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthanticationService } from '../authantication.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyTranslateService } from '../my-translate.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive , TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  cart_number: number = 0;

  showLinks: boolean = false;
  loggedUserName: string = '';



  constructor(private _AuthanticationService: AuthanticationService,
    private _Router: Router,
    private _MyTranslateService: MyTranslateService, 
    private _CartService:CartService,
            _TranslateService: TranslateService,
  
  ) { }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  try {
    this._CartService.getProductsCrt().subscribe({
      next: (res) => {
        console.log('respo is', res);
      this._CartService.cartNumber.next(res.numOfCartItems);
      }
    })
  } catch (error) {
    console.error(error)
  }
  this._AuthanticationService.isLogin.subscribe((value) => {
    this.showLinks = value;
  })
  this._AuthanticationService.userName.subscribe((value) => {
    this.loggedUserName = value;
  })
  this._CartService.cartNumber.subscribe({
    next: (data) => {
      console.log(data)
      this.cart_number = data;
    },
    error: (err) => {
      console.log(err)
    }
   });


}
  
  logOut():void {
    this._AuthanticationService.signOut()
  }

  change(lang: string):void{
     this._MyTranslateService.changeLang(lang)
    
  }

  
  

}
