import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddContactService } from './add-contact.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonPopupComponent } from 'src/app/common-module/common-popup/common-popup.component';

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html'
})

export class AddContactComponent implements OnInit {
    @ViewChild('f', null) form: any;
    dropdownList = [
        { item_id: 1, item_text: 'Mumbai', state: 'Mahashtra', country: 'India' },
        { item_id: 2, item_text: 'Bangaluru', state: 'Bihar', country: 'India' },
        { item_id: 3, item_text: 'Pune', state: 'Hydrabad', country: 'Pakistan' },
        { item_id: 4, item_text: 'Navsari', state: 'Delhi', country: 'US' },
        { item_id: 5, item_text: 'New Delhi', state: 'Goa', country: 'Lanka' }
    ];
    selectedItems = [
        { item_id: 3, item_text: 'Pune', state: 'Hydrabad', country: 'Pakistan' },
        { item_id: 4, item_text: 'Navsari', state: 'Goa', country: 'Lanka' }
      ];
    constructor(private contactService: AddContactService,
        private toastr: ToastrService,
        private route: Router,
        ){
        
    }
    ngOnInit(){
        setTimeout(()=>{
            this.form.controls["status"].setValue("Active");
        })
        
    }
    onItemSelect(event){
        alert(JSON.stringify(event))
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
    openModel(){
        //this.modalService.open(CommonPopupComponent);
    }
}