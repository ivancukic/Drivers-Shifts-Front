import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriversShifts } from 'src/app/models/drivers-shifts';
import { Line } from 'src/app/models/line';
import { Shift } from 'src/app/models/shift.enum';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DriversShiftsService } from 'src/app/services/drivers-shifts.service';

@Component({
  selector: 'app-drivers-shifts-read',
  templateUrl: './drivers-shifts-read.component.html',
  styleUrls: ['./drivers-shifts-read.component.css']
})
export class DriversShiftsReadComponent implements OnInit {

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

}
