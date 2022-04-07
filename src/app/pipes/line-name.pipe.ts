import { Pipe, PipeTransform } from '@angular/core';
import { Line } from '../models/line';

@Pipe({
  name: 'lineName'
})
export class LineNamePipe implements PipeTransform {

  transform(line: Line): any {

    console.log('Pipe line name ' + line.name_of_line)
    return line.name_of_line;
  }

}
