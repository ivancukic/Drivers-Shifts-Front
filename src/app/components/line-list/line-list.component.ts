import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/line';
import { LineService } from 'src/app/services/line.service';

@Component({
  selector: 'app-line-list',
  templateUrl: './line-list.component.html',
  styleUrls: ['./line-list.component.css']
})
export class LineListComponent implements OnInit {

  lines: Line[] = [];
  currentLine: Line = {};
  currentIndex: number = -1;

  constructor(private lineService: LineService) { }

  ngOnInit(): void {
    this.retriveLines();
  }

  retriveLines() {

    this.lineService.getLineList().subscribe (

      data => {
        this.lines = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  setActiveLine(line: Line, index: number): void {

    this.currentLine = line;
    this.currentIndex = index;
  }

}
