import { Component, OnInit } from '@angular/core';
import {LivescoresService} from '../livescores.service';
import { Observable } from 'rxjs';
import {Detail} from '../details.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopupComponent } from 'src/app/popup/popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  details: any = [];
  i:any;
  j:any;
  adminName:any =[];
  userNameCnt:any=0;
  passwordCnt:any=0;
  isLogin: boolean;
  public usernameArr: any=[] ;
  public passwordArr: any=[] ;
  public usernameFile: any=["mark","martin","admin","James","ndipenoch","GMIT"] ;
  public passwordFile: any=["marco","teacher","admin","Galway","student","college"] ;
 

  constructor(private ls:LivescoresService, public dialog: MatDialog){}

  onUserLogin(form: NgForm) {
  
    this.usernameArr=form.value.username;
    this.passwordArr=form.value.password;
   
 /*loop throught the username and password array to check the user name and password*/
    for(this.i=0;this.i<this.usernameFile.length;this.i++)
        {
          
          if(this.usernameFile[this.i]==this.usernameArr)
          {
            this.j=this.i;
            this.userNameCnt++;
            /*If the username name is found get position to check if the password will match the content of the possition in the password array*/
            /*If login is succefully change islogin to true and open a pop up */
            if(this.passwordFile[this.j]==this.passwordArr)
            {
              this.passwordCnt++;
              this.adminName=this.usernameFile[this.j];
              this.isLogin=true;
              this.openDialog();
            }
   
          }
          
        }
        /*Show an error message if the username/password don't match*/
        if(this.passwordCnt==0 || this.userNameCnt==0){alert("Incorrect Details")
    
      }
        this.passwordCnt=0;
        this.userNameCnt=0;
        form.resetForm();
  }

  
  ngOnInit(){
    this.ls.getDetailData().subscribe(data => {
        this.details = data;
      });
  }

  /*Delete an item*/
   onDelete(id: string){ 
     console.log("Deleting item") 
     this.ls.deleteDetail(id).subscribe(()=>{
       this.ngOnInit();
     }); 
     this.ngOnInit(); }

     /*refrsh a page, so as to logout*/
     refresh(): void {
      window.location.reload();
  }

  /*open a pop up box*/
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
       width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
