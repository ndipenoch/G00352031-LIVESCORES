import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.css']
})
export class SpainComponent implements OnInit {

  public laLigaScores: any = [];
  public laLigatanding: any = [];

  constructor(private ls:LivescoresService){}

  ngOnInit() {
    this.ls.getLaLigaFxturesData().subscribe(data =>
      {
        this.laLigaScores = data;
      });

      this.ls.getLaLigaStandingData().subscribe(data =>
      {
        this.laLigatanding = data;
      });
  }

}
