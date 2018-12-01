import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-italy',
  templateUrl: './italy.component.html',
  styleUrls: ['./italy.component.css']
})
export class ItalyComponent implements OnInit {

  public seriaAScores: any = [];
  public seriaAStanding: any = [];

  constructor(private ls:LivescoresService){}

  ngOnInit() {
    this.ls.getSeriaAFxturesData().subscribe(data =>
      {
        this.seriaAScores = data;
      });

      this.ls.getLaSeriaAStandingData().subscribe(data =>
      {
        this.seriaAStanding = data;
      });
  }
}
