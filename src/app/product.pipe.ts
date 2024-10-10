import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product',
  standalone: true
})
export class ProductPipe implements PipeTransform {

  transform(arryOfObject:any[] , searchText:string): any[] {
    return arryOfObject.filter( (item)=> item.title.toLowerCase().includes(searchText.toLocaleLowerCase()));
  
  }

}
