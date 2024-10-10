import { CategoriesService } from './../categories.service';

import { Component, inject, OnInit } from '@angular/core';
import { HomeProductsService } from '../home-products.service';
import { Ihomeproduct } from '../ihomeproduct';
import { Subscription } from 'rxjs';
import { Icategry } from '../icategry';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule , RouterLink , FormsModule , SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

private readonly _NgxSpinnerService= inject(NgxSpinnerService)

  text: string = '';
  HomeProductList: Ihomeproduct[] = [];
  categryList: Icategry[] = [];

  getAllProductSubscribe!: Subscription
  //curosel
  customOptions:OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayHoverPause:true,
    touchDrag: true,
    rtl:true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
 // slider
  customOptionsMain:OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayHoverPause:true,
    touchDrag: true,
    rtl: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true
  }
  private _CartService: any;


  constructor(private _HomeProductsService: HomeProductsService,
    private _ToastrService: ToastrService,
    // private _CartService: CartService,
   
    private _CategoriesService: CategoriesService) { }
  
  ngOnInit(): void {
    
    // this._NgxSpinnerService.show('loading-3')
    this._CategoriesService.getAllCategries().subscribe({
      next:(response) => {
        console.log(response.data)
        this.categryList = response.data // store data in variable to be used in html for the same component
        
        // this._NgxSpinnerService.hide('loading-3')
      },
      error: (err) => {
        console.log(err)
      }
  })

 this.getAllProductSubscribe= this._HomeProductsService.getHomeProuduct().subscribe({
    next: (response) => {
      this.HomeProductList=response.data
      console.log(response)
    },
    error: (err) => {
      console.log(err)
    }
  })
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.getAllProductSubscribe?.unsubscribe();
    
  }

  addToCart(id:string):void {
    this._CartService.addProductToCart(id).subscribe({
      next: (res: { message: string | undefined; numOfCartItems: any; }) => {
        console.log(res);
        // this._ToastrService.success(res.message , 'Fresh cart',{
        //   closeButton: true,
        //   timeOut: 3000,
        //   positionClass: "bottom-right"
        //  })
        this._CartService.cartNumber.next(res.numOfCartItems);
       
         

      },
     
    })
  }


}
