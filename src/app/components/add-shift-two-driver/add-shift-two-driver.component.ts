import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { Line } from 'src/app/models/line';
import { DriverService } from 'src/app/services/driver.service';
import { ShiftService } from 'src/app/services/shift.service';

@Component({
  selector: 'app-add-shift-two-driver',
  templateUrl: './add-shift-two-driver.component.html',
  styles: [
  ]
})
export class AddShiftTwoDriverComponent implements OnInit {

  currentShift: Line = {};
  drivers: Driver[] = [];
  driverOneId: number = 0;
  driverTwoId: number = 0;
  submitted = false;
  validated = true;

  constructor(private shiftService: ShiftService,
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

    this.shiftService.updateShiftTwo(this.currentShift.id, this.currentShift, this.driverOneId, this.driverTwoId).subscribe (

      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
        if(error instanceof HttpErrorResponse) {
          this.validated = false;
        }
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
