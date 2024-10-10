import { Icart } from './../icart';
import { CartService } from './../cart.service';
import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe , RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartProductDetails: Icart = {} as Icart;

  constructor(private _CartService:CartService , private _ToastrService:ToastrService){}
 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    try {
      this._CartService.getProductsCrt().subscribe({
        next: (res) => {
          console.log(res)
          this.cartProductDetails = res.data;
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  removeItem(id:string): void{
    this._CartService.deleteSpicificCartItem(id).subscribe({
      next: (res) => {
        console.log(res)
        this.cartProductDetails = res.data;
        this._ToastrService.success('your item is removed');
        this._CartService.cartNumber.next(res.numOfCartItems);
      }
    })
  }


  updateCount(id:string , count:number): void{
    if (count > 0) {
      this._CartService.updateProductQuentity(id , count).subscribe({
        next: (res) => {
          console.log(res)
          this.cartProductDetails=res.data
        },
        error: (err) => {
          console.log(err)
        }
  
      })
    }
  }

  clearCart(): void{
    this._CartService.deleteAllProductsInCart().subscribe({
      next: (res) => {
        console.log(res)
        if (res.message == 'success') {
          this.cartProductDetails = {} as Icart;
          this._CartService.cartNumber.next(0);
          
        }
this._ToastrService.success('Your cart is empty')

      }
    })
  }

}
