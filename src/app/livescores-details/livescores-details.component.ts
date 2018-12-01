import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livescores-details',
  templateUrl: './livescores-details.component.html',
  styleUrls: ['./livescores-details.component.css']
})
export class LivescoresDetailsComponent implements OnInit {

  title = 'app';
  public scores: any = [];


  constructor(private ls:LivescoresService){}

  ngOnInit(){
    this.ls.getLivescoresData().subscribe(data =>
      {
        this.scores = data;

      });
   }

}
