import { Component, ViewChild } from '@angular/core';
import { ContactListService } from './contact-list.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-contacts-list',
    templateUrl: './contacts-list.component.html'
})

export class ContactsListComponent {
    contacts: any[];
    statuses: any[];
    loading: boolean = false;
    @ViewChild('dt', {static: false}) table: any;
    dropdownList = [
        { item_id: 1, item_text: 'Bali', degree: 'MCA', country: 'India' },
        { item_id: 2, item_text: 'Mahi', degree: 'cOMPUTER', country: 'India' },
        { item_id: 3, item_text: 'Yuvraj', degree: 'CA', country: 'Pakistan' },
        { item_id: 4, item_text: 'Amol', degree: 'BA', country: 'US' },
        { item_id: 5, item_text: 'Dhiraj', degree: 'MA', country: 'Lanka' }
    ];
    selectedItems = [
        { item_id: 3, item_text: 'Pappu', degree: 'DED', country: 'Pakistan' },
        { item_id: 4, item_text: 'Champa', degree: 'MCS', country: 'Lanka' }
      ];
    constructor(private conService: ContactListService,
        private toastr: ToastrService) { }
    ngOnInit() {
        this.getContactList();
        
            
    }
    getContactList(){
        this.loading = true;
        this.conService.getContacts()
        .subscribe((data: any)=>{
            this.loading = false;
            this.contacts = data['data']; 
        }, err=>{
            this.loading = false;
            this.toastr.error("","Server error occurred");
        })
    }
    onRemove(id){
        if(confirm("Are you sure to delete this contact ?")) {
            this.conService.deleteContact(id)
            .subscribe(res=>{
                this.toastr.success("",res['message']);
                this.getContactList();
            }, err=>{
                this.toastr.error("","Server error occurred");
            })
        }
    }
    onActivityChange(event) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    }

    onDateSelect(value) {
        this.table.filter(this.formatDate(value), 'date', 'equals')
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    onRepresentativeChange(event) {
        debugger;
        this.table.filter(event.value, 'representative', 'in')
    }
    onItemSelect(event){
        alert(JSON.stringify(event))
    }
}