import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.component.html',
  styleUrls: ['./portugal.component.css']
})
export class PortugalComponent implements OnInit {

  public primeiraLigaScores: any = [];
  public primeiraLigaStanding: any = [];

  constructor(private ps:LivescoresService){}

  ngOnInit() {
    this.ps.getPrimeiraLigaFxturesData().subscribe(data =>
      {
        this.primeiraLigaScores = data;
      });

      this.ps.getprimeiraLigaStandingData().subscribe(data =>
      {
        this.primeiraLigaStanding = data;
      });
  }

}
