import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {LivescoresService} from '../livescores.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  constructor(private service:LivescoresService) { }

  /*Send the information to the server and reset the form to be re-use again*/
  /*If form is not completely fill or valid don't send any information to the server and show an error message*/
  onAddAccount(form: NgForm) {
    if(!form.valid){
    alert("All the fields must be filled")
    return;
    }
    this.service.addDetail(form.value.fullname, form.value.city,form.value.country,form.value.telephone,form.value.email,form.value.message).subscribe();
    form.resetForm();
    
  }

  ngOnInit() {

   }
}
