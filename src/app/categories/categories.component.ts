import { CategoriesService } from './../categories.service';
import { Component, inject } from '@angular/core';

import { Icategry } from '../icategry';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../search.pipe';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoSearchPipe } from "../catego-search.pipe";


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ RouterLink, FormsModule, CategoSearchPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  private readonly _CategoriesService = inject(CategoriesService) 
  private readonly _CartService = inject(CartService) 
  private readonly _ToastrService = inject(ToastrService) 
  
  text: string = '';
  categryList: Icategry[] = [];

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
   this._CategoriesService.getAllCategries().subscribe({
     next: (res) => {
       console.log(res)
       this.categryList = res.data; // store all data in variable to be used in html of same componant

     },
     error: (err) => {
       console.log(err)
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

