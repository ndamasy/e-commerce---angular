import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { error } from 'console';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _OrderService= inject(OrderService)
  cartId:string| null=''

  orders: FormGroup = new FormGroup({
  
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)

  })

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this._ActivatedRoute.paramMap.subscribe({
    next: (param) => {
      this.cartId = param.get('id'); // cart id
      console.log(this.cartId)
      
    }
  })
}
  
  submitOrders():void {
    console.log(this.orders.value)
    this._OrderService.chickOut(this.cartId, this.orders.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.status === 'success') {
          //stripe url
          window.open( res.session.url , '_self') ;
        }
      }
    })
  }


}
