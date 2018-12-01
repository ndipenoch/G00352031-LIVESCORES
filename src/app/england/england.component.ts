import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-england',
  templateUrl: './england.component.html',
  styleUrls: ['./england.component.css']
})
export class EnglandComponent implements OnInit {

  public eplScores: any = [];
  public eplStanding: any = [];

  constructor(private ls:LivescoresService){}

  ngOnInit(){
    this.ls.getEPLFxturesData().subscribe(data =>
      {
        this.eplScores = data;
      });

      this.ls.getEPLStandingData().subscribe(data =>
      {
        this.eplStanding = data;
      });
   }

  

}
