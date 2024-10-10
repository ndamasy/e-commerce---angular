import { ActivatedRoute, RouterLink } from '@angular/router';
import { BrandsService } from './../brands.service';
import { Component, inject } from '@angular/core';
import { Ibrands } from '../ibrands';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.scss',
})
export class BrandDetailsComponent {
  brandDetails: Ibrands | null = null;

  _BrandsService = inject(BrandsService);

  constructor(private _ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._ActivatedRoute.paramMap.subscribe({
      next: (idParam) => {
        console.log(idParam.get('id'));

        let idbrand = idParam.get('id');
        this._BrandsService.getSpecificBrand(idbrand).subscribe({
          next: (res) => {
            console.log(res);
            this.brandDetails = res.data;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }
}
