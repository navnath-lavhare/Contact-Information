import { Component, OnInit, ViewChild } from "@angular/core";
import { EditContactService } from './edit-contact.service';
import { ActivatedRoute,  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html'
})

export class EditContactComponent implements OnInit {
    id: string;
    @ViewChild('f', null) form: any;
    contact: Object;
    constructor(private conService: EditContactService, 
        private router: ActivatedRoute, private toastr: ToastrService,
        private route: Router){
        this.router.params.subscribe((data)=>{
            this.id = data['id'];
        });
    }
    ngOnInit(){
        this.conService.getContact(this.id)
        .subscribe((data) =>{
            this.contact = data;
            this.form.setValue({
                firstName: data['firstName'],
                lastName: data['lastName'],
                email: data['email'],
                phoneNumber: data['phoneNumber'],
                status: data['status']
            });
            
        }, err =>{
            this.toastr.error("","Server error occurred");
        })
    }
    onSave(f){
        if(f.inValid) return;
        this.conService.saveContact(f.value, this.contact['_id'])
        .subscribe((res)=>{
            this.toastr.success("",res['message']);
            f.reset();
            this.route.navigate(['/ContactsList']);
        }, err =>{
            this.toastr.success("",err['message']);
        })
    }
}