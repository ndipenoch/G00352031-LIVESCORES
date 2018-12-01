import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import {LivescoresService} from '../livescores.service';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private ls:LivescoresService){}
   detail : any = [];

   ngOnInit() { 
     console.log(this.route.snapshot.params['id']); 
     this.ls.getDetail(this.route.snapshot.params['id']).subscribe(data => 
      { 
        this.detail = data;
        console.log(this.detail)
       })
}

/*Edit information*/
onEditAccount(form: NgForm) { 
  this.ls.updateDetail(this.detail[0]._id, form.value.fullname, form.value.city,form.value.country,form.value.telephone,form.value.email,form.value.message).subscribe(() => {
    this.router.navigate(['/send-request']);
  }); 
  
   }

}
