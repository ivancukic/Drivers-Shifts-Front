import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { Line } from 'src/app/models/line';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DriverService } from 'src/app/services/driver.service';
import { ShiftService } from 'src/app/services/shift.service';

@Component({
  selector: 'app-add-shift-three-driver',
  templateUrl: './add-shift-three-driver.component.html',
  styles: [
  ]
})
export class AddShiftThreeDriverComponent implements OnInit {

  currentShift: Line = {};
  drivers: Driver[] = [];
  driverOneId: number = 0;
  driverTwoId: number = 0;
  driverThreeId: number = 0;
  currentUser: User = new User; // MISLIM DA MI NE TREBA

  constructor(
    private shiftService: ShiftService,
    private driverService: DriverService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
      });
    }

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

    this.shiftService.updateShiftThree(this.currentShift.id, this.currentShift, this.driverOneId, this.driverTwoId, this.driverThreeId).subscribe (

      response => {
        console.log("Line id je " + this.currentShift.id);
        console.log("DriverOneId je " + this.driverOneId);
        console.log("DriverTwoId je " + this.driverTwoId);
        console.log("DriverThreeId je " + this.driverThreeId);
        console.log(response);
      },
      error => {
        console.log("Line id je " + this.currentShift.id);
        console.log("DriverOneId je " + this.driverOneId);
        console.log("DriverTwoId je " + this.driverTwoId);
        console.log("DriverThreeId je " + this.driverThreeId);
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
