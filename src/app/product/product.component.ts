import { Ihomeproduct } from './../ihomeproduct';
import { Component, inject } from '@angular/core';
import { AllProductsService } from '../all-products.service';
import { RouterLink } from '@angular/router';
import { ProductPipe } from '../product.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ RouterLink , ProductPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {


  private readonly _AllProductsService = inject(AllProductsService)
  private readonly _ToastrService = inject(ToastrService)
  private readonly _CartService = inject(CartService)
  
  text: string = '';
  boroductList: Ihomeproduct[] = [];


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._AllProductsService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.boroductList = res.data
      },
      error: (err) => {
        console.log(err);
      }
    })


  }

  addToCart(id:string):void {
    this._CartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message)
        this._CartService.cartNumber = res.numOfCartItems
       
         

      },
     
    })
  }

}
