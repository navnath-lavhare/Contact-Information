import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddContactService } from './add-contact.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html'
})

export class AddContactComponent implements OnInit {
    @ViewChild('f', null) form: any;
    constructor(private contactService: AddContactService,
        private toastr: ToastrService,
        private route: Router){
        
    }
    ngOnInit(){
        setTimeout(()=>{
            this.form.controls["status"].setValue("Active");
        })
        
    }
    onCreate(f: NgForm) {
        if(f.invalid) return;
        this.contactService.createContact(f.value)
        .subscribe(data => {
            this.toastr.success("",data['message']);
            f.reset();
            this.route.navigate(['/ContactsList']);
        }, err => {
            this.toastr.error("","Server error occurred");
      })

    }
}