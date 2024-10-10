import { HomeProductsService } from './../home-products.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ihomeproduct } from '../ihomeproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  productDetails: Ihomeproduct| null = null;

  _HomeProductsService = inject(HomeProductsService);

  constructor(private _ActivatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._ActivatedRoute.paramMap.subscribe({
      next: (idParam) => {
        console.log(idParam.get('id'))
        let idProduct=idParam.get('id')
        this._HomeProductsService.getSpecificProuduct(idProduct).subscribe({
          next: (res) => {
            
            this.productDetails=res.data
          },
          error: (err) => {
            console.log(err);
          }
          
        })
      }
    })
  }

}
