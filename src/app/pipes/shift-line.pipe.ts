import { Pipe, PipeTransform } from '@angular/core';
import { Line } from '../models/line';
import { LineService } from '../services/line.service';

@Pipe({
  name: 'shiftLine'
})
export class ShiftLinePipe implements PipeTransform {

  line: Line = {};
  lines: Line[] = [];
  lineName?:  String;

  constructor(private lineService: LineService) { }


  transform(lineId: number): Line {
    console.log('pocetak');
    console.log('Ime Linije pocetak je ' +  this.line.name_of_line)
     return this.lineService.get(lineId).subscribe (

      data => {
        this.line = data;
        console.log('Ime je ' +  data.name_of_line)
        console.log('Ime Linije je ' +  this.line.name_of_line)
        return data;
      }

   );}

  //   this.lineService.get(lineId).subscribe(

  //     data => {
  //       console.log('Ime je ' +  data.name_of_line)

  //       this.line = data;
  //       console.log('Ime Linije je ' +  this.line.name_of_line)


  //     }

  //   );

  //   // return this.lineService.get(lineId).subscribe(

  //   //   data => {

  //   //     return data.id;
  //   //   });

  //   return this.line;
  // }

  // transform(lineId: number): any {

  //   console.log('Usao ')
  //   for(let oneLine of this.lines) {
  //     console.log('For pocetak ')
  //     if(oneLine.id === lineId) {
  //       console.log('Ime Linije je ' +  this.line.name_of_line)
  //       this.line = oneLine;
  //     }
  //     console.log('For kraj ')
  //   }

  //   return this.line.name_of_line;
  // }

  // lineList() {

  //   this.lineService.getLineList().subscribe (

  //     data => {
  //       this.lines = data;
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  // transform(lineId: number): any {

  //   console.log('Usao ')


  //   return this.lineService.getLineList().subscribe (

  //     data => {
  //       this.lines = data;
  //       for(let oneLine of this.lines) {
  //         console.log('For pocetak ')
  //         if(oneLine.id === lineId) {
  //           this.line = oneLine;
  //           console.log('Ime Linije je ' +  this.line.name_of_line);

  //         }
  //         console.log('For kraj ')

  //       }
  //       console.log('kraj kraja ')

  //     });


  // }

  // transform(lineId: number): Line {
  //   console.log('Usao ')


  //   for(let oneLine of this.lines) {
  //      console.log('For pocetak ')
  //     // if(oneLine.id === lineId) {

  //     //   this.line = oneLine;
  //     //   console.log('Ime Linije je ' +  this.line.name_of_line);
  //     // }

  //   }

  //   return this.line;
  // }


}
