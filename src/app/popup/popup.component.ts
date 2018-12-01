import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';
import {Detail} from '../details.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
import {Inject} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  details: any = [];

  constructor(private ls:LivescoresService,public dialogRef: MatDialogRef<PopupComponent>) { }

  /*Get data/information from the server*/
  ngOnInit(){
    this.ls.getDetailData().subscribe(data => {
        this.details = data;
      });
  }
 /*Close the pop up window once this function is called*/
  onNoClick(): void {
    this.dialogRef.close();
  }

  /*Delete a message once this function is called*/
  onDelete(id: string){ 
    console.log("Deleting item") 
    this.ls.deleteDetail(id).subscribe(()=>{
      this.ngOnInit();
    }); 
    this.ngOnInit(); }

    /*Refresh the page, so as to logout  on this fucntion is called*/
    refresh(): void {
     window.location.reload();
 }

}
