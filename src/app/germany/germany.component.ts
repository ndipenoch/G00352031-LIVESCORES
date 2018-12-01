import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-germany',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.css']
})
export class GermanyComponent implements OnInit {

  public bundesligaScores: any = [];
  public bundesligaStanding: any = [];

  constructor(private ls:LivescoresService){}

  ngOnInit() {
    this.ls.getBundesligaFxturesData().subscribe(data =>
      {
        this.bundesligaScores = data;
      });

      this.ls.getbundesligaStandingData().subscribe(data =>
      {
        this.bundesligaStanding = data;
      });
  }
}
