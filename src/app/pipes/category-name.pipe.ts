import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';
//import { Driver } from '../models/driver';


@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {
  transform(category: Category): any {

    return category.name;
  }

}
