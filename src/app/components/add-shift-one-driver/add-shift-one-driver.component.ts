import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { Line } from 'src/app/models/line';
import { DriverService } from 'src/app/services/driver.service';
import { ShiftService } from 'src/app/services/shift.service';

@Component({
  selector: 'app-add-shift-one-driver',
  templateUrl: './add-shift-one-driver.component.html',
  styles: [
  ]
})
export class AddShiftOneDriverComponent implements OnInit {

  currentShift: Line = {};
  drivers: Driver[] = [];
  driverOneId: number = 0;

  constructor(
    private shiftService: ShiftService,
    private driverService: DriverService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getShift(this.route.snapshot.params.id);
    this.retriveDrivers();
  }

  getShift(id: string) {
    this.shiftService.get(id).subscribe (
      data => {
        this.currentShift = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateShift() {

    this.shiftService.updateShiftOne(this.currentShift.id, this.currentShift, this.driverOneId).subscribe (

      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  retriveDrivers() {

    this.driverService.getDriverList().subscribe (


      data => {
        this.drivers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }


}
