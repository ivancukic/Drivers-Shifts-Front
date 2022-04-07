import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Line } from 'src/app/models/line';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LineService } from 'src/app/services/line.service';

@Component({
  selector: 'app-line-details',
  templateUrl: './line-details.component.html',
  styleUrls: ['./line-details.component.css']
})
export class LineDetailsComponent implements OnInit {

  currentLine: Line = {};
  currentUser: User = new User;

  constructor(
    private lineService: LineService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService)
    {
      this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
      });
     }

  ngOnInit(): void {
    this.getLine(this.route.snapshot.params.id);
  }

  getLine(id: string) {

    this.lineService.get(id).subscribe (
      data => {
        this.currentLine = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateLine() {

    this.lineService.updateLine(this.currentLine.id, this.currentLine).subscribe (

      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  deleteLine() {

    this.lineService.deleteLine(this.currentLine.id).subscribe (

      response => {

        console.log(response);
        this.router.navigate(['/lines']);
      },
      error => {
        console.log(error);
      });
  }

}
