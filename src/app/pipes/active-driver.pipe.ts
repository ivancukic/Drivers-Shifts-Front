import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../models/driver';

@Pipe({
  name: 'activeDriver'
})
export class ActiveDriverPipe implements PipeTransform {

  transform(drivers: Driver[]): any {

    let driversArray = [];

    for(let driver of drivers) {

      if(driver.active === true) {

        driversArray.push(driver);
      }
    }

    return driversArray;
  }

}
