import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { Driver } from '../models/driver';
import { DriverService } from '../services/driver.service';

@Pipe({
  name: 'shiftDriver'
})
export class ShiftDriverPipe implements PipeTransform {

  driver: Driver = {};

  constructor(private driverService: DriverService) {}

  transform(driverId: number): any {

    return this.driverService.get(driverId).pipe(map( data => {

      return data.name;
    }));
  }

}
