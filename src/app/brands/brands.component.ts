import { Component, inject } from '@angular/core';
import { BrandsService } from '../brands.service';
import { BrandPipe } from '../brand.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [ BrandPipe, RouterLink, FormsModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  text: string = '';
  brandsList: object[] = [];

  private readonly _BrandsService = inject(BrandsService)
  private readonly _CartService = inject(CartService)
  private readonly _ToastrService = inject(ToastrService)
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._BrandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res.data);
        this.brandsList=res.data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  // displaySpecificBrand() {
  //   this._BrandsService.getSpecificBrand().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }


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
