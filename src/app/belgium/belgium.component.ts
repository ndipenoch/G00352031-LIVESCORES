import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-belgium',
  templateUrl: './belgium.component.html',
  styleUrls: ['./belgium.component.css']
})
export class BelgiumComponent implements OnInit {

  public firstDivisionAScores: any = [];
  public firstDivisionAStanding: any = [];

  constructor(private ls:LivescoresService){}

  ngOnInit() {
    this.ls.getfirstDivisionAFxturesData().subscribe(data =>
      {
        this.firstDivisionAScores = data;
      });

      this.ls.getfirstDivisionAStandingData().subscribe(data =>
      {
        this.firstDivisionAStanding = data;
      });
  }

}
