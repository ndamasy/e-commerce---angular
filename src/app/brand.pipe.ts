import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brand',
  standalone: true
})
export class BrandPipe implements PipeTransform {

  transform(arryOfObject:any[] , searchText:string): any[] {
    return arryOfObject.filter( (item)=> item.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}
