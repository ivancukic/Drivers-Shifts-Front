import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/line';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LineService } from 'src/app/services/line.service';

@Component({
  selector: 'app-add-line',
  templateUrl: './add-line.component.html',
  styleUrls: ['./add-line.component.css']
})
export class AddLineComponent implements OnInit {

  submitted = false;
  line: Line = {};
  currentUser: User = new User;

  constructor(private lineService: LineService,
              private authenticationService: AuthenticationService)
              {
                this.authenticationService.currentUser.subscribe(data => {
                  this.currentUser = data;
                });
              }

  ngOnInit(): void {
  }

  saveLine() {

    const data = {

      name_of_line: this.line.name_of_line,
      start_time: this.line.start_time,
      end_time: this.line.end_time,
      user: this.currentUser
    };
    this.lineService.addLine(data).subscribe(
      response => {

        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

}
