import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-france',
  templateUrl: './france.component.html',
  styleUrls: ['./france.component.css']
})
export class FranceComponent implements OnInit {

  public ligue1Scores: any = [];
  public ligue1Standing: any = [];

  constructor(private ls:LivescoresService){}

  ngOnInit() {
    this.ls.getLigue1FxturesData().subscribe(data =>
      {
        this.ligue1Scores = data;
      });

      this.ls.getLigue1StandingData().subscribe(data =>
      {
        this.ligue1Standing = data;
      });
  }

}
