import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class EditContactService {
    constructor(private http: HttpClient){

    }

    getContact(id) {
        return this.http.get(environment.apiUrl+"contacts/"+id);
        
    }
    saveContact(contact, id){
        return this.http.put(environment.apiUrl+"contacts/"+id, contact);
    }

}