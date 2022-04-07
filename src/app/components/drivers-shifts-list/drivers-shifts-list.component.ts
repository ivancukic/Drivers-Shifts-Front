import { Component, OnInit } from '@angular/core';
import { DriversShifts } from 'src/app/models/drivers-shifts';
import { Shift } from 'src/app/models/shift.enum';
import { DriversShiftsService } from 'src/app/services/drivers-shifts.service';

@Component({
  selector: 'app-drivers-shifts-list',
  templateUrl: './drivers-shifts-list.component.html',
  styleUrls: ['./drivers-shifts-list.component.css']
})
export class DriversShiftsListComponent implements OnInit {

  driversShiftsList: DriversShifts[] = [];
  currentDriversShifts: DriversShifts = {};
  currentIndex: number = -1;
  currentShift?: Shift;


  constructor(private driversShiftsService: DriversShiftsService) { }

  ngOnInit(): void {
    this.retriveDriversShifts();
  }

  retriveDriversShifts() {

    this.driversShiftsService.getDriversShiftsList().subscribe (

      data => {
        this.driversShiftsList = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  setActiveDriversShifts(driversShifts: DriversShifts, index: number): void {
    this.currentDriversShifts = driversShifts;
    this.currentIndex = index;
  }

}
