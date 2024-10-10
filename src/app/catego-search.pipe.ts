import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoSearch',
  standalone: true
})
export class CategoSearchPipe implements PipeTransform {

  transform(arryOfObject:any[] , searchText:string): any[] {
    return arryOfObject.filter( (item)=> item.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}
