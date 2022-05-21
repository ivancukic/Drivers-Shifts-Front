import { Pipe, PipeTransform } from '@angular/core';
import { Line } from '../models/line';
import { LineService } from '../services/line.service';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'shiftLine'
})
export class ShiftLinePipe implements PipeTransform {

  constructor(private lineService: LineService) {}


  transform(lineId: number): any {

     return this.lineService.get(lineId).pipe(map( data => {

      return data.name_of_line;
    })
   );
  }

}
