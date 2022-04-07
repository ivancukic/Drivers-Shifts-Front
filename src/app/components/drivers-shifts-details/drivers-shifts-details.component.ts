import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriversShifts } from 'src/app/models/drivers-shifts';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DriversShiftsService } from 'src/app/services/drivers-shifts.service';
import { Shift } from 'src/app/models/shift.enum';
import { Line } from 'src/app/models/line';

@Component({
  selector: 'app-drivers-shifts-details',
  templateUrl: './drivers-shifts-details.component.html',
  styleUrls: ['./drivers-shifts-details.component.css']
})
export class DriversShiftsDetailsComponent implements OnInit {

  currentDriver: Driver = {};
  currentLine: Line = {};
  currentUser: User = new User;
  currentDriversShifts: DriversShifts = {};
  currentShift = Shift;
  shifts = Object.values(Shift);

  constructor(
    private route: ActivatedRoute,
    private driversShiftsService: DriversShiftsService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit(): void {
    this.getDriversShifts(this.route.snapshot.params.id);
  }

  getDriversShifts(id: string) {

    this.driversShiftsService.get(id).subscribe (
      data => {
        this.currentDriversShifts = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  changeShift() {

    this.driversShiftsService.changeShifts(this.currentDriversShifts.id, this.currentDriversShifts).subscribe (

      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
