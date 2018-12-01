import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-netherland',
  templateUrl: './netherland.component.html',
  styleUrls: ['./netherland.component.css']
})
export class NetherlandComponent implements OnInit {

  public eredivisieScores: any = [];
  public eredivisieStanding: any = [];

  constructor(private ls:LivescoresService){}

  ngOnInit() {
    this.ls.getEredivisieFxturesData().subscribe(data =>
      {
        this.eredivisieScores = data;
      });

      this.ls.getEredivisieStandingData().subscribe(data =>
      {
        this.eredivisieStanding = data;
      });
  }


}
